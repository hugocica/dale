import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import LogoFooter from '../../assets/img/dale_logo.svg';
import FaceIcon from '../../assets/img/face_icon.svg';
import InstaIcon from '../../assets/img/insta_icon.svg';
import BehanceIcon from '../../assets/img/be_icon.svg';
import LinkedinIcon from '../../assets/img/linkedin_icon.svg';
import UnespIcon from '../../assets/img/unesp_icon.svg';
import FaacIcon from '../../assets/img/faac_icon.svg';

class Footer extends Component {

    render() {


        return (
            <footer className="main-footer col-md-12">
                <div className="container">
                    <div className="col-md-3">
                        <img src={LogoFooter} alt="dale logo" className="logo-footer" />
                    </div>
                    <div className="col-md-3">
                        <p>Realizador deste projeto:</p>
                        <div className="social-wrapper">
                            <div className="social-dupla">
                                <a href="" className="social-link">
                                    <img src={FaceIcon} alt=""/>
                                </a>
                                <a href="" className="social-link">
                                    <img src={InstaIcon} alt=""/>
                                </a>
                            </div>
                            <div className="social-dupla">
                                <a href="" className="social-link">
                                    <img src={BehanceIcon} alt=""/>
                                </a>
                                <a href="" className="social-link">
                                    <img src={LinkedinIcon} alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 instituicao-wrapper">
                        <img src={FaacIcon} alt="" className="faac"/>
                        <img src={UnespIcon} alt="" className="unesp"/>
                    </div>
                    <div className="dev-container col-md-3 col-sm-5">
                        <p>Desenvolvido por:</p>
                        <a className="dev-box" href="https://github.com/hugocica/" target="_blank">
                            <i className="fa fa-github" aria-hidden="true"></i>
                            <span>Hugo Cicarelli</span>
                        </a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default (Footer);
