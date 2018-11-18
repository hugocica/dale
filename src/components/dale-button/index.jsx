import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class DaleBtn extends Component {

    render() {

        if ( typeof this.props.link !== 'undefined' ) { // caso tenha a propriedade 'link'

            if ( this.props.link.indexOf('http') !== -1 ) { // caso seja um link externo

                return (
                    <div className="dale-btn">
                        <a target="_blank" href={this.props.link} className="btn-element">{this.props.text}</a>
                    </div>
                );

            } else {

                return (
                    <div className="dale-btn">
                        <Link to={this.props.link} className="btn-element">{this.props.text}</Link>
                    </div>
                );

            }

        } else { // se não tiver link, retornar com span

            return (
                <div className="dale-btn">
                    <span className="btn-element">{this.props.text}</span>
                </div>
            );

        }

    }
}

export default DaleBtn;
