import React, { Component } from 'react';
import Menu from '../../menu';
import Footer from '../../footer';
import {Link} from 'react-router-dom';
import Input from '@material-ui/core/Input';
import Book from 'react-page-flip'

class RelatorioIndex extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="content-wrapper relatorio">
                <Menu />

                <div className="main-container container">
                    <Book>
                        <Book.Page>
                            <Book.Side>Front page</Book.Side>
                            <Book.Side>Back page</Book.Side>
                        </Book.Page>

                        <Book.Page>
                            <Book.Side>Another front page</Book.Side>
                            <Book.Side>And the back page</Book.Side>
                        </Book.Page>
                    </Book>
                </div>

                <Footer />
            </div>
        );
    }
}

export default RelatorioIndex;
