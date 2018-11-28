import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import MenuLogo from '../../assets/img/dale_escrito.svg';
import ResponsiveMenu from 'react-responsive-navbar';

class Menu extends Component {

    render() {

        return (
            <header className="main-header">
                <div className="container">
                    <Link to="/">
                        <img src={MenuLogo} alt="dale logo" className="logo-icon" />
                    </Link>

                    <ResponsiveMenu
                        menuOpenButton={<div />}
                        menuCloseButton={<div />}
                        changeMenuOn="768px"
                        largeMenuClassName="large-menu-classname"
                        smallMenuClassName="small-menu-classname"
                        menu={
                            <ul>
                                <li>
                                    <Link to="/modulos/7bl">Módulos</Link>
                                    <ul className="submenu">
                                        <li>
                                            <Link to="/modulos/7bl">7BL</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/relatorio">Projeto</Link>
                                </li>
                                <li>
                                    <Link to="/criador">Criador</Link>
                                </li>
                            </ul>
                        }
                    />
                </div>
            </header>
        );

    }
}

export default Menu;
