import React, { useState } from 'react';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import CloseIcon from '@mui/icons-material/Close';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { useNavigate } from 'react-router';
import { Navbar, Nav, NavLink } from 'react-bootstrap';
import './header.scss';

const Header = () => {
    
    const navigate = useNavigate();

    const [toggled, setToggled] = useState(false);

    const handleToggle = () => {
        setToggled(!toggled);
    }

    const renderMenu = () => {
        return (
            <div className="toggle__menu">
                {toggled ? <CloseIcon style={{ transform: 'scale(1.2)', transition: 'all 1.5s ease' }} /> : <DensityMediumIcon style={{ transition: 'all 0.5s' }} />}
            </div>
        )
    }

    return (
        <>
            <Navbar fixed="top" collapseOnSelect expand="lg" bg="light" variant="light" onToggle={handleToggle}>
                <Navbar.Brand
                    className="header__logo__container"
                    onClick={() => {
                        navigate('/')
                    }}
                >
                    <BloodtypeIcon className="header__logo" />
                    <div className="header__logo___text">FRIEND<span className="red">FOR</span>LIFE</div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav">
                    {renderMenu()}
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink
                            className="header__links__container"
                            onClick={() => { navigate('/') }}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            className="header__links__container"
                            onClick={() => { navigate('/request') }}
                        >
                            Request Blood
                        </NavLink>
                        <NavLink
                            className="header__links__container"
                            onClick={() => { navigate('/donate') }}
                        >
                            Donate Blood
                        </NavLink>
                        <NavLink
                            className="header__links__container"
                            onClick={() => { navigate('/request') }}
                        >
                            Contact Us
                        </NavLink>
                        <NavLink
                            className="header__links__container"
                            onClick={() => { navigate('/donate') }}
                        >
                            Support Us
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Header;
