import React, { Component } from 'react';
import Menu from '../../menu';
import Footer from '../../footer';
import {Link} from 'react-router-dom';
import Input from '@material-ui/core/Input';
import Book from 'react-page-flip'
import LogoFooter from '../../../assets/img/dale_logo.svg';

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
                        <Book.Page className="book-page">
                            <Book.Side>
                                <div className="book-page capa">
                                    <img style={{ width: '45%' }} src={LogoFooter} alt=""/>
                                </div>
                            </Book.Side>

                            <Book.Side>
                                <div className="book-page left red-bg white-text vertical-aligned">
                                    <p className="citacao">Pode-se resumir a música eletrônica como "A música produzida a partir de não-instrumentos, ou de instrumentos adaptados para produzir som modificado pela eletricidade".</p>
                                </div>
                            </Book.Side>
                        </Book.Page>

                        <Book.Page>
                            <Book.Side>
                                <div className="book-page right">
                                    <p className="subtitle"><strong>1. A música eletrônica e o que <br /> ela tem a ver com este projeto</strong></p>

                                    <p>
                                        A música eletrônica tem seus primórdios com Pierre Schaeffer, na França em 1948 com músicas feitas a partir de ruídos de toca-discos, também chamado na época de “musique concrète”. Porém só se popularizou com o surgimento dos computadores pessoais no início dos anos 90, com a facilitação das produções musicais sem a necessidade da estrutura de um estúdio profissional, mas com resultados se mostrando similares à qualidade dos mesmos. Com isso, muitos produtores musicais e, consequentemente, seus seguidores e ouvintes começaram a surgir e dar corpo ao gênero musical que hoje chamamos de música eletrônica e seu movimento que abarca um público extremamente grande e cada vez maior.
                                    </p>
                                    <p>
                                        Com a popularização do estilo musical no Brasil e no mundo, principalmente a partir dos anos 2000, os dados econômicos relacionados ao movimento surpreendem. Segundo dados do site de jornalismo G1, em 2014, mais de 28 milhões de brasileiros disseram ter ouvido algum tipo de música eletrônica. Além disso, a indústria movimentou mais de R$ 3,1 bilhões no país entre shows e comércio relacionado a esse tipo de entretenimento.
                                    </p>

                                </div>
                            </Book.Side>

                            <Book.Side>
                                <div className="book-page left">
                                    <p>
                                        Com essa grande movimentação econômica e o surgimento de grandes nomes brasileiros no meio musical como Alok e Vintage Culture, o Brasil ganha lugar de destaque e atrai grande festivais internacionais do gênero, fazendo com que a receita gerada seja ainda maior do que a apresentada há 4 anos, além de ganhar cada vez mais importância nesse tipo de cenário.
                                    </p>
                                </div>
                            </Book.Side>
                        </Book.Page>

                        <Book.Page>
                            <Book.Side>
                                <div className="book-page right">
                                    <p className="subtitle"><strong>1. A música eletrônica e o que <br /> ela tem a ver com este projeto</strong></p>

                                    <p>
                                        A música eletrônica tem seus primórdios com Pierre Schaeffer, na França em 1948 com músicas feitas a partir de ruídos de toca-discos, também chamado na época de “musique concrète”. Porém só se popularizou com o surgimento dos computadores pessoais no início dos anos 90, com a facilitação das produções musicais sem a necessidade da estrutura de um estúdio profissional, mas com resultados se mostrando similares à qualidade dos mesmos. Com isso, muitos produtores musicais e, consequentemente, seus seguidores e ouvintes começaram a surgir e dar corpo ao gênero musical que hoje chamamos de música eletrônica e seu movimento que abarca um público extremamente grande e cada vez maior.
                                    </p>
                                    <p>

                                    </p>

                                </div>
                            </Book.Side>

                            <Book.Side>
                                <div className="book-page left">
                                <p className="subtitle">
                                    <strong>1. A música eletrônica e o que ela tem a ver com este projeto</strong>
                                </p>

                                <p>
                                    A música eletrônica tem seus primórdios com Pierre Schaeffer, na França em 1948 com músicas feitas a partir de ruídos de toca-discos, também chamado na época de “musique concrète”. Porém só se popularizou com o surgimento dos computadores pessoais no início dos anos 90, com a facilitação das produções musicais sem a necessidade da estrutura de um estúdio profissional, mas com resultados se mostrando similares à qualidade dos mesmos. Com isso, muitos produtores musicais e, consequentemente, seus seguidores e ouvintes começaram a surgir e dar corpo ao gênero musical que hoje chamamos de música eletrônica e seu movimento que abarca um público extremamente grande e cada vez maior.

                                </p>
                                <p>

                                </p>
                                </div>
                            </Book.Side>
                        </Book.Page>


                        {/*
                          <br />                  => quebra de linha
                          <em></em>               => italico
                          <strong></strong>       => negrito

                          <p className="title">
                          </p>

                          className=""            => adicionar classes no elemento
                                title
                                subtitle
                                citacao

                          <Book.Page>
                              <Book.Side>
                                  <div className="book-page right">
                                      <p className="subtitle"><strong>1. A música eletrônica e o que <br /> ela tem a ver com este projeto</strong></p>

                                      <p>
                                          A música eletrônica tem seus primórdios com Pierre Schaeffer, na França em 1948 com músicas feitas a partir de ruídos de toca-discos, também chamado na época de “musique concrète”. Porém só se popularizou com o surgimento dos computadores pessoais no início dos anos 90, com a facilitação das produções musicais sem a necessidade da estrutura de um estúdio profissional, mas com resultados se mostrando similares à qualidade dos mesmos. Com isso, muitos produtores musicais e, consequentemente, seus seguidores e ouvintes começaram a surgir e dar corpo ao gênero musical que hoje chamamos de música eletrônica e seu movimento que abarca um público extremamente grande e cada vez maior.
                                      </p>
                                      <p>

                                      </p>

                                  </div>
                              </Book.Side>

                              <Book.Side>
                                  <div className="book-page left">
                                  <p className="subtitle"><strong>1. A música eletrônica e o que <br /> ela tem a ver com este projeto</strong></p>

                                  <p>
                                      A música eletrônica tem seus primórdios com Pierre Schaeffer, na França em 1948 com músicas feitas a partir de ruídos de toca-discos, também chamado na época de “musique concrète”. Porém só se popularizou com o surgimento dos computadores pessoais no início dos anos 90, com a facilitação das produções musicais sem a necessidade da estrutura de um estúdio profissional, mas com resultados se mostrando similares à qualidade dos mesmos. Com isso, muitos produtores musicais e, consequentemente, seus seguidores e ouvintes começaram a surgir e dar corpo ao gênero musical que hoje chamamos de música eletrônica e seu movimento que abarca um público extremamente grande e cada vez maior.
                                  </p>
                                  <p>

                                  </p>
                                  </div>
                              </Book.Side>
                          </Book.Page>

                          */}
                    </Book>
                </div>

                <Footer />
            </div>
        );
    }
}

export default RelatorioIndex;
