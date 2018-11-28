import React, { Component } from 'react';
import Menu from '../../menu';
import Footer from '../../footer';
import {Link} from 'react-router-dom';
import CreepySmile from '../../../assets/img/smile.svg';

class ModuloH2o2h extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="content-wrapper h2o2h-page">
                <Menu />

                <div className="main-container">

                </div>

                <Footer />
            </div>
        );
    }
}

export default ModuloH2o2h;
