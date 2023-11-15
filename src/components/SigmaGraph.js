import { useEffect } from "react";
import { MultiDirectedGraph } from "graphology";

import { SigmaContainer, useLoadGraph } from "@react-sigma/core";
import "@react-sigma/core/lib/react-sigma.min.css";

export const MyGraph = () => {
  const loadGraph = useLoadGraph();

  useEffect(() => {
    // Create the graph
    const graph = new MultiDirectedGraph();
    graph.addNode("A", { x: 0, y: 0, id: 0, name: "test", neo4jImportId: "87$225320", label: "Node A", size: 10 });
    graph.addNode("B", { x: 1, y: 1, label: "Node B", size: 10 });
    graph.addEdgeWithKey("rel1", "A", "B", { label: "REL_1" });
    graph.addEdgeWithKey("rel2", "A", "B", { label: "REL_2" });

    loadGraph(graph);
  }, [loadGraph]);

  return null;
};

export const MultiDirectedGraphView = () => {
  return (
    <SigmaContainer graph={MultiDirectedGraph} style={{ height: "500px", width: "500px" }}>
      <MyGraph />
    </SigmaContainer>
  );
};

export default MultiDirectedGraphView;
// import { useEffect } from "react";
// import Graph from "graphology";
// import { SigmaContainer, useLoadGraph } from "@react-sigma/core";
// import "@react-sigma/core/lib/react-sigma.min.css";

// export const LoadGraph = () => {
//   const loadGraph = useLoadGraph();

//   useEffect(() => {
//     const graph = new Graph();
//     graph.addNode("first", { x: 0, y: 0, size: 15, label: "My first node", color: "#FA4F40" });
//     loadGraph(graph);
//   }, [loadGraph]);

//   return null;
// };

// export const DisplayGraph = () => {
//   return (
//     <SigmaContainer style={{ height: "500px", width: "500px" }}>
//       <LoadGraph />
//     </SigmaContainer>
//   );
// };

// export default DisplayGraph;