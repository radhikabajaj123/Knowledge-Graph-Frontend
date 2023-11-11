import InputWindow from "../components/InputWindow";
import OutputWindow from "../components/OutputWindow";
import {useState} from 'react';

const Home = () => {
    const [nodes, setNodes] = useState([])
    return (
        <div className="Home">
            <InputWindow nodes={nodes} setNodes={setNodes}/>
            <OutputWindow nodes={nodes}/>
        </div>
    )
}

export default Home