import React, { Component } from 'react';
import Menu from '../../menu';
import Footer from '../../footer';
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

                <div className="container">
                    teste
                </div>

                <Footer />
            </div>
        );
    }
}

export default IndexPage;
