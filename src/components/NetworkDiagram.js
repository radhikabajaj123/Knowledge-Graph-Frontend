import * as d3 from 'd3';
import { useEffect, useRef } from 'react';
import DrawNetwork from './DrawNetwork';

export const NetworkDiagram = ({graph}) => {
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

    // let cameraOffset = { x: window.innerWidth/2, y: window.innerHeight/2 }
    // let cameraZoom = 1
    // let MAX_ZOOM = 5
    // let MIN_ZOOM = 0.1
    // let SCROLL_SENSITIVITY = 0.0005

    // context.translate( window.innerWidth / 2, window.innerHeight / 2 )
    // context.scale(cameraZoom, cameraZoom)
    // context.translate( -window.innerWidth / 2 + cameraOffset.x, -window.innerHeight / 2 + cameraOffset.y )

    // // Gets the relevant location from a mouse or single touch event
    // function getEventLocation(e) {
    //     if (e.touches && e.touches.length === 1)
    //     {
    //         return { x:e.touches[0].clientX, y: e.touches[0].clientY }
    //     }
    //     else if (e.clientX && e.clientY)
    //     {
    //         return { x: e.clientX, y: e.clientY }        
    //     }
    // }

    // let isDragging = false
    // let dragStart = { x: 0, y: 0 }

    // function onPointerDown(e) {
    //     isDragging = true
    //     dragStart.x = getEventLocation(e).x/cameraZoom - cameraOffset.x
    //     dragStart.y = getEventLocation(e).y/cameraZoom - cameraOffset.y
    // }

    // function onPointerUp(e) {
    //     isDragging = false
    //     initialPinchDistance = null
    //     lastZoom = cameraZoom
    // }

    // function onPointerMove(e) {
    //     if (isDragging)
    //     {
    //         cameraOffset.x = getEventLocation(e).x/cameraZoom - dragStart.x
    //         cameraOffset.y = getEventLocation(e).y/cameraZoom - dragStart.y
    //     }
    // }

    // function handleTouch(e, singleTouchHandler) {
    //     if ( e.touches.length === 1 )
    //     {
    //         singleTouchHandler(e)
    //     }
    //     else if (e.type === "touchmove" && e.touches.length === 2)
    //     {
    //         isDragging = false
    //         handlePinch(e)
    //     }
    // }

    // let initialPinchDistance = null
    // let lastZoom = cameraZoom

    // function handlePinch(e) {
    //     e.preventDefault()
        
    //     let touch1 = { x: e.touches[0].clientX, y: e.touches[0].clientY }
    //     let touch2 = { x: e.touches[1].clientX, y: e.touches[1].clientY }
        
    //     // This is distance squared, but no need for an expensive sqrt as it's only used in ratio
    //     let currentDistance = (touch1.x - touch2.x)**2 + (touch1.y - touch2.y)**2
        
    //     if (initialPinchDistance == null)
    //     {
    //         initialPinchDistance = currentDistance
    //     }
    //     else
    //     {
    //         adjustZoom( null, currentDistance/initialPinchDistance )
    //     }
    // }

    // function adjustZoom(zoomAmount, zoomFactor) {
    //     if (!isDragging)
    //     {
    //         if (zoomAmount)
    //         {
    //             cameraZoom += zoomAmount
    //         }
    //         else if (zoomFactor)
    //         {
    //             console.log(zoomFactor)
    //             cameraZoom = zoomFactor*lastZoom
    //         }
            
    //         cameraZoom = Math.min( cameraZoom, MAX_ZOOM )
    //         cameraZoom = Math.max( cameraZoom, MIN_ZOOM )
            
    //         console.log(zoomAmount)
    //     }
    // }

    // canvas.addEventListener('mousedown', onPointerDown)
    // canvas.addEventListener('touchstart', (e) => handleTouch(e, onPointerDown))
    // canvas.addEventListener('mouseup', onPointerUp)
    // canvas.addEventListener('touchend',  (e) => handleTouch(e, onPointerUp))
    // canvas.addEventListener('mousemove', onPointerMove)
    // canvas.addEventListener('touchmove', (e) => handleTouch(e, onPointerMove))
    // canvas.addEventListener( 'wheel', (e) => adjustZoom(e.deltaY*SCROLL_SENSITIVITY))

    // run d3-force to find the position of nodes on the canvas
    d3.forceSimulation(nodes)

      // list of forces we apply to get node positions
      .force(
        'link',
        d3.forceLink(links).id((d) => d.id)
      )
      .force('collide', d3.forceCollide().radius(RADIUS))
      .force('charge', d3.forceManyBody())
      .force('center', d3.forceCenter(window.innerWidth / 2, window.innerHeight / 2))

      // at each iteration of the simulation, draw the network diagram with the new node positions
      .on('tick', () => {
        DrawNetwork(context, window.innerWidth, window.innerHeight, nodes, links, RADIUS);
      });
  }, [nodes, links]);

    
    return (
                <div>
                <canvas
                    ref={canvasRef}
                    style={{
                    width: window.innerWidth,
                    height: window.innerHeight,
                    backgroundColor: "#000000"
                    }}
                    width={window.innerWidth}
                    height={window.innerHeight}
                />
                </div>
        
    );
};
