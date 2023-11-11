const Graph = ({nodes}) => {
    return (
        nodes.map((node) => (
            <div>
                <p>{node.identity}</p>
                <p>{node.labels}</p>
                <p>{node.properties.name}</p>
                <p>{node.properties.neo4jImportId}</p>
            </div>
        ))
    )
    
                
    
}

export default Graph