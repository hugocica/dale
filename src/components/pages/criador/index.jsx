import React, { Component } from 'react';
import Menu from '../../menu';
import Footer from '../../footer';
import {Link} from 'react-router-dom';
import CreepySmile from '../../../assets/img/smile.svg';
import CriadorFrito from '../../../assets/img/caina_frito.png';

class CriadorIndex extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="content-wrapper criador">
                <Menu />

                <div className="main-container">

                    <section id="goku" className="red-bg">
                        <div className="container">
                            <h2>
                                É,<br />
                                sou<br />
                                só<br />
                                eu mesmo
                            </h2>
                        </div>
                    </section>

                    <section id="about" className="container">
                        <div className="col-md-6 criador-pic">
                            <img src={CriadorFrito} alt="caina guari criador dale"/>
                        </div>

                        <div className="col-md-6 criador-info">
                            <p>Olá! Eu sou <strong>Cainã Brinatti Guari</strong>. Sou designer recém formado pela Unesp Bauru, muito interessado em tecnologias e projetos makers. Se você tem alguma ideia sobre um projeto envolvendo qualquer área abordada pelo DALE (ou que só tenha a ver com toda essa loucura) e gostaria de trocar uma ideia, entre em contato comigo. Vou ficar muito feliz em poder falar com você. :D</p>

                            <p>Esses aqui são os canais pelos quais podemos conversar e onde estão outros projetos meus:</p>
                        </div>
                    </section>

                    { /* <section id="download" className="container">
                        <div className="col-md-6">

                        </div>

                        <div className="col-md-6">
                            <p>Se você baixou o conteúdo do DALE e desenvolveu alguma coisa do projeto, mesmo que seja igual ao meu, compartilhe comigo para que as pessoas possam vê-lo. A ideia é somar e formar uma comunidade interessada no assunto</p>
                        </div>
                    </section> */ }

                    <section id="creepy-smile" className="container">
                        <div className="img-wrapper">
                            <img src={CreepySmile} alt=""/>
                        </div>
                    </section>

                </div>

                <Footer />
            </div>
        );
    }
}

export default CriadorIndex;
