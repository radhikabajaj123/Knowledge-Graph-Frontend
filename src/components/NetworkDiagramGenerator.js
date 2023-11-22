import { NetworkDiagram } from './NetworkDiagram';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const NetworkDiagramGenerator = ({graph, width, height}) => {

  return (
        <NetworkDiagram graph={graph} width={width} height={height}/>
  );
}

export default NetworkDiagramGenerator;