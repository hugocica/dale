import React, { Component } from 'react';
import Menu from '../../menu';
import Footer from '../../footer';
import DaleBtn from '../../dale-button';
import {Link} from 'react-router-dom';
import Input from '@material-ui/core/Input';

class IndexPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="content-wrapper">
                <Menu />

                <div className="main-container">
                    <section className="slider-wrapper"></section>
                    <div className="main-container container">
                        <DaleBtn text="teste botão" link="https://google.com" />
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}

export default IndexPage;
