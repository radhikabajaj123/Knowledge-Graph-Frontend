import RunForceGraph from "../components/ForceGraphGenerator";
import InputWindow from "../components/InputWindow";
import OutputWindow from "../components/OutputWindow";
import {useState} from 'react';

const Home = () => {
    const [graph, setGraph] = useState({})
    
    return (
        <div className="Home">
            <InputWindow graph={graph} setGraph={setGraph}/>
            <RunForceGraph graph={graph}/>
        </div>
    )
}

export default Home