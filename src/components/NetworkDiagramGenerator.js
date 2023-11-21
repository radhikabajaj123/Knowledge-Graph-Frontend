import { NetworkDiagram } from './NetworkDiagram';

const NetworkDiagramGenerator = ({graph, width = 700, height = 400}) => {
  if (width === 0) {
    return null;
  }
  return <NetworkDiagram graph={graph} width={width} height={height} />;
}

export default NetworkDiagramGenerator;