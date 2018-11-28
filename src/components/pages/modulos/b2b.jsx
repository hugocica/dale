import React, { Component } from 'react';
import Menu from '../../menu';
import Footer from '../../footer';
import {Link} from 'react-router-dom';
import CreepySmile from '../../../assets/img/smile.svg';

class ModuloB2b extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="content-wrapper b2b-page">
                <Menu />

                <div className="main-container">



                </div>

                <Footer />
            </div>
        );
    }
}

export default ModuloB2b;
