import { NetworkDiagram } from './NetworkDiagram';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const NetworkDiagramGenerator = ({graph}) => {

  return (
        <NetworkDiagram graph={graph}/>
  );
}

export default NetworkDiagramGenerator;