import react from 'react';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/js/dist/dropdown'
import * as Icon from 'react-bootstrap-icons';
import './Home.css'
import { Outlet } from 'react-router-dom';
import Home from './Home';
import Employee from './Employee';
import Category from './Category';
import Profile from './Profile';
import img from '../assets/m (1).png';
function DashBoard()
{
return(
<div className="container-fluid">
    <div className="row flex-nowrap">
      {/* <div className="col-auto col-sm-2 d-flex flex-column align-items-center justify-content-between bg-dark text-white min-vh-100">
        <div>
        <Link to="/" className="text-decoration-none d-flex align-items-center text-white text-center text-sm-start d-none d-sm-inline text-decoration-none">
          <span className="fs-3 ms-2 fs-sm-1 text-center">MT</span>
        </Link>
            <hr className='text-white d-none d-sm-block'></hr>
            <ul className='nav nav-tabs nav-pills flex-column mt-2 mt-sm-0' style={{ listStyle: 'none', padding: '0'}}>
            <li className="nav-item my-2 mt-4 py-2 py-sm-0">
            <Link to="/create" className="nav-link text-white text-center text-sm-start" activeClassName="active" exact>
              <Icon.Speedometer2 color="white" size={30} className="ms-0 ms-sm-1"></Icon.Speedometer2>
              <span className="ms-2 d-none d-sm-inline">Dashboard</span>
            </Link>
          </li>
          <li className="nav-item my-1 mt-4 py-2 py-sm-0">
            <Link to="/create" className="nav-link text-white text-center text-sm-start" activeClassName="active">
              <Icon.People color="white" size={30} className="ms-0 ms-sm-1"></Icon.People>
              <span className="ms-2 d-none d-sm-inline">Manage Employee</span>
            </Link>
          </li>
          <li className="nav-item my-1 mt-4 py-2 py-sm-0">
            <Link to="/category" className="nav-link text-white text-center text-sm-start" activeClassName="active">
              <Icon.Grid color="white" size={30} className="ms-0 ms-sm-1"></Icon.Grid>
              <span className="ms-2 d-none d-sm-inline">Category</span>
            </Link>
          </li>
          <li className="nav-item my-1 mt-4 py-2 py-sm-0">
            <Link to="/profile" className="nav-link text-white text-center text-sm-start" activeClassName="active">
              <Icon.HouseGearFill color="white" size={30} className="ms-0 ms-sm-1"></Icon.HouseGearFill>
              <span className="ms-2 d-none d-sm-inline">Profile</span>
            </Link>
          </li>
      </ul>
      </div>
        <div className="dropdown open w">
              <a className="d-flex align-items-center text-white text-decoration-none btn dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false" type='button'>
                <img src="" alt="hugenerd" width="30" height="30" className="rounded-circle" />
                <span className="d-none d-sm-inline ms-2">Account</span>
              </a>
              <div className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby='dropdownUser1'>
                <a className="dropdown-item" href="#">New project...</a>
                <a className="dropdown-item" href="#">Settings</a>
                <a className="dropdown-item" href="#">Profile</a>
                  <hr className="dropdown-divider" />
                
                <a className="dropdown-item" href="#">Sign out</a>
              </div>
            </div>
        </div> */}
         <div className="col-auto col-sm-2 d-flex flex-column align-items-center justify-content-between bg-dark text-white min-vh-100" style={{position:"sticky"}}>
      <div>
        <Link to="/" className="text-decoration-none d-flex align-items-center text-white text-center text-sm-start d-none d-sm-inline text-decoration-none">
          <span className="fs-3 ms-2 fs-sm-1 text-center">M<sub>Techno<span style={{color:"red"}}>logies</span></sub></span>
        </Link>
        <hr className="text-white d-none d-sm-block"></hr>
        <ul className="nav nav-tabs nav-pills flex-column mt-2 mt-sm-0" style={{ listStyle: 'none', padding: '0' }}>
          <li className="nav-item my-2 mt-4 py-5 py-sm-0">
            <Link to="/" className="nav-link text-white text-center text-sm-start">
              <Icon.Speedometer2 color="white" size={30} className="ms-0 ms-sm-1"></Icon.Speedometer2>
              <span className="ms-2 d-none d-sm-inline">Dashboard</span>
            </Link>
          </li>
          <li className="nav-item my-1 mt-0 mt-sm-4 py-2 py-sm-0">
            <Link to="/employee" className="nav-link text-white text-center text-sm-start">
              <Icon.People color="white" size={30} className="ms-0 ms-sm-1"></Icon.People>
              <span className="ms-2 d-none d-sm-inline">Manage Employee</span>
            </Link>
          </li>
          <li className="nav-item my-1 mt-4 py-2 py-sm-0">
            <Link to="/category" className="nav-link text-white text-center text-sm-start">
              <Icon.Grid color="white" size={30} className="ms-0 ms-sm-1"></Icon.Grid>
              <span className="ms-2 d-none d-sm-inline">Projects</span>
            </Link>
          </li>
          <li className="nav-item my-1 mt-4 py-2 py-sm-0">
            <Link to="/attendance" className="nav-link text-white text-center text-sm-start">
              <Icon.FileArrowDownFill color="white" size={30} className="ms-0 ms-sm-1"></Icon.FileArrowDownFill>
              <span className="ms-2 d-none d-sm-inline">Attendance</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="dropdown open w">
              <a className="d-flex align-items-center text-white text-decoration-none btn dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false" type='button'>
                <img src={img} alt="hugenerd" width="30" height="30" className="rounded-circle" />
                <span className="d-none d-sm-inline ms-2">Account</span>
              </a>
              <div className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby='dropdownUser1'>
                <a className="dropdown-item" href="#">New project...</a>
                <a className="dropdown-item" href="#">Settings</a>
                <a className="dropdown-item" href="#">Profile</a>
                  <hr className="dropdown-divider" />
                
                <a className="dropdown-item" href="/login">Sign out</a>
              </div>
            </div>
    </div>
        <div className='col p-0 m-0'>
            <div className='p-2 d-flex justify-content-center shadow w-100'>
                <h4>Employ<span style={{color:"red"}}>Ease</span></h4>
            </div>
            <div className="tab-content">
            <div className="tab-pane fade show active">
              {/* The Outlet component renders the matched child route component */}
              <Outlet />
            </div>
          </div>
        </div>
        </div>
        </div>
        
)
}
export default DashBoard