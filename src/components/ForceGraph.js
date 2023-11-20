import React from "react";
import { runForceGraph } from "../components/ForceGraphGenerator";
import styles from "../components/ForceGraph.css";

export function ForceGraph({ linksData, nodesData, nodeHoverTooltip, graph }) {
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    let destroyFn;

    
      if (containerRef.current) {
        runForceGraph(containerRef.current, linksData, nodesData, nodeHoverTooltip);
        const { destroy } = runForceGraph(containerRef.current, linksData, nodesData, nodeHoverTooltip);
        destroyFn = destroy;
      }

    return destroyFn;
  }, [graph]);

  return <div ref={containerRef} className={styles.container}/>;
}