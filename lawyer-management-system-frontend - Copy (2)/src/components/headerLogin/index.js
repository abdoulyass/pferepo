import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, MenuItem, IconButton, Typography } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { styled } from '@mui/system';
import { Personne1 } from "../../assets/images";
import './style.css';

const CustomMenu = styled(Menu)({
    '& .MuiPaper-root': {
        boxShadow: 'none',
        backGround:'#fff',
    
    },
});

function HeaderLogin() {
    const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleToggle = () => {
        setIsOffcanvasOpen(!isOffcanvasOpen);
    };

    const handleDropdownToggle = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleDropdownClose = () => {
        setAnchorEl(null);
    };

    const [userName, setUserName] = useState("Thomas Robin"); // État pour stocker le nom de l'utilisateur
    const handleLogout = () => {
        setUserName(""); // Efface le nom de l'utilisateur
        // Ajoutez ici toute autre logique de déconnexion
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand me-auto logo-container">
                        <img src="./logo.png" width={50} alt="Logo" />
                        <div className="logo-text">
                            <h2>Lawyers</h2>
                            <p>Services legales</p>
                        </div>
                    </Link>

                    <div className={`offcanvas offcanvas-end ${isOffcanvasOpen ? 'show' : ''}`} tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <Link to="/" className="navbar-brand me-auto logo-container">
                                <img src="./logo.png" width={30} alt="Logo" />
                            </Link>
                            <button type="button" className="btn-close" onClick={handleToggle} aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                                <li className="nav-item nav1">
                                    <a href="/dashboard" className="nav-link mx-lg-2">Acceuil</a>
                                </li>
                                <li className="nav-item nav1">
                                    <a href="/Clients" className="nav-link mx-lg-2">Clients</a>
                                </li>
                               
                                <li className="nav-item nav1">
                                    <IconButton
                                        edge="end"
                                        color="inherit"
                                        aria-label="menu"
                                        onClick={handleDropdownToggle}
                                    >
                                        <Typography variant="button" ml={1}>
                                            Problèmes
                                        </Typography>
                                        <ArrowDropDownIcon />
                                    </IconButton>
                                    <CustomMenu
                                        anchorEl={anchorEl}
                                        open={Boolean(anchorEl)}
                                        onClose={handleDropdownClose}
                                    >
                                        <MenuItem onClick={handleDropdownClose} component={Link} to="/commandes">les demande</MenuItem>
                                        <MenuItem onClick={handleDropdownClose} component={Link} to="/problemesrelative">vos cas</MenuItem>
                                        <MenuItem onClick={handleDropdownClose} component={Link} to="/Problemes">tous les cas</MenuItem>
                                       
                                    </CustomMenu>
                                </li>
                                <li className="nav-item nav1">
                                    <a href="/Clients" className="nav-link mx-lg-2">profile</a>
                                </li>
                            </ul>
                            <ul className="nav2 navbar-nav justify-content-end flex-grow-2 pe-3 align-items-center">
                                <div className="user-profile">
                                    <div className="user-info">
                                        <div className="user-name"><span className="online-indicator"></span> {userName} </div>
                                        <div className="user-role text-center">Avocat</div>
                                    </div>
                                    <img src={Personne1} alt="Profile" className="profile-pic" />
                                </div>
                            </ul>
                        </div>
                    </div>

                    <button className="navbar-toggler" type="button" onClick={handleToggle} aria-expanded={isOffcanvasOpen}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        </div>
    );
}

export default HeaderLogin;
