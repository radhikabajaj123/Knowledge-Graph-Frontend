import * as d3 from 'd3';
import { useEffect, useRef } from 'react';
import DrawNetwork from './DrawNetwork';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export const NetworkDiagram = ({graph, width, height}) => {
  // The force simulation mutates links and nodes, so create a copy first
  // Node positions are initialized by d3
  const RADIUS = 40;
  const links = graph.links.map((d) => ({ ...d }));
  const nodes = graph.nodes.map((d) => ({ ...d }));



  const canvasRef = useRef(null);
  

  useEffect(() => {
    // set dimension of the canvas element
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    if (!context) {
      return;
    }

    // run d3-force to find the position of nodes on the canvas
    d3.forceSimulation(nodes)

      // list of forces we apply to get node positions
      .force(
        'link',
        d3.forceLink(links).id((d) => d.id)
      )
      .force('collide', d3.forceCollide().radius(RADIUS))
      .force('charge', d3.forceManyBody())
      .force('center', d3.forceCenter(width / 2, height / 2))

      // at each iteration of the simulation, draw the network diagram with the new node positions
      .on('tick', () => {
        DrawNetwork(context, width, height, nodes, links, RADIUS);
      });
  }, [width, height, nodes, links]);

    
    return (
        <TransformWrapper>
            <TransformComponent>
                <div>
                <canvas
                    ref={canvasRef}
                    style={{
                    width: width,
                    height: height,
                    backgroundColor: "#F2F1F1"
                    }}
                    width={width}
                    height={height}
                />
                </div>
            </TransformComponent>
        </TransformWrapper>
        
    );
};
