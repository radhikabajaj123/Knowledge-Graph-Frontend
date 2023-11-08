import Navbar from 'react-bootstrap/Navbar';
import logo from '../img/Logo.jpeg';
import {Link} from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="Navigation">
          <Navbar sticky="top">
              <Navbar.Brand>
                  <Link to ="/"><img className='navbar-content' src={logo}/></Link>
              </Navbar.Brand>
          </Navbar>
        </div>
      )
}

export default Navigation