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
                    <div className="main-container">

                        <section id="slider" className="reg-bg col-md-12">
                            <div className="container">
                            </div>
                        </section>

                        <section id="descricao" className="col-md-12">
                            <div className="container">
                                <div className="col-md-4">
                                    <p>Depois de um ano e meio pensando em algo que me deixasse realmente satisfeito e me desse a sensação de que um ciclo havia acabado, eu lhes apresento o meu projeto de conclusão de curso.</p>
                                    <p>Fazer música é algo que sempre me empolgou, mas como de costume, muitas coisas me empolgam e eu não as faço.</p>
                                    <p>Porque, então, não unir uma obrigação à algo que eu sempre quis fazer? Foi então que, tentando unir assuntos que eu não havia aprendido durante todo o decorrer</p>
                                </div>
                                <div className="col-md-4">
                                    <p>da graduação (que eu achava realmente interessante, ou que simplesmente me pudesse deixar feliz), que surgiu este TCC. Programação, Música, Movimento Maker e DIY. O meu projeto é sobre tudo isso, mas também não é. Ele é especificamente sobre uma controladora de discotecagem, o lapso de uma ideia que me surgiu em meio à um momento de diversão com nada mais, nada menos do que a Música.</p>
                                    <p>Além de tudo isso, este projeto também</p>
                                </div>
                                <div className="col-md-4">
                                    <p>se trata de abrir um campo ainda maior à quem busca se divertir com música, mas da maneira como quiser, seja fazendo música ou fazendo os instrumentos que o façam. A intenção deste projeto é fazer com que quem se interesse, faça, à sua maneira, uma controladora como essa, algo menor ou ainda algo maior do que este projeto. A decisão é sua.</p>
                                    <br />
                                    <p>Seja bem vindo ao DALE</p>
                                </div>
                            </div>
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
                                        <div className="img-wrapper">
                                            <img src="https://res.cloudinary.com/hugo-cicarelli/image/upload/v1543251626/jog.png" alt="7bl jog modelo"/>
                                        </div>
                                    </div>
                                </div>

                                <div id="h2o2h" className="modulo-box col-md-3">
                                    <div className="inner-wrapper">
                                        <div className="box-title"><p>H<span>2</span>O<span className="inverse">2</span>H</p></div>
                                        <div className="box-desc">Simplifique a maneira de discotecar à sua maneira.</div>
                                        <div className="img-wrapper">
                                            <img src="https://res.cloudinary.com/hugo-cicarelli/image/upload/v1543251631/h2o2.png" alt="h2o2h dale modelo"/>
                                        </div>
                                    </div>
                                </div>

                                <div id="b2b" className="modulo-box col-md-3">
                                    <div className="inner-wrapper">
                                        <div className="box-title"><p>B<span>2</span>B</p></div>
                                        <div className="box-desc">Discoteque em duplas ou se apresente em shows híbridos... ou os dois!</div>
                                        <div className="img-wrapper">
                                            <img src="https://res.cloudinary.com/hugo-cicarelli/image/upload/v1543251625/pad.png" alt="b2b pad dale"/>
                                        </div>
                                    </div>
                                </div>

                                <div id="browns" className="modulo-box col-md-3">
                                    <div className="inner-wrapper">
                                        <div className="box-title"><p>BROWS</p></div>
                                        <div className="box-desc">Encontre pastas e músicas em meio à bagunça.</div>
                                        <div className="img-wrapper">
                                            <img src="https://res.cloudinary.com/hugo-cicarelli/image/upload/v1543251623/brows.png" alt="browns modelo 3d"/>
                                        </div>
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
