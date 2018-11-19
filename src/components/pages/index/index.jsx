import React, { Component } from 'react';
import Menu from '../../menu';
import Footer from '../../footer';
import DaleBtn from '../../dale-button';
import {Link} from 'react-router-dom';
import Input from '@material-ui/core/Input';
import MapeieIcon from '../../../assets/img/mapeie.svg';
import OrganizeIcon from '../../../assets/img/organize.svg';
import FacaIcon from '../../../assets/img/faca.svg';

class IndexPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="content-wrapper">
                <Menu />

                <div className="main-container">
                    <section className="slider-wrapper" style={{ height: '65vh', backgroundColor: '#E11A27' }}></section>
                    <div className="main-container">

                        <section id="slider" className="reg-bg col-md-12">
                            <div className="container">
                            </div>
                        </section>

                        <section id="descricao">
                            <div className="container"></div>
                        </section>

                        <section id="dale" className="light-bg col-md-12">
                            <div className="container">
                                <h2>dale <span>(da<span>●</span>le)</span></h2>
                                <p><span>v.</span> 1. Ceder gratuitamente. 2. Entregrar. 3. Distribuir</p>
                                <p><span>interj.</span> Expressão que indica: 1. Vibração positiva, comemoração. 2. Enaltecer algo ou alguém. 3. Incentivo</p>
                            </div>
                        </section>

                        <section id="descubra" className="col-md-12">
                            <div className="container">
                                <div className="col-md-4">
                                    <img src={MapeieIcon} alt=""/>
                                    <h4 className="section-title">Mapeie <span>onde e como quiser</span></h4>
                                    <p>Todos os módulos são mapeáveis e programáveis para que possuam usos diferentes em softwares musicais</p>

                                    <div className="btn-wrapper">
                                        <DaleBtn text="mais" link="https://google.com" />
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <img src={OrganizeIcon} alt=""/>
                                    <h4 className="section-title">Organize <span>da maneira que quiser</span></h4>
                                    <p>Você pode mudar os módulos de posição quando quiser durante a sua perfomance ou produção de músicas, dando à eles usos diversos.</p>

                                    <div className="btn-wrapper">
                                        <DaleBtn text="mais" link="https://google.com" />
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <img src={FacaIcon} alt=""/>
                                    <h4 className="section-title">Faça <span>sua própria controladora</span></h4>
                                    <p>O Dale é um projeto aberto de fácil execução. Você pode produzir uma controladora como esta ou executar o seu próprio projeto usando todos os dados disponibilizados.</p>

                                    <div className="btn-wrapper">
                                        <DaleBtn text="mais" link="https://fb.com" />
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="modulos" className="col-md-12">
                            <div className="container">
                                <div id="s7bl" className="modulo-box col-md-3">
                                    <div className="inner-wrapper">
                                        <div className="box-title"><p><span>7</span>BL</p></div>
                                        <div className="box-desc">Deixe a próxima track no ponto exato pra festa nunca parar.</div>
                                    </div>
                                </div>

                                <div id="h2o2h" className="modulo-box col-md-3">
                                    <div className="inner-wrapper">
                                        <div className="box-title"><p>H<span>2</span>O<span className="inverse">2</span>H</p></div>
                                        <div className="box-desc">Simplifique a maneira de discotecar à sua maneira.</div>
                                    </div>
                                </div>

                                <div id="b2b" className="modulo-box col-md-3">
                                    <div className="inner-wrapper">
                                        <div className="box-title"><p>B<span>2</span>B</p></div>
                                        <div className="box-desc">Discoteque em duplas ou se apresente em shows híbridos... ou os dois!</div>
                                    </div>
                                </div>

                                <div id="browns" className="modulo-box col-md-3">
                                    <div className="inner-wrapper">
                                        <div className="box-title"><p>BROWS</p></div>
                                        <div className="box-desc">Encontre pastas e músicas em meio à bagunça.</div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="highlight" className="col-md-12">
                            <div className="container"></div>
                        </section>

                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}

export default IndexPage;
