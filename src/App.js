import { Link } from 'react-router-dom'

import CRUDRoutes from './components/routes/CRUDRoutes';

import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { NavDropdown } from 'react-bootstrap';

function App() {
  return (
    <div className='container'>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <Link to='/' className='navbar-brand' style={{ paddingLeft: 10 }}>CRUD</Link>
        <ul className='navbar-nav mr-auto'>
          
          <li className='nav-item'>
            <Link to='/' className='nav-link'>Home</Link>
          </li>

	  <li className="navitem">
              <Link to="about" className="nav-link">About</Link>
          </li>

          <NavDropdown title="Student" id="basic-nav-dropdown">
              <NavDropdown.Item >
              <Link to="createStudent" className="dropdown-item">Create Student</Link>
                </NavDropdown.Item>
              <NavDropdown.Item >
              <Link to="listStudent" className="dropdown-item">List Student</Link>
                </NavDropdown.Item>
          </NavDropdown>

            
            <NavDropdown title="Professor" id="basic-nav-dropdown">
              <NavDropdown.Item >
              <Link to="createProfessor" className="dropdown-item">Create Professor</Link>
                </NavDropdown.Item>
              <NavDropdown.Item >
              <Link to="listProfessor" className="dropdown-item">List Professor</Link>
                </NavDropdown.Item>
            </NavDropdown>

        </ul>
      </nav>
      {<CRUDRoutes />}
    </div>
  );
}

export default App;
