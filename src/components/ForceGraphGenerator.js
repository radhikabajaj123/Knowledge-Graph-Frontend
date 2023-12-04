
import * as d3 from "d3";
import styles from "../components/ForceGraph.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useLayoutEffect, useEffect, useState, useRef } from "react";
import d3ForceBoundary from "d3-force-boundary";

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

      
      // var parentDiv = document.getElementById("parentDiv");
      

      const color = () => { return "#fc9f42"; };

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

	    //   .scaleExtent([0, 5])
	    //   .translateExtent([[0, 0], [width, height]])

      // svg.selectAll("*").remove();

      const updateLink = svg
        .selectAll("line")
        .data(links)
        .join("line")
        .attr("stroke", "#999")
        .attr("stroke-opacity", 0.6)
        .attr("stroke-width", d => Math.sqrt(d.value));

      const updateNode = svg
        .selectAll("circle")
        .data(nodes)
        .join("circle")
        .attr("stroke", "#ff8103")
        .attr("stroke-width", 2)
        .attr("r", 54)
        .attr("fill", color)
        .call(drag(simulation));

      const updateLabel = svg
        .selectAll("text")
        .data(nodes)
        .join("text")
        .attr("class", "labels")
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'central')
        .text(d => {return d.properties.neo4jImportId;})
        .call(drag(simulation));
      

      // label.on("mouseover", (d) => {
      //   addTooltip(nodeHoverTooltip, d, d3.event.pageX, d3.event.pageY);
      // })
      //   .on("mouseout", () => {
      //     removeTooltip();
      //   });

      simulation.on("tick", () => {

        // update link positions
        updateLink
          .attr("x1", d => d.source.x)
          .attr("y1", d => d.source.y)
          .attr("x2", d => d.target.x)
          .attr("y2", d => d.target.y);

        // update node positions
        updateNode
          .attr("cx", d => d.x)
          .attr("cy", d => d.y);

        // update label positions
        updateLabel
          .attr("x", d => { return d.x; })
          .attr("y", d => { return d.y; })
      });
      
      // updateLink.exit().remove();
      // updateNode.exit().remove();
      // updateLabel.exit().remove();
      
    }

    
  }, [graph, width, height])

  return (
    // destroy: () => {
    //   simulation.stop();
    // },
    // nodes: () => {
    //   return svg.node();
    // }
    <svg width={width} height={height} ref={d3Container}/>
    
  );
}

export default RunForceGraph;