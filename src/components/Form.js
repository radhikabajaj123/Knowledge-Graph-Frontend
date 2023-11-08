import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Form = () => {
    const [key, setKey] = useState('get');

    return (
        <div className='myform'>
            <Tabs className='mytabs' activeKey={key} onSelect={(k) => setKey(k)}>
                <Tab eventKey="get" title="Get" className='mytab'>
                Tab content for Get
                </Tab>
                <Tab eventKey="edit" title="Edit" className='mytab'>
                Tab content for Edit
                </Tab>
            </Tabs>
        </div>
    )

} 

export default Form