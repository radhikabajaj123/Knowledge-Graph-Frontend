import InputWindow from "../components/InputWindow";
import OutputWindow from "../components/OutputWindow";
import {useState} from 'react';

const Home = () => {
    const [graph, setGraph] = useState({links: [], nodes: []})
    
    return (
        <div className="Home">
            <InputWindow graph={graph} setGraph={setGraph}/>
            <OutputWindow graph={graph} setGraph={setGraph}/>
        </div>
    )
}

export default Home