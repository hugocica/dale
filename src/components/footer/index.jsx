import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import LogoFooter from '../../assets/img/dale_logo.svg';
import FaceIcon from '../../assets/img/sociais/face_icon.svg';
import InstaIcon from '../../assets/img/sociais/insta_icon.svg';
import BehanceIcon from '../../assets/img/sociais/be_icon.svg';
import LinkedinIcon from '../../assets/img/sociais/linkedin_icon.svg';
import UnespIcon from '../../assets/img/instituicao/unesp_icon.svg';
import FaacIcon from '../../assets/img/instituicao/faac_icon.svg';

class Footer extends Component {

    render() {


        return (
            <footer className="main-footer col-md-12">
                <div className="container">
                    <div className="col-md-3">
                        <img src={LogoFooter} alt="dale logo" className="logo-footer" />
                    </div>
                    <div className="col-md-3">
                        <p>Siga na redes sociais:</p>
                        <div className="social-wrapper">
                            <div className="social-dupla">
                                <a target="_blank" href="" className="social-link">
                                    <img src={FaceIcon} alt=""/>
                                </a>
                                <a target="_blank" href="" className="social-link">
                                    <img src={InstaIcon} alt=""/>
                                </a>
                            </div>
                            <div className="social-dupla">
                                <a target="_blank" href="https://www.behance.net/CainaGuari" className="social-link">
                                    <img src={BehanceIcon} alt=""/>
                                </a>
                                <a target="_blank" href="" className="social-link">
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
                        <p>Desenvolvimento web:</p>
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
