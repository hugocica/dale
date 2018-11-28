import React, { Component } from 'react';
import Menu from '../../menu';
import Footer from '../../footer';
import DaleBtn from '../../dale-button';
import { Link } from 'react-router-dom';
import ImgTecnica from '../../../assets/img/modulos/b2b_tecnico.svg'

class ModuloB2b extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="content-wrapper inner-modulo-page b2b-page">
                <Menu />

                <div className="main-container">

                    <div className="modulo-banner yellow-bg">
                        <div className="container">
                            <div className="col-md-12">
                                <img src="https://res.cloudinary.com/hugo-cicarelli/image/upload/v1542587308/b2b_banner_cinza.png" alt="b2b logo"/>
                            </div>

                            <img className="modulo-modelo" src="https://res.cloudinary.com/hugo-cicarelli/image/upload/v1543251625/pad.png" alt="b2b modelo"/>
                        </div>

                    </div>

                    <div className="modulo-infos">
                        <div className="container">
                            <div className="destaque-wrapper col-md-12">
                                <h3 className="frase-destaque red-text"><strong>compacto, mas completo</strong></h3>
                            </div>

                            <div className="detalhes-wrapper col-md-12">
                                <div className="top-detalhes">
                                    <div className="w50 col-md-6">
                                        <p>
                                            O módulo mais bonito pode ser pequeno, mas é preciso e muito simpático. Com essa cara mais divertida, o 7BL é um módulo que me desafiou em questões projetivas graças à sua necessidade de precisão de funcionamento da JogWheel e seus comandos vitais para uma boa discotecagem.
                                            <br />
                                            Fique à vontade para explorar.
                                        </p>
                                    </div>

                                    <div className="w50 col-md-6">
                                        <p className="red-text">
                                            O 7BL é um projeto aberto!
                                            <br />
                                            Dá uma olhada aqui.
                                        </p>
                                        <DaleBtn text="mais" link="https://google.com" />
                                    </div>
                                </div>

                                <div className="bottom-detalhes">
                                    <div className="col-md-4">
                                        <p>Com uma JogWheel compacta e precisa, graças ao seu Rotary encoder interno, fica mais fácil encontrar aquele ponto da música que vc precisa.</p>
                                    </div>
                                    <div className="col-md-4">
                                        <p>Os botões de Hot Cue te deixam mais perto da mixagem perfeita em suas apresentações.</p>
                                    </div>
                                    <div className="col-md-4">
                                        <p>Efeitos e comandos diferenciados podem ser adicionados aos 4 knobs e botões presentes nesse módulo.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="modulo-specs">
                        <div className="container">
                            <img src={ImgTecnica} alt=""/>
                        </div>
                    </div>

                </div>

                <Footer />
            </div>
        );
    }
}

export default ModuloB2b;
