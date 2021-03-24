import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import logo from '../../unnamed.png';

const Navbar = () => {
    return (
        <NavbarContainer>
            <nav className="navbar navbar-expand-lg navbar-light px-5 py-0">
            <Link className="navbar-brand" to="#">
                <img style={{width: "100px"}} src={logo} alt="logo"/>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {/* <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                       <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/add-receipt">Add Receipt</Link>
                    </li>
      
                </ul> */}
    
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                <Link className="nav-link" to="/add-receipt">Add Receipt</Link>
            </div>
            </nav>
        </NavbarContainer>
    )
}

export default Navbar;

//Main NAVBAR CONTAINER
const NavbarContainer = styled.div`
    margin: 2rem 0;
    //background: var(--dark-green);
    .nav-link{
        font-weight: 900;
        color: #000 !important;
        &:hover {
            color: #00ccb4 !important;
        }
    }
`;