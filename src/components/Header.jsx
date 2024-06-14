import React from "react";
import { Link } from 'react-router-dom';

const Header = ()=>{
    return <header className="background-main-color">
    <div className="container">
        <div className="header-output">
            <div className="header-in">
                <div className="row">
                    <div className="col-lg-2 col-md-12">
                        <a
                            id="logo"
                            href="index.html"
                            className="d-inline-block margin-tb-5px"
                        >
                            <img src="assets/img/logo-small.png" alt="" />
                        </a>
                        <a
                            className="mobile-toggle padding-13px background-main-color"
                            href="#"
                        >
                            <i className="fas fa-bars" />
                        </a>
                    </div>
                    <div className="col-lg-8 col-md-12 position-inherit">
                        <ul
                            id="menu-main"
                            className="white-link dropdown-dark text-lg-center nav-menu link-padding-tb-17px"
                        >
                            <li className="has-dropdown">
                                <Link to="/">Home</Link>
                               
                            </li>
                            <li className="has-dropdown">
                                <Link to="/">Recipes</Link>
                                
                            </li>
                            
                            <li className="has-dropdown">
                                <a href=" https://geekonweb.com">API</a>
                                
                            </li>
                            <li>
                                <Link to="/contact">Conact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-12 d-none d-lg-block">
                        <hr className="margin-bottom-0px d-block d-sm-none" />
                        <Link
                            to="/recipe/add"
                            className="text-white ba-2 box-shadow float-right padding-lr-23px padding-tb-15px text-extra-large"
                        >
                            <i className="fas fa-plus" />
                        </Link>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
}


export default Header;