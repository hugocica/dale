import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import MenuLogo from '../../assets/img/dale_escrito.svg';

class Menu extends Component {

    render() {


        return (
            <header className="main-header">
                <div className="container">
                    <img src={MenuLogo} alt="dale logo" className="logo-icon" />
                </div>
            </header>
        );
    }
}

export default (Menu);
