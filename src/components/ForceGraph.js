
import * as d3 from "d3";
import { useEffect, useState, useRef } from "react";
export const RunForceGraph = ( {graph, svgContainer} ) => { 
  const d3Container = useRef(null);
  

  // State to track width and height of SVG Container
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  // This function calculates width and height of the container
  const getSvgContainerSize = () => {
    const newWidth = svgContainer.current.clientWidth - 128;
    setWidth(newWidth);

    const newHeight = svgContainer.current.clientHeight;
    setHeight(newHeight);
  };

  useEffect(() => {
    // detect 'width' and 'height' on render
    getSvgContainerSize();
    // listen for resize changes, and detect dimensions again when they change
    window.addEventListener("resize", getSvgContainerSize);
    // cleanup event listener
    return () => window.removeEventListener("resize", getSvgContainerSize);
  }, []);

  useEffect(() => { 
    if (graph.links && graph.nodes) {


      const links = graph.links.map((d) => Object.assign({}, d));
      const nodes = graph.nodes.map((d) => Object.assign({}, d));

      const drag = (simulation) => {
        const dragstarted = (d) => {
          if (!d3.event.active) simulation.alpha(0.3).restart();
          d.fx = d.x;
          d.fy = d.y;
        };

        const dragged = (d) => {
          d.fx = d3.event.x;
          d.fy = d3.event.y;
        };

        const dragended = (d) => {
          if (!d3.event.active) simulation.alpha(0).restart();
          d.fx = null;
          d.fy = null;
        };

        return d3
          .drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended);
      };
      
      const simulation = d3
        .forceSimulation(nodes)
        .force("link", d3.forceLink(links).id(d => d.id).distance(200))
        .force("charge", d3.forceManyBody().strength(-1000))
        .force("collide", d3.forceCollide().strength(1).radius(180).iterations(1))
        .force("x", d3.forceX())
        .force("y", d3.forceY());

      d3.select(d3Container.current).selectAll("*").remove();
        
      const svg = d3
        .select(d3Container.current)
        .attr("viewBox", [-width / 2, -height / 2, width, height])
        .call(d3.zoom().on("zoom", function () {
          svg.attr("transform", d3.event.transform);
      })).append("g");

      const tooltip = d3.select("body")
        .append("div")
        .style("position", "absolute")
        .style("visibility", "hidden")
        .style("background-color", "#fbfbfb")
        .style("border", "solid")
        .style("border-color", "#999")
        .style("border-width", "2px")
        .style("border-radius", "5px")
        .style("padding", "4px");
        
      svg.append("defs").append("marker")
        .attr("id", "arrow")
        .attr("viewBox", "0 -5 10 10")
        .attr("refX", 32)
        .attr("refY", 0)
        .attr("fill", "#999")
        .attr("markerWidth", 6)
        .attr("markerHeight", 6)
        .attr("orient", "auto")
        .append("path")
        .attr("d", "M0,-5L10,0L0,5");

      const updateLink = svg
        .selectAll("line")
        .data(links)
        .join("line")
        .attr("stroke", "#999")
        .attr("stroke-opacity", 0.6)
        .attr("stroke-width", "4px")
        .attr("fill", "#4b4b4b")
        .attr("marker-end", "url(#arrow)")
        .call(drag(simulation));

        const updateLinkLabel = svg.append("g")
        .selectAll("text")
        .data(links)
        .join("text")
        .attr('text-anchor', 'middle')
        .attr("dx", 20)
        .attr("dy", -7)
        .attr('dominant-baseline', 'central')
        .attr("fill", "#4b4b4b")
        .text(d => { return d.type; })
        .call(drag(simulation));
          

      const updateNode = svg
        .selectAll("circle")
        .data(nodes)
        .join("circle")
        .attr("stroke", "#ff8103")
        .attr("stroke-width", 4)
        .attr("r", 54)
        .attr("fill", "#fc9f42")
        .on("mouseover", function(d) {
          tooltip.style("visibility", "visible")
            .html("<p style='font-size: 8px; color: #4b4b4b' ><b>Id: </b>" + d.id + "<br><b>Labels: </b>" + d.labels + "<br><b>ImportId: </b>" + d.properties.neo4jImportId + "<br><b>Name: </b>" + d.properties.name + "</p>")
            d3.select(this)
              .style("stroke", "#d4d4d4")
              .style("stroke-width", "8px")
        }) .on("mousemove", function() {
          tooltip
            .style("top", d3.event.pageY + "px")
            .style("left", d3.event.pageX + "px")
        }) .on("mouseleave", function() {
          tooltip
            .style("visibility", "hidden")
            d3.select(this)
              .style("stroke", "#ff8103")
              .style("stroke-width", "4px");
        })
        .call(drag(simulation));

      const updateNodeLabel = svg.append("g")
        .selectAll("text")
        .data(nodes)
        .join("text")
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'central')
        .attr("fill", "#4b4b4b")
        .text(d => {return d.properties.neo4jImportId;})
        .call(drag(simulation));


      simulation.on("tick", () => {


        // update link positions
        updateLink
          .attr("x1", d => d.source.x)
          .attr("y1", d => d.source.y)
          .attr("x2", d => d.target.x)
          .attr("y2", d => d.target.y);

        // update link label positions
        updateLinkLabel
        .attr("transform", function(d) {
          var xDiff = d.source.x - d.target.x; 
          var yDiff = d.source.y - d.target.y; 
          var angle = Math.atan2(yDiff, xDiff) * (180.0 / Math.PI);
          
          return "translate(" + (d.source.x + d.target.x) / 2 + ","
          + (d.source.y + d.target.y) / 2 + ")rotate(" + angle + ")"; 
        });;
      

        // update node positions
        updateNode
          .attr("cx", d => d.x)
          .attr("cy", d => d.y);

        // update node label positions
        updateNodeLabel
          .attr("x", d => { return d.x; })
          .attr("y", d => { return d.y; });
      });
      
      // updateLink.exit().remove();
      // updateNode.exit().remove();
      // updateLabel.exit().remove();
      
    }

    
  }, [graph, width, height])

  return (
    <svg width={width} height={height} ref={d3Container}/>
    
  );
}

export default RunForceGraph;