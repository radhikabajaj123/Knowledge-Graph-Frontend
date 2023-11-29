// import React from "react";
// import { RunForceGraph } from "../components/ForceGraphGenerator";
// import styles from "../components/ForceGraph.css";

// export function ForceGraph({ linksData, nodesData, graph}) {
//   const containerRef = React.useRef(null);

//   React.useEffect(() => {
//     let destroyFn;

    
//       if (containerRef.current) {
//         RunForceGraph(containerRef.current, linksData, nodesData);
//         const { destroy } = RunForceGraph(containerRef.current, linksData, nodesData);
//         destroyFn = destroy;
//       }

//     return destroyFn;
//   }, [graph]);

//   return <div ref={containerRef} className={styles.container}/>;
// }