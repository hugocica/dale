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


                            </Book.Side>
                        </Book.Page>

                        <Book.Page>
                            <Book.Side>
                                <div className="book-page right">
                                    <p className="subtitle"><strong>1. A importância de alguns assuntos</strong></p>


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
                                    <p className="subtitle"><strong>1.1 A música eletrônica e o que <br /> ela tem a ver com este projeto</strong></p>

                                    <p>
                                        A música eletrônica tem seus primórdios com Pierre Schaeffer, na França em 1948 com músicas feitas a partir de ruídos de toca-discos, também chamado na época de “musique concrète”. Porém só se popularizou com o surgimento dos computadores pessoais no início dos anos 90, com a facilitação das produções musicais sem a necessidade da estrutura de um estúdio profissional, mas com resultados se mostrando similares à qualidade dos mesmos. Com isso, muitos produtores musicais e, consequentemente, seus seguidores e ouvintes começaram a surgir e dar corpo ao gênero musical que hoje chamamos de música eletrônica e seu movimento que abarca um público extremamente grande e cada vez maior.
                                    </p>
                                    <p>
                                        Com a popularização do estilo musical no Brasil e no mundo, principalmente a partir dos anos 2000, os dados econômicos relacionados ao movimento surpreendem. Segundo dados do site de jornalismo G1, em 2014, mais de 28 milhões de brasileiros disseram ter ouvido algum tipo de música eletrônica. Além disso, a indústria movimentou mais de R$ 3,1 bilhões no país entre shows e comércio relacionado a esse tipo de entretenimento.
                                    </p>
                                    <p>
                                        Com essa grande movimentação econômica e o surgimento de grandes nomes brasileiros no meio musical como Alok e Vintage Culture, o Brasil ganha lugar de destaque e atrai grande festivais internacionais do gênero, fazendo com que a receita gerada seja ainda maior do que a apresentada há 4 anos, além de ganhar cada vez mais importância nesse tipo de cenário.
                                    </p>

                                </div>
                            </Book.Side>

                            <Book.Side>

                            </Book.Side>
                        </Book.Page>

                        <Book.Page>
                            <Book.Side>
                                <div className="book-page right">
                                    <p className="subtitle"><strong>1.2 A Discotecagem e os equipamentos envolvidos</strong></p>

                                    <p>
                                        Existem muitos tipos de instrumentos utilizados por quem atua na área da música eletrônica atualmente. Porém, existem dois tipos de profissionais que atuam com a música propriamente dita. São eles: os <strong><em>DJ’s</em></strong> e os <strong>Produtores</strong> musicais. Tendo em vista a complexidade dos instrumentos de produção musical e a alta carga de conhecimento teórico em música necessária para a produção desses instrumentos, o objeto escolhido e produzido neste projeto são os instrumentos utilizados pelos <em>DJ’s</em> em discotecagem, as chamadas Controladoras <em>MIDI</em> (<em>Musical Instruments Digital Interface</em> ou Interface Digital para Instrumentos Musicais – tipo de comunicação digital e universal entre todos os instrumentos musicais digitais que faz com que a captação, edição e comunicação entre eles seja facilitada, trazendo assim um maior controle sobre os mesmos).
                                    </p>

                                    <p>
                                    As controladoras MIDI são capazes de enviar o protocolo de comunicação à um computador que esteja processando um software de discotecagem ou até mesmo terem um sistema próprio integrado a elas que faz com que o controle da música que chega até às pessoas numa festa, por exemplo, seja alterado de acordo com as mudanças realizadas pelos <em>DJ’s</em>. Dessa forma, elas fazem com que a pessoa em cima do palco possua total controle sobre a música que você ouve, por exemplo.
                                    </p>

                                    <p>
                                    O termo <em>DJ</em> é uma abreviação para o título <em>Disc Jockey</em>. Este profissional é um músico que inclui mixagens, efeitos ou alterações variadas em sequências musicais, também chamadas de Sets. O <em>DJ</em> geralmente tem a missão de ditar não somente o ritmo musical, mas dar ambiência à um certo local, podendo desenvolver performances, algo comum desde o surgimento da atividade em meados do Século XX.
                                    </p>


                                </div>
                            </Book.Side>

                            <Book.Side>
                            <div className="book-page left red-bg white text">
                            <p className="citacao"> Toda vez que olhamos para um artefato, associamos a ele uma série de valores e juízos ligados à nossa história, individual e coletiva. Nas raras ocasiões em que deparamos com uma aparência inovadora - algo imprevisto, sem maiores referências na memória - o mais comum é rejeitá-la. O novo é quase sempre aterrorizante, precisamente porque nele carece das camadas de familiaridade com que a memória acolchoa nossa relação com o mundo externo. Sendo as aparências dos objetos carregadas de significados, isso quer dizer que todo artefato material é também comunicação, informação, signo. [...] Ou seja: todo artefato material possui também uma dimensão imaterial, de informação.</p>

                            <p>
                            CARDOSO, Rafael. Design para um mundo complexo.
                            </p>

                            </div>

                            </Book.Side>

                        </Book.Page>

                        <Book.Page>
                            <Book.Side>
                                <div className="book-page right">
                                    <p className="subtitle"><strong>1.3	A cultura maker, hacker, o Open Source e o DIY</strong></p>

                                    <p>
                                    Como um dos objetivos desse projeto é propagar a construção de controladoras MIDI, nada mais justo que ele seja um Projeto de Código Aberto, ou também conhecido como <strong><em>Open Source</em></strong>. Esses projetos de Código Aberto não possuem custo para utilização e são de distribuição livre, ou seja, todos podem baixar o projeto DALE sem nenhum custo, alterando sua programação ou formato e o colocando na rede novamente para que mais pessoas possam se unir em torno do assunto, gerando novo projetos que as próprias pessoas possam produzir em suas casas.
                                    </p>
                                    <p>
                                    O sentimento de conexão com o objeto no desenvolvimento de um projeto <em>DIY</em> (<em>Do it Yourself</em> ou traduzindo, Faça Você Mesmo), faz toda a diferença quando o assunto é ter sua própria controladora feita por você. O conceito do Faça Você Mesmo já é bem descrito pelo título da prática: fazer coisas sem a necessidade de comprá-las. Isso gera uma mudança de comportamento e de pensamento na economia de consumo em que vivemos, além de gerar um maior apreço pelos bens materiais que temos no nosso cotidiano pelo fato de nós mesmo termos tido o trabalho de produzir algo que usaremos em algumas atividades. E isto é uma das coisas importantes neste projeto. Fazer sua própria controladora, pensando na sua maneira única de utilizá-la e ainda ter as características de seu dono é algo que aproxima ainda mais as pessoas dos artefatos que fazem parte de sua vivência.
                                    </p>
                                    <p>
                                    Pensando nesse “dominar” o projeto como um todo, é que também vem uma outra nova possibilidade: o Hackeamento das mesas controladoras por seus próprios idealizadores. O sentido da palavra “hackear” passa por preconceitos, mas pode ter um bom significado. O verbo em inglês hackear não possui tradução para a língua portuguesa, porém o sentido desta palavra na verdade é alterar ou subverter de dentro para fora uma atividade, ação, objeto ou sistema para que o mesmo se torne mais interessante para quem o utiliza. Dessa forma, não necessariamente o sentido da palavra Hacker precisa ser pejorativo a ponto de imaginarmos alguém de má índole, invadindo sistemas e roubando contas bancárias. Se você tem interesse em entender melhor sobre o assunto aqui vai <a target="_blank" href="http://www.absoluta.org/seguranca/mentor.html">um link</a> com o Manifesto Hacker, escrito em 1986. Assim, fazendo com que a pessoa entenda todas as etapas de produção da sua própria controladora, tudo se torna mais fácil para que ela mesma Hackeie seus equipamentos e faça seu objeto ter novas funções que não foram pré-estabelecidas no momento de sua concepção, dando assim, um outro significado ao objeto.
                                    </p>
                                    <p>
                                    Praticar a mudança em pequenas ou grandes proporções é o que guia o movimento Hacker em si. Dessa forma, o projeto tem como pauta geradora este conceito da cultura hacker em três etapas: hackear as mesas controladoras já existentes, trazendo uma nova alternativa de compra ou construção; hackear a maneira de como se utilizam as mesas controladoras, a partir da modulação de seus nichos; e finalmente, a plataforma open source do protótipo final ser totalmente mutável e adaptável às características de seu usuário, deixando, desta maneira, as linhas de programação totalmente livres para alterações de acordo com o uso destinado do objeto dado pelo usuário.
                                    </p>
                                    <p>
                                    A cultura Hacker e Maker se conversam em muitos aspectos e por isso são o centro do projeto DALE. Para quem não conhece o termo, o Movimento Maker, é a extensão tecnológica do movimento DIY que supõe que qualquer pessoa de qualquer idade pode construir, consertar e criar qualquer tipo de projeto com suas próprias mãos. Porém, não se trata apenas disso. A cultura maker é quase como um estilo de vida. Com a explosão da internet nos últimos anos e com o acesso cada vez mais fácil a máquinas de alta tecnologia e informação disponibilizada nas redes, as pessoas têm trocado cada vez mais ideias sobre qualquer tipo de assunto. E isso cria uma espécie de vínculo entre elas, que são capazes de se ajudar a muito quilômetros de distância sem se conhecerem. A ideia dentro deste movimento é agregar cada vez mais, maneiras de disseminar a tecnologia e torná-la cada vez mais acessível a qualquer tipo de pessoa, sem nenhuma distinção. Este se trata de um projeto colaborativo, por isso à relação tão grande com o movimento Maker. Como recomendação de leitura, o canal Futura tem uma <a target="_blank" href="http://futura.org.br/trilhas-do-conhecimento/o-que-e-a-cultura-maker-e-o-que-ela-tem-a-ver-com-a-educacao/#">trilha online</a> sobre o assunto, explicando conceitualmente do que se trata e como você pode se tornar um.
                                    </p>
                                    <p>
                                    Muito atrelado à ideia de cultura Maker e Hacker está o Arduino. Esse microcontrolador (um pequeno computador que contém um processador, memória e periféricos programáveis em um único circuito integrado) é uma pequena placa que pode automatizar muitas atividades por meio de prototipagem rápida, ou seja, através de testes rápidos e de fácil simulação. Ela foi criada na Itália por volta de 2005 para facilitar a maneira de trabalhar com projetos eletrônicos, por meio de um software de livre acesso, o que uniu durante todos esses anos, adeptos ao uso do Arduino em diversos tipos de projetos, fazendo com que a comunidade crescesse, o que, hoje em dia, gerou um banco de dados muito grande referente à milhares de trabalhos disponibilizados na internet para uso livre.
                                    </p>
                                    <p>
                                    Para entender melhor a história do Arduino e do que exatamente ele se trata, <a target="_blank" href="HTTPS://VIMEO.COM/31389230 ">aqui</a> vai a sugestão de um documentário sobre o surgimento dele na Itália e quais eram os ideais de seus criadores na época.
                                    </p>

                                </div>
                            </Book.Side>

                            <Book.Side>

                            </Book.Side>
                        </Book.Page>

                        <Book.Page>
                            <Book.Side>
                                <div className="book-page right">
                                    <p className="subtitle"><strong>2. O projeto</strong></p>

                                </div>
                            </Book.Side>

                            <Book.Side>

                            </Book.Side>
                        </Book.Page>

                        <Book.Page>
                            <Book.Side>
                                <div className="book-page right">
                                    <p className="subtitle"><strong>2.1 O que é?</strong></p>
                                    <p>
                                    Antes de mais nada, o que é o projeto DALE? DALE é meu projeto de conclusão de curso.
                                    </p>
                                    <p>
                                    Tá, mas só isso? Não, mas é que é assim que as coisas foram se estruturando. Esse era o meu início: quase nada. Depois de muito tempo pensando, fui tendo a ideia de que o DALE é um projeto totalmente aberto de uma controladora MIDI modular. Mas o que isso quer dizer afinal?
                                    </p>
                                    <p>
                                    Basicamente, ela é uma interface (interface é o modo como ocorre a comunicação entre duas partes diferentes) entre o mundo físico e o mundo virtual dos softwares de discotecagem. O que ela faz é facilitar a vida de um DJ gerando respostas físicas à uma atividade que geralmente é digital. O diferencial desta aqui é a sua modularidade e flexibilidade quanto ao seu modo de uso e com quais programas ela pode se comunicar. Muitas controladoras existentes no mercado atualmente, possuem modularidade em sua comunicação com os softwares, porém sua parte física é rígida e não proporciona a possibilidade de mudanças em seu posicionamento dependendo do modo como a pessoa trabalha. Resumindo: as controladoras atuais fazem com que o usuário se adapte a elas. O DALE se adapta ao usuário.
                                    </p>
                                    <p>
                                    São 4 módulos que não possuem modo induzido de uso (ou seja, você pode usá-los da maneira como quiser) e que não necessariamente precisam um do outro para funcionar completamente. Tudo depende das suas necessidades. Precisa de 4 módulos para trabalhar? Ótimo. Precisa de apenas 2 deles? Sem problemas. Quer utilizar dois módulos do mesmo modelo? Pois, faça. O DALE é adaptável e dinâmico, o que melhora o uso para o seu estilo de trabalho.
                                    </p>
                                    <p>
                                    Se você entendeu qual a ideia do meu projeto, mas não sabe exatamente como funciona uma mesa controladora dá uma lida <a target="_blank" href="https://super.abril.com.br/mundo-estranho/como-funciona-uma-pickup-de-dj/ ">nessa matéria</a> da Revista Super Interessante.
                                    </p>

                                </div>
                            </Book.Side>

                            <Book.Side>

                            </Book.Side>
                        </Book.Page>

                        <Book.Page>
                            <Book.Side>
                                <div className="book-page right">
                                    <p className="subtitle"><strong>2.2 Sobre os módulos </strong></p>
                                    <p className="subtitle"><strong>H2O2H</strong></p>
                                    <p className="subtitle"><strong>Para que serve e como funciona?</strong></p>

                                    <p>
                                    O H2O2H (ou “água-água”) possui a organização de seus componentes para assumir a função de um mixer. O mixer é uma das partes mais importantes de uma controladora para discotecagem, é o centro das atividades. É a partir dele que o DJ, mistura os canais de som para que a mixagem aconteça. Cada canal de som é controlado por um dos lados do mixer (ou decks) que possuem suas funções específicas, como: controle dos equalizadores que alteram os sons altos, médios e baixos de uma música; o volume de cada canal, também chamado de fader; o crossfader que possui a função de realizar uma passagem proporcional entre os canais, fazendo com que, ao deslizá-lo, o som de um deck diminua na mesma proporção em que o segundo aumenta; entre outras funções.
                                    </p>

                                    <p className="subtitle"><strong>7BL</strong></p>
                                    <p className="subtitle"><strong>Para que serve e como funciona?</strong></p>
                                    <p>
                                    O 7BL possui uma Jog Wheel compacta – geralmente usada para encontrar um ponto específico da música - e outros diversos controles, que por convenção de outras controladoras, podem possuir comandos específicos, como Play/Pause, passagem de músicas, controle de efeitos e Cue e Hot Cue – esse é um recurso que marca um ponto específico de uma música que, quando pressionado, leva a navegação à esse ponto, o que geralmente é feito para encaixar músicas que se encontram em decks diferentes.
                                    </p>

                                    <p className="subtitle"><strong>B2B</strong></p>
                                    <p className="subtitle"><strong>Para que serve e como funciona?</strong></p>

                                    <p>
                                    B2B é o nome dado à uma apresentação de dois DJ’s e como seu nome já sugere, a intenção deste módulo é a de unir duas pessoas numa apresentação híbrida, também chamada de LIVE, que mistura mixagem ao vivo e discotecagem de faixas prontas.
Seu formato é basicamente o de um Pad de botões utilizado para finger drumming, – atividade semelhante à de tocar um instrumento, porém com <a target="_blank" href="https://planetamusica.net/voce-sabe-o-que-e-sample/)">samples</a> samples (uma amostra de som de um instrumento ou qualquer outra música já composta anteriormente) pré-definidos – possuindo também 8 Knobs (potenciômetro giratório) e 5 sliders (potenciômetro deslizante) que podem ter suas funções definidas à escolha do usuário.
                                    </p>

                                    <p className="subtitle"><strong>BROWS</strong></p>
                                    <p className="subtitle"><strong>Para que serve e como funciona?</strong></p>
                                    <p>
                                    Durante uma apresentação, a facilidade e rapidez dos comandos é muito importante tendo em vista as muitas atividades desenvolvidas pelo DJ.
O menor dos módulos possui uma das funções menos musicais, porém primordiais durante uma apresentação: a organização. O nome do módulo vem de Browser (ou pesquisador) e sugere sua função: procurar músicas em meio às pastas do computador e carregá-las aos decks com muito mais facilidade.
</p>


                                </div>
                            </Book.Side>

                            <Book.Side>

                            </Book.Side>
                        </Book.Page>

                        <Book.Page>
                            <Book.Side>
                                <div className="book-page right">
                                <p className="subtitle"><strong>2.3 Objetivos </strong></p>
                                <p className="subtitle"><strong> Objetivos do projeto </strong></p>

                                <p>
                                O objetivo principal deste projeto é a fabricação de uma controladora MIDI modular (4 módulos) de fácil transporte para uso em atividades de discotecagem sem indução de uso, ou seja, a intenção é fazer com que seus módulos não possuam um único tipo de uso, mas que as pessoas os adaptem de acordo com seu modo de trabalho, no software que lhe convir. Além disso, o uso não se limitaria à uma pessoa ao mesmo tempo. Como módulos reconfiguráveis e rearranjáveis, o usuário pode fazer uso de suas configurações em apresentações solo ou em duplas (também chamado no meio de B2B), bem como no uso de performances híbridas, misturando produção musical ao vivo e discotecagem de faixas pré-preparadas.
Numa análise rápida de mercado, podemos encontrar controladoras com preços de compra que não condizem com a realidade brasileira, variando de R$3 a R$5 mil. Assim, o cerne de desenvolvimento deste projeto é a inclusão das pessoas para uso desse instrumento, fazendo com que, além da possibilidade de produção em baixo custo – se utilizando do microcontrolador Arduino, como base da programação e funcionamento da controladora –, as pessoas possuam também um método simples e prático para que todos possam fabricá-lo em suas próprias casas, empregando os princípios do Faça Você Mesmo, uma plataforma <em>Open Source</em>  de código de programação e projetos de fabricação manuais e automatizados totalmente abertos e ainda a possibilidade de alterações no projeto completo, fazendo com que o mesmo tenha suas funções alteradas de acordo com as vontades de quem o produzir. Dessa forma, além da difusão do instrumento, o conhecimento em diversas áreas também seria generalizado, trazendo então, conceitos da cultura <em>Maker</em> e <em>Hacker</em> e todo o processo em que nele se baseia. Para que o objetivo seja alcançado de uma maneira mais eficiente, será disponibilizado ao fim do projeto, um manual de instruções de montagem, programação e o projeto da controladora produzida, fazendo com que o conteúdo seja mais acessível e possa ser replicado de diversas maneiras, como dito anteriormente.
                                </p>

                                <p className="subtitle"><strong> Objetivos pessoais </strong></p>
                                <p>
Eu fiz questão de escrever esse tópico pelo fato de demonstrar o meu verdadeiro interesse em realizar este projeto.
                                </p>
                                <p>
A música eletrônica tem seus primórdios com Pierre Schaeffer, na França em 1948 com músicas feitas a partir de ruídos de toca-discos, também chamado na época de “musique concrète”. Porém só se popularizou com o surgimento dos computadores pessoais no início dos anos 90, com a facilitação das produções musicais sem a necessidade da estrutura de um estúdio profissional, mas com resultados se mostrando similares à qualidade dos mesmos. Com isso, muitos produtores musicais e, consequentemente, seus seguidores e ouvintes começaram a surgir e dar corpo ao gênero musical que hoje chamamos de música eletrônica e seu movimento que abarca um público extremamente grande e cada vez maior.
                                </p>
                                <p>
Por toda a minha graduação eu nunca havia sido sequer inserido em alguns assuntos que  julgava extremamente importantes, como a programação, por exemplo. Por outro lado, em outros assuntos, fui inspirado e tocado, mas não tive tempo (ou interesse de verdade) de me aprofundar, como entender e vivenciar a cultura Maker e o DIY. Outros eu sempre tive grande interesse, mas nunca me desafiei a fazê-los, como aprender música e/ou qualquer instrumento. Este último interesse nunca foi culpa da graduação, confesso.
                                </p>
                                <p>
                                Mas o que mais me interessava neste projeto era exatamente isso: o desconhecido. Minha formação foi sempre cheia de desafios, pelos quais eu sempre busquei em muitas coisas ao longo dos semestres, dentro ou fora da faculdade, e não seria nada justo comigo fazer algo que eu já dominasse do começo ao fim. Fazendo jus à palavra “formação” que a Unesp me proporcionou, eu queria concluir meu ciclo me formando em algo que eu julgasse extremamente importante. Me manter numa zona de conforto, onde em pouco tempo, eu pudesse fazer um trabalho no qual eu aprendesse pouco ou quase nada não realizaria o meu desejo de buscar algo novo.
                                Foi para isso que eu fiz esse projeto: aprender coisas pelas quais eu já tinha interesse, ou até mesmo desconhecia. Talvez me frustrar, talvez me encontrar, mas sobretudo me desafiar.

                                </p>
                                <p>
O objetivo que julgo mais importante para esse trabalho vem de uma das frases mais interessantes que ouvi durante a minha graduação. O Vitor Marchi (também conhecido como Itu), durante uma disciplina nos indagou sobre o principal objetivo da Universidade na sociedade. A turma tentava responder com palavras sobre a academia, como “descobertas”, “pesquisas”, “tecnologia”. Mas a resposta era muito mais simples do que o esperado: <strong>fazer as pessoas felizes</strong>. Isso nunca havia me passado pela cabeça, e é tão óbvio que passa a ser bobo. E talvez o objetivo principal deste projeto seja esse mesmo. Mas por meio da música ou quem sabe por meio de inspiração para a realização de outros projetos e atividades que venham às mentes que conheçam este trabalho.
                                </p>
                                <p>
DALE tem simplesmente o objetivo de fazer as pessoas felizes. Nada mais que isso.
                                </p>

                                </div>
                            </Book.Side>

                            <Book.Side>
                                <div className="book-page left">

                                </div>
                            </Book.Side>
                        </Book.Page>

                        <Book.Page>
                            <Book.Side>
                                <div className="book-page right">
                                    <p className="subtitle"><strong>2.4 O início do processo</strong></p>
<p>
Antes de começar o desenvolvimento do processo em si, eu passei quase um semestre inteiro me preparando psicológica (o que realmente me ajudou em muita coisa) e tecnicamente. A minha formação técnica para este projeto foi realizada 99% pela internet. Através de muitos cursos básicos de programação e montagem com Arduino, cursos do site <a target="_blank" href="https://www.instructables.com">Instructables.com</a>  aprendendo conteúdo sobre ligações elétricas e seus componentes básicos para uso e o curso que me trouxe até aqui: Fazendo música com Arduino, do Gustavo Silveira. Foi neste último, que eu aprendi a aplicar a programação do Arduino e a montagem de circuitos elétricos especificamente para a montagem de controladoras. Durante muito tempo, eu me preparei, vi e revi vídeo aulas para começar a estruturar este projeto. Portanto, gostaria de ressaltar o valor da internet para o desenvolvimento dele. Essa grandiosa ferramenta possui muitas informações valiosas, só é preciso ser curioso. Foi por conta disso, que o intuito desse projeto se estruturou em torno da disseminação de informações, devolvendo para a própria internet o que veio dela.
</p>
<p>
Tudo começou pela forma como a controladora teria. Para começar a pensar nos desenhos da minha controladora, eu tive que pesquisar como elas funcionavam. Sim, eu não tinha uma ideia muito concreta de como elas funcionavam e quais as funções de seus botões e controles. Então busquei alguém que pudesse me ajudar com isso. O Guilherme, ou também conhecido como Rad, do coletivo <a target ="_blank" href="https://www.instagram.com/tres4.b/?hl=pt-br">tres4.b</a> , me ajudou muito na concepção de algumas ideias, tirando minhas dúvidas sobre funcionamento e os vários tipos de controladoras e suas funções. Basicamente, eu entendi como as pessoas poderiam utilizar de várias maneiras as controladoras já existentes no mercado e, então, comecei a fazer alguns mapas mentais para começar a estruturar a minha ideia sobre as funções principais da minha controladora. Como eu tinha muita liberdade para projetar, me vi perdido numa mistura de pensamentos que iam de discotecagem a produção musical, mesmo sabendo que o segundo seria muito mais difícil, além de me sentir um pouco ansioso em questão às coisas que estavam por vir. Com tantas ideias na cabeça, mas sem a noção de como executá-las, ficava ainda mais difícil focar em algo que fosse gerar minha ideia final. Porém, depois de muitos mapas mentais, e delimitando minhas ideias, consegui chegar a 6 esboços de projetos que poderiam ser executáveis, alguns mais fáceis, outros mais difíceis. Analisando melhor as possibilidades de execução do trabalho, a ideia escolhida foi a de usar módulos, sem nenhum tipo de orientação de uso, com a intenção de mesclar discotecagem híbrida com a possibilidade de uso em duplas.
</p>
<p>
Assim que eu consegui fechar a ideia, tinha que pensar quais seriam as etapas de todo o projeto para obter um produto final. Tomar conhecimento do processo antes mesmo de fazê-lo é um pouco estranho e parece perturbador no início, mas quando eu consegui finalmente enxergar todas as etapas destrinchadas, isso me deu uma visão mais clara de quais etapas deveriam vir antes, quais deveriam esperar e quais poderiam acontecer simultaneamente. Para que eu pudesse acompanhar mais de perto as etapas do processo, eu imprimi todo esse mapa e colei na parede do meu quarto. Isso me tranquilizou bastante já no início, e durante o processo eu conseguia perceber quais etapas eu já havia terminado e quantas ainda faltavam para executar.
</p>

                                </div>
                            </Book.Side>

                            <Book.Side>
                                <div className="book-page left">

                                </div>
                            </Book.Side>
                        </Book.Page>

                        <Book.Page>
                            <Book.Side>
                                <div className="book-page right">
                                    <p className="subtitle"><strong>2.5 Referências conceituais e visuais</strong></p>
<p>
Quando consegui delimitar exatamente o projeto e as funções da controladora, comecei a analisar algumas referências. Essas referências, na verdade, são controladoras bem funcionais e atendem aos pedidos de pessoas que precisam de algo mais objetivo para trabalhar, porém ainda com certa flexibilidade.
</p>
                                    <p className="subtitle"><strong>Referências funcionais</strong></p>
                                    <p>
A linha <a target= "_blank" href="https://www.native-instruments.com/en/products/traktor/traktor-for-ios/traktor-kontrol-z1/">Traktor x1</a> da Native Instruments e o conjunto <a target= "_blank" href="https://djworx.com/review-behringer-cmd-modular-dj-controllers/">CMD </a>da Behringer, foram grandes guias para os meus conceitos de modularidade. Com módulos verticais, e um design ortogonal simples, elas se encaixam facilmente a qualquer mesa para discotecagem.
                                    </p>

                                    <p>
O modelo <a target= "_blank" href="https://www.native-instruments.com/en/products/traktor/dj-controllers/traktor-kontrol-s4/">Kontrol S4</a> da Native Instruments, me ajudou a pensar em algo mais robusto, porém ainda de fácil entendimento, com cores por toda a parte, guiando o usuário através delas para que as diferentes funções dos botões sejam de fácil memorização.
                                    </p>

                                    <p>
O modelo <a target= "_blank" href="https://www.korg.com/us/products/computergear/nanokontrol2/">nanoKONTROL2</a> da Korg me ajudou com os módulos horizontais, desbancando a orientação vertical de todos os módulos, abrindo assim a possibilidade de diversos tipos de arranjo para uso.
                                    </p>
                                    <p>
A <a target= "_blank" href="https://www.allen-heath.com/ahproducts/xone92/">XONE92</a> da Allen&Heat foi referência para a parte técnica do uso dos módulos que estavam para surgir. Como se trata de um modelo muito técnico e robusto, para quem já possui experiência no ramo, esse mixer me forneceu algumas ideias de funcionamento, de organização dos controles. Ela parece bem confusa à primeira vista, mas pode-se perceber uma certa organização depois de observá-la com cuidado.
                                    </p>

                                    <p>
A <a target= "_blank" href="https://www.korg.com/us/products/dj/kaoss_dj/">Kaoss DJ</a> da Korg é uma belezinha. Com certeza foi uma das inspirações para manter o design compacto para fácil transporte e diminuir a quantidade de controles, ao contrário da XONE, por exemplo. Ela é bem simples e introdutória, fácil de trabalhar e com uma aparência amigável.
                                    </p>

                                    <p className="subtitle"><strong>Referências visuais</strong></p>
                                    <p>
Como referências de execução e uma dose incrível de criatividade, as irmãs <a target= "_blank" href="https://www.teenageengineering.com/products/op-1">OP-1</a> e <a target= "_blank" href="https://www.teenageengineering.com/products/op-z_preview">OP-Z</a>, da Teenage Engineering, com certeza são meus xodós referenciais. Compactas, com aparência de aparelhos dos anos 90 e funcionalidade complexa, apesar de não serem controladoras, mas sintetizadores (sintetizadores são instrumentos musicais eletrônicos projetados para gerar sons através de correntes elétricas, leitura de dados ou operações matemáticas), me inspiraram visualmente com suas cores e design incríveis. Todo o visual, desde a parte física até os menus e animações inspiraram muito, toda a identidade do DALE.
                                    </p>

                                    <p className="subtitle"><strong>Referências sinestésicas</strong></p>

                                    <p>
                                    Como não poderia faltar num projeto envolvido com música, muitos músicos e DJs me inspiraram a partir de seus sons. Todos inspiraram a produção visual deste projeto de maneira sinestésica. Os dois principais são <a target= "_blank" href="https://open.spotify.com/artist/5sm0jQ1mq0dusiLtDJ2b4R?si=spdBC-wbTX6IsOZDPu7bGA">Eric Prydz</a>  e seus sons psicodélicos, especialmente o álbum OPUS, que contém músicas que, se ouvidas em ordem, contam uma história auditiva incrível e o DJ francês <a target= "_blank" href="https://open.spotify.com/artist/7ry8L53T4oJtSIogGYuioq?si=S4ByvT1HRQOcyJ4_Ux8-eQ">N’to</a> e suas músicas introspectivas, que me fizeram pensar em como eu poderia dar uma cara minha à um projeto que eu gostasse de fazer.
                                    </p>

                                </div>
                            </Book.Side>

                            <Book.Side>
                                <div className="book-page left">

                                </div>
                            </Book.Side>
                        </Book.Page>

                        <Book.Page>
                            <Book.Side>
                                <div className="book-page right">
                                    <p className="subtitle"><strong>2.6 Desenhos</strong></p>
<p>
Durante todo o processo de conceituação de desenhos, muitas coisas me vieram à cabeça, como o tipo de montagem, como fazer com que a parte elétrica caiba num case pequeno para fácil transporte, durabilidade, preços dos materiais que eu iria utilizar e várias outras coisas.
</p>

<p>
Foi nesse momento que pedi a ajuda de muitas pessoas, cada uma ajudando em coisas específicas. O José Octávio Marino me ajudou muito com algumas ideias de montagem da controladora, como por exemplo, fechar o case e encaixar suas faces. O Victor Marchi me passou uma dezena de links sobre montagem de cases, lugares para comprar materiais, lugares para fazer impressões 3D para produção dos meus próprios botões e knobs e também lugares para fazer corte à laser das faces dos cases para a montagem final. Além disso, o Rad me ajudou a investir bastante na horizontalidade dos módulos, aumentando as possibilidades de uso.
</p>

<p>
Foi conversando com muita gente enquanto eu desenhava, que eu pensava em dezenas de coisas ao mesmo, e considerava montagem, visual e usabilidade pra conseguir terminar os desenhos. E eu consegui.  Os desenhos finais demoraram por volta de 3 semanas pra sair. Depois de muitas correções de funcionalidade e na montagem e encaixe dos módulos, eles saíram com essa carinha ao lado.
</p>

<p>
Claramente esses não foram os desenhos finais e absolutos que deram origem a toda a modelagem 3D e montagem dos módulos. Muitas coisas foram alteradas por questões de viabilidade, como a distância entre os furos para encaixes dos componentes eletrônicos e afins. Esses eram os esboços finais de um projeto que ainda engatinhava.
</p>

<p>
Com a parte estrutural e dos cases já mais encaminhada, uma coisa que ainda me incomodava muito era como fazer os botões ficarem da maneira como eu gostaria. Muitos dos projetos disponíveis online usam botões Arcade (aqueles botões grandes e redondos dos antigos jogos de fliperama). Mas aquele tipo de botão não seria plausível no projeto graças ao tamanho e forma que eu havia escolhido dar aos meus módulos. Todos os meus desenhos tinham botões quadrados e pequenos, ao contrário do botão arcade. Além disso, esse tipo de botão deixaria meus módulos muito grandes, e cada vez menos portáteis. Dessa forma, optei por modelar e imprimir meus próprios botões.
</p>
                                </div>
                            </Book.Side>

                            <Book.Side>
                                <div className="book-page left">

                                </div>
                            </Book.Side>
                        </Book.Page>

                        <Book.Page>
                            <Book.Side>
                                <div className="book-page right">
                                    <p className="subtitle"><strong>2.7 Modelagem</strong></p>
                                    <p>
Tendo os esboços de todos os módulos já definidos, parti para uma parte do projeto que confesso que achei que iria odiar, mas acabei gostando: pensar em todas as medidas necessárias para a montagem funcional dos módulos. Durante uma semana toda, eu pensei em cada milímetro para conseguir fazer a modelagem perfeita dos módulos, levando em consideração altura, largura, comprimento e etc. Depois de tudo pronto, levei todas as medidas para o SolidWorks (programa de modelagem 3D) e foi aí que eu comecei a ver meu projeto tomando forma. Claramente, na modelagem tudo deu muito certo. As distâncias ficaram aparentemente corretas e eu achei que já havia acertado tudo. Porém, nem tudo é tão fácil.
                                    </p>
                                    <p>
Para ter a plena certeza de que as distâncias estavam corretas e não afetariam a montagem final e encaixe dos componentes eletrônicos, eu resolvi fazer testes em placas de papelão. Com uma régua, estiletes e tesouras, meu primeiro protótipo de baixa fidelidade foi ganhando forma. Foi assim que eu percebi a importância de prototipar tudo o que for necessário já no início do projeto. Isso gera mais estudos, menos erros no protótipo final e menos gastos de materiais e dinheiro. Logicamente eu não fiz só um protótipo de papelão. A cada erro visto no modelo físico, uma nova remodelagem e a cada remodelagem, um novo teste de papelão. Isso aconteceu com todos os módulos pelo menos três vezes. E por fim, cheguei ao protótipo de papelão que finalmente seria a base para a modelagem do objeto 3D final.
                                    </p>
                                    <p>
Para a modelagem dos cases e seus encaixes estruturais, <a target="_blank" href="http://www.makercase.com">um site</a> me ajudou muito gerando um arquivo em PDF de como seria o desenho 2D para corte de uma caixa em uma cortadora à laser. Viva a tecnologia! Ele é muito simples de mexer e já gerou automaticamente, com os parâmetros estabelecidos por mim, os encaixes perfeitos de uma caixa para ser cortada.  Com esse arquivo gerado, levei as dimensões para o SolidWorks e finalizei a modelagem da estrutura da caixa de cada módulo, já terminando também a montagem virtual de todos eles para a geração dos renders finais.
                                    </p>

<p>
A modelagem dos botões para impressão 3D também dependeu de muitos testes. O formato deles já havia sido definido anteriormente na modelagem dos cases, então não foi preciso fazer nenhum desenho. Elas já davam a forma correta da modelagem, inclusive com o tamanho. Como não poderia ser diferente, foram várias e várias remodelagens até chegar ao formato final de uso. Isso porque o material idealizado por mim para uso nos botões era o filamento flexível transparente (material que serve como insumo para uso nas impressoras 3D). E pela sua flexibilidade, o tipo de encaixe teve que mudar várias vezes até se adequar aos botões que ficariam soldados à parte elétrica do módulo.
</p>
<p>
Com a modelagem dos botões ao meu gosto, também tive que pensar em como eles funcionariam efetivamente. A parte elétrica não teria nenhum apoio físico para que a parte impressa em 3D pudesse funcionar como um botão normal. Dessa forma, eu tive que modelar alguns apoios para produzir em impressoras 3D que funcionassem como um suporte abaixo do botão, dessa forma ele poderia ser pressionado e isso faria com que ele se mantivesse no lugar.
</p>
<p>
Os knobs também foram modelados por mim. A ideia era fazer com que cada peça tivesse sua forma específica para encaixe em cada componente que ela revestisse. A produção dos modelos 3D dessa peça também não foi fácil de se realizar. A partir de um modelo pronto na internet, eu fiz diversas alterações de tamanho e textura, mas o mais foi difícil de acertar foi o encaixe com os componentes eletrônicos. As vezes muito pequenos, as vezes largos demais, foram realizadas várias modelagens diferentes até que se chegasse a um ponto onde a peça se encaixasse e funcionasse como planejado.
</p>

<p>
A Jog Wheel também foi modelada por mim a partir de modelos presentes no mercado. Ao contrário das outras peças, essa me deu pouco trabalho no sentido de remodelagem.
</p>
<p>
Por fim, para ter todas as imagens que são renders desse site, eu tive a ajuda mais que especial do incrível  <a target="_blank" href="https://www.instagram.com/delrio.art/?hl=pt-br">Felipe Del Rio</a>. Meu calouro, agregado da minha casa em 2017, há muito tempo já faz renders incríveis. Quando eu tive que pensar em aplicar texturas, materiais, iluminação e ajeitar composição para fazer com que o renders ficassem apresentáveis, eu me lembrei dele e pedi uma “pequena” ajuda. Ele aceitou na hora, e fez com que os renders desse projeto ficassem incríveis. Muito obrigado, Felipe!
</p>

                                </div>
                            </Book.Side>

                            <Book.Side>
                                <div className="book-page left">

                                </div>
                            </Book.Side>
                        </Book.Page>

                        <Book.Page>
                            <Book.Side>
                                <div className="book-page right">
                                    <p className="subtitle"><strong>2.8 Identidade Visual</strong></p>
                                    <p className="subtitle"><strong>O nome</strong></p>
                                    <p>
Como o contexto da música eletrônica é muito importante dentro do projeto, nada mais justo do que ela inspirar diretamente todas as etapas do DALE.
                                    </p>
                       <p>
O nome do projeto, DALE, vem de uma situação de euforia que vivenciei em muitas das festas e festivais dos quais participei. A música eletrônica, tem como objetivo atingir a frequência de seu público ouvinte e introduzi-los em uma espécie de transe, no qual as pessoas tendem a se sentir bem. Nesses momentos de excitação e de muita energia, geralmente quando se aguarda um “drop” – termo utilizado na música eletrônica para denominar um momento da música no qual se espera uma virada de ritmo intensa, o clímax – as pessoas, pelo menos no Brasil, tem o costume de gritar “- VAMO DALEEEE” como uma forma de incentivo, uma vibração positiva tanto para o artista que está no palco, quanto para as pessoas à sua volta.
                       </p>

                      <p>
Representar o projeto com um nome retirado de uma expressão corriqueira desse tipo de ambiente, aproxima ainda mais o projeto de uma das maiores causas pelas quais o fiz.
                      </p>

                      <p>
                      Falando mais especificamente da construção do logo do projeto, eu já tinha algumas ideias em mente, mas depois de esboçar alguns desenhos, a que mais gostei foi um logo bem simples, me utilizando bastante de linhas para a construção, lembrando gráficos de monitoramento de áudio. A primeira ideia era desenvolver a tipografia da palavra DALE com uma linha contínua, passando por todas as letras. Aos meus olhos, essa versão funcionaria perfeitamente, porém, foi aí que eu me lembrei que receber o feedback de outras pessoas nos faz encontrar erros gritantes que ou não queremos encontrar, ou acreditamos cegamente no nosso trabalho. Acho que foi um pouco das duas.
                      </p>

                       <p>
Esta primeira versão tinha muitos problemas de leitura e também não condizia muito bem com a ideia que eu queria passar, de módulos e cores distintas. Depois de muito tempo tentando consertar a leitura da ideia inicial, eu acabei separando as letras e fazendo com que o mesmo tivesse uma leitura simples.
                       </p>
                       <p>
Esse novo formato acabou me agradando bastante, e fez com que novas ideias se desdobrassem para o restante da Identidade Visual, como por exemplo padrões e ícones que posteriormente seriam usados no site.
                       </p>

                       <p>
O conceito do logo deste projeto acompanha totalmente a linha de montagem e concepção da parte física. A tipografia foi desenvolvida especificamente para compor o logo a partir de todo o desenvolvimento anterior até a parte final. Acompanhando o nome do projeto, abaixo dele, vão 4 linhas coloridas representando cada módulo e suas respectivas cores. A intenção era evidenciar a parte modular do projeto no logo, ligando-o à uma certa ludicidade, como um brinquedo de montar.
                       </p>
                       <p>
A partir dele, a versão vertical se desdobrou, gerando um símbolo que pode ser utilizado separadamente ao nome do projeto.
                       </p>

                    <p className="subtitle"><strong>A escolha das cores, suas combinações e a relação com a música</strong></p>
                    <p>
A justificativa da escolha das cores está contida no livro “A psicologia das cores” de Eva Heller. Segundo a autora alemã, algumas combinações de cores possuem uma cor principal, a cor que vai guiar os sentimentos das pessoas que enxergam aquelas combinações. Depois disso, em quantidades menores, as cores secundárias, que devem dar o sentido e a complementação da cor guia. Com essa classificação, podemos traçar um paralelo interessante com o mundo da música e seus campos harmônicos.
                    </p>
                    <p>
Um campo harmônico tem sua estrutura feita por uma nota que é o Tom guia. Por exemplo, no campo harmônico de Dó Maior, temos como “guia” a nota Dó em seu Modo Maior e as notas seguintes são estabelecidas através de um padrão tonal - que não cabe nessa explicação. Dessa maneira, o Dó Maior é o que guia os sentidos de quem ouve uma música, devendo ser complementada obrigatoriamente pelas notas de seu padrão tonal. Se alguma outra nota pertencente a outro campo harmônico que não está presente no campo de Dó Maior for adicionada ao conjunto, uma sensação de dissonância ocorrerá. Dessa forma, a comparação com a classificação de cores dada por Eva Heller é muito parecida. Se uma cor que não pertencer visualmente àquele conjunto de cores for adicionada, isso gera um desconforto em quem a vê, afastando o olhar.
                    </p>
                    <p>
Falando especificamente sobre as cores estabelecidas para este projeto – Azul, Amarelo, Vermelho, Verde e Cinza – podemos estabelecer algumas relações que possuem o intuito de fazer com o que projeto seja agradável e atrativo. O Azul como cor “Tonal” desta combinação que envolve especificamente verde, vermelho e amarelo, estabelece em sua totalidade a sensação de simpatia (página 52). Algo que tem o intuito de ser amigável e próximo do usuário, não o afastando como a maioria dos instrumentos relacionados à discotecagem por sua complexidade visual.
                    </p>
                    <p>
Outra classificação válida para a combinação de cores apresentada é o sentido de fidelidade. Esta combinação envolve as cores azul, verde, dourado e vermelho, nessa ordem. O dourado, pode ser substituído visualmente pelo amarelo, por possuírem efeitos visuais semelhantes. A partir desta adaptação, podemos agregar o sentido dessa combinação ao projeto, aproximando ainda mais o usuário do produto em questão.
                    </p>

                    <p className="subtitle"><strong>Ícones e formas</strong></p>

                    <p>
Os ícones desenvolvidos para compor este site, bem como o restante da identidade visual, fazem parte de um conceito de trazer, novamente, uma certa ludicidade ao trabalho juntamente com a psicodelia da música eletrônica. Quase todos os ícones brincam com formas simples e são formados apenas por linhas. Essa estética é inspirada em muitos elementos visuais desenvolvidos na década de 1990, quando as cores utilizadas eram bem saturadas e os menus digitais ainda tinham suas limitações.
                    </p>



                                </div>
                            </Book.Side>

                            <Book.Side>
                                <div className="book-page left">

                                </div>
                            </Book.Side>
                        </Book.Page>

                        <Book.Page>
                            <Book.Side>
                                <div className="book-page right">
                                    <p className="subtitle"><strong>2.9 Programação</strong></p>
                                    <p>
A linguagem de programação para controle do Arduino é C / C++. E isso significa exatamente o que? Esse tipo de linguagem, assim como um outro idioma, tem suas sintaxes, sua forma característica de pensar e se comunicar. Como a ideia do Arduino é ser um caminho de entrada para a programação, sua linguagem é introdutória e didática para quem nunca trabalhou com isso, o que faz seu aprendizado ser mais leve.
                                    </p>
                                    <p>
Essa foi uma das etapas do projeto que mais me tomou tempo. Isso, porque obviamente eu conhecia muito pouco sobre o assunto e, nesse caso, ter algumas manhas e saber contornar as situações e conseguir consertar falhas pequenas de funcionamento por meio da programação é uma das coisas cruciais para se ter um bom desenvolvimento.
                                    </p>
                                    <p>
No início, eu montava pequenos circuitos elétricos que poderiam ser aplicados em todos os módulos. Isso me fazia ganhar mais experiência e tempo, sabendo que as alterações de funcionamento de um para outro seriam pequenas. Com o desenho de todos os módulos em mãos, eu já tinha ideia de quais e quantos componentes eletrônicos seriam utilizados em cada um. Dessa forma, sabendo do tamanho dos cases e as limitações de conexões dos modelos de Arduino que eu tinha em mãos, comecei a buscar alternativas para fazer com que eu conseguisse multiplicar as portas de conexão, conseguindo conectar todos os componentes necessários para a montagem de cada módulo, já que cada um precisaria utilizar um tipo diferente de modelo e uma quantidade maior ou menor de entradas para controlar todos os componentes necessários.
                                    </p>
                                    <p>
Dessa forma, eu descobri alguns Circuitos Integrados, o que fariam uma grande diferença no restante do meu trabalho. Através de um pequeno componente eletrônico, 4 portas digitais do Arduino podem se transformar em até outras 16. Com isso, eu poderia utilizar um Arduino Uno para controlar ainda mais componentes. Foi então que eu iniciei os estudos para compreender o funcionamento desses circuitos integrados e a integrá-los aos meus circuitos elétricos, que foram ganhando tamanho e ficando cada vez mais complexos. E foi, assim, caminhando lentamente entre pequenas vitórias e outras muitas decepções que os acertos surgiam e novos obstáculos iam surgindo ao longo projeto.
                                    </p>
                                    <p>
Uma outra parte da programação que me tomou um bom tempo foram os potenciômetros deslizantes. Esses camaradinhas têm algumas diferenças em seus funcionamentos que não me deixaram muito confortável. O maior problema deles foi seu funcionamento elétrico. Um potenciômetro funciona como um resistor variável, ou seja, dependendo da posição de seu controle, ele pode oferecer uma resistência maior ou menor à corrente elétrica do sistema. Simples, não é? Nem tanto. Existem dois tipos de potenciômetros: o Linear, representado pela letra B em todos os modelos do mercado e os logarítmicos, representados pela letra A ou D. Os potenciômetros deslizantes lineares são muito difíceis de se encontrar. O problema maior é que eu precisaria de alguns que funcionassem dessa maneira. Tomando conhecimento disso aos poucos, eu procurei muito na internet e encontrei um youtuber que conseguiu hackear a curva de resistência apenas por linhas de programação, fazendo com que os sinais elétricos fossem convertidos em outros sinais digitais, mudando assim, seu funcionamento. Claramente o modelo de programação dele teve que ser adaptado ao meu projeto, e foi um tanto difícil. O Hugo Cicarelli, foi quem me ajudou a fazer isso e também a consertar erros de funcionamento de etapas anteriores (ele foi um dos anjos que me ajudaram durante todo o processo). Infelizmente eu não consegui fazer com que os potenciômetros logarítmicos funcionassem como lineares e tive que ceder comprando novos que tivessem esse tipo de funcionamento. Porém, fica o aprendizado de que tudo pode ser adaptado para seu uso, independente de como foi designado para funcionar.
                                    </p>
                                    <p>
Como a intenção desse projeto era me fazer aprender, eu pude perceber uma grande evolução entre o começo e o fim do modo como eu trabalhava com programação. Em conversas com o Hugo, eu pude perceber que tinha noção sobre o que estava falando e conhecia a programação dos módulos e suas funções do começo ao fim. Fiquei feliz em notar que, em pouco tempo, entre muitos erros e acertos, eu finalmente havia aprendido um pouco sobre um dos assuntos que eram foco desde o começo.
                                    </p>


                                </div>
                            </Book.Side>

                            <Book.Side>
                                <div className="book-page left">

                                </div>
                            </Book.Side>
                        </Book.Page>

                        <Book.Page>
                            <Book.Side>
                                <div className="book-page right">
                                    <p className="subtitle"><strong>2.10 Materiais</strong></p>
                                    <p>
Os materiais utilizados para a montagem da minha versão dos módulos foram escolhidos baseados em alguns outros projetos DIY disponíveis e/ou apresentados na internet.
                                    </p>
                                    <p>
Para a montagem do case eu utilizei uma placa cinza de acrílico 3mm. A cor, escolhida por conta da identidade visual do projeto, tem o objetivo de manter a parte externa dos módulos o mais nulo possível. O intuito disso é fazer com que o case se “anule” em meio às cores dos Knobs e dos LEDs dentro dos botões, ressaltando a cor de cada módulo e fazendo com que o usuário assimile melhor o uso programado por ele para cada controle. Além da cor, o material se mostra bem resistente, o que melhora o transporte e o uso, diminuindo os riscos de quebra ou outros acidentes.
                                    </p>
                                    <p>
Para a impressão dos botões, foi utilizado um filamento flexível transparente. Eu gostaria que os botões fossem parecidos com os de controladoras produzidas em larga escala, geralmente feitos em borracha macia, o que deixa o uso muito mais confortável e dinâmico, geralmente para sensibilidade e força, diferencial que existe em alguns outros produtos, especialmente para produção musical. Dessa forma, o filamento flexível dá uma sensação mais confortável ao toque do usuário. Por conta desse conforto e melhor estética, julguei necessário utilizar o filamento transparente para a implementação de LEDs internos. Além de deixarem o produto com um visual mais interessante, os LEDs internos guiam o usuário fazendo com que o mesmo saiba se alguma função foi acionada previamente.
                                    </p>
                                    <p>
Os knobs e a Jog Wheel, também impressos em 3D, foram feitos com filamento PLA preto e depois revestidos com uma pintura spray das cores correspondentes de cada módulo. O filamento PLA é mais recomendado para impressões que precisam de uma maior quantidade de detalhes. Como os dois modelos em questão possuíam pequenas elevações para um maior conforto do usuário, o insumo foi escolhido para que a impressão fosse realizada o mais perto possível da modelagem.
                                    </p>


                                </div>
                            </Book.Side>

                            <Book.Side>
                                <div className="book-page left">

                                </div>
                            </Book.Side>
                        </Book.Page>

                        <Book.Page>
                            <Book.Side>
                                <div className="book-page right">
                                    <p className="subtitle"><strong>2.11 Produção</strong></p>
                                    <p className="subtitle"><strong>Impressão 3D</strong></p>
                                    <p>
As impressões 3D foram um caso à parte dentro de todo o projeto. Eu não necessariamente precisava fazê-las, mas como eu gostaria de dar a possibilidade às pessoas de poderem montar suas controladoras à sua maneira, nada mais justo do que eu conseguir fazer a minha do meu jeito. E quando eu digo do meu jeito, é o jeito mais difícil, infelizmente.
                                    </p>
                                    <p>
Começamos com uma das etapas do projeto que eu carinhosamente chamo de “A saga dos botões”. Como eu já citei anteriormente sobre eles, eu não gostaria de utilizar botões arcade por conta do seu tamanho e das limitações que eles me trariam em relação à tamanho dos cases e parte estética. Sendo assim, eu foquei na modelagem dos botões, sua estrutura e seu funcionamento.
                                    </p>
                                    <p>
Como a ideia era produzir pessoalmente tudo o que fosse possível para a controladora, eu também tive a ideia de imprimir os Knobs de todos os potenciômetros usados. Isso me daria um trabalho a mais, mas com a mesma ideia dos botões, a parte estética seria toda por minha conta e o projeto teria exatamente a minha cara.
                                    </p>
                                    <p>
A ideia era me utilizar da impressão 3D para conseguir produzir todos os botões e os knobs da controladora. Mas, foi nessa parte que eu acabei sofrendo um pouco. A Unesp infelizmente não possuía, até então, uma impressora 3D para que eu conseguisse fazer meus testes e impressões finais deles. Então, mais uma vez por indicação do Itu (Victor Marchi), e com a ajuda do Guilherme Oliveira, eu consegui ir até São Paulo para utilizar as impressoras do FabLab Livre SP, a maior rede de FabLabs do mundo. Lá, eu contei com a ajuda de muitas pessoas incríveis, além de ter uma experiência de troca que só um FabLab consegue proporcionar. Foram duas as vezes que eu tive que ir à São Paulo e fazer testes para impressão tanto dos knobs quanto dos botões. Na primeira visita, parece que todos os testes insistiam em dar errado, por diversos motivos: filamento errado usado na impressão, tamanho dos botões, tamanho dos encaixes de Led nos botões, entre outras muitas coisas. A única coisa que eu pude tirar disso foram os próprios testes e frustrações durante a semana. Apesar de terem dado errado, eram um passo em direção ao acerto. E uma das coisas que me fez pensar dessa maneira, foi uma conversa com o André Minei que me disse enquanto eu dava uma reclamadinha dos erros: “Está tudo dando certo sim. O importante é estar em movimento”.
                                    </p>
                                    <p>
Foi só com esse pensamento que eu me convenci de que voltar à São Paulo em um outro momento seria necessário para conseguir fazer a impressão dos meus modelos. E foi o que aconteceu. Durante a segunda visita aos FabLabs da Galeria Olido e do Centro Cultural São Paulo foi que eu finalmente consegui imprimir todos os modelos agora com muito mais calma. Tudo saiu da forma como planejado. Porém, o que eu tirei de mais importante dessa experiência foi o aprendizado e a noção de como funciona a impressão 3D, que ainda tem suas falhas e uma certa delicadeza em relação à uma série de variáveis que devem ser analisadas com muito cuidado. Mas é só com tentativas que se chega a entender isso. E eu aprendi isso da maneira como um maker faria: tentando. Além disso, é claro, conhecer pessoas que possuem projetos incríveis e mentes que não param de trabalhar um só minuto. Toda essa troca foi muito importante para o meu crescimento pessoal. Aliás, fica aqui a minha lembrança a 3 pessoas muito queridas que tive a oportunidade de conviver durante a segunda semana em São Paulo: a Aline, técnica do FabLab da Galeria Olido, que me ajudou em todos os momentos de decisão e me ensinou muitas coisas sobre impressão 3D e aos Senhores Hu e Sérgio pelas conversas enquanto as impressoras faziam o seu trabalho.
                                    </p>
                                    <p>
O processo da impressão final de todos os modelos (knobs, apoios para botões e botões) – tirando as impressões teste – durou, diluído durante 5 dias, em torno de 36 horas e 30 minutos para a impressão de mais ou menos 90 modelos.
                                    </p>
                                    <p className="subtitle"><strong>Solda</strong></p>
                                    <p>
Para a realização da solda, foi necessária muita paciência. Isso, porque a solda necessita de calma graças ao tamanho dos componentes. Todos eles são muito pequenos, os espaços nas placas para soldagem também, então tudo teve que ser feito com muita calma e música de fundo (dale música eletrônica). Além disso, falhas inesperadas e às vezes, inexplicáveis, acontecem com equipamentos elétricos, mesmo depois de tudo finalizado. Coisas que deveriam funcionar normalmente não funcionam, LEDs que não acendem, entre outras coisas.
                                    </p>
                                    <p>
Foi nesse momento que os esquemas elétricos que eu havia simulado no Fritzing (um software aberto e de graça, que me permite simular montagens de circuitos elétricos e faz a simulação de seu funcionamento a partir do código que seria usado para controlar um Arduino, por exemplo) me ajudaram a fazer com que o trabalho andasse mais rapidamente. Com todos os sistemas dos módulos em mãos, ficou muito mais fácil ter uma “colinha” de como fechar seus respectivos funcionamentos.
                                    </p>
                                    <p className="subtitle"><strong>Prototipagem e testes</strong></p>
                                    <p>
A etapa da prototipagem foram duas. Uma delas, eu cito quando fala mais especificamente da modelagem 3D e os protótipos de baixa fidelidade em papelão, que me ajudaram muito a economizar material, dinheiro e um bom tempo em relação ao acerto de medidas e tamanhos para a montagem do protótipo final. Um detalhe importante que eu não citei sobre o protótipo de papelão, foi que ele me auxiliou muito a pensar sobre o tamanho dos cortes para a entrada do cabo USB de alimentação do Arduino que são na parte de baixo dos módulos. Eles têm esse posicionamento por conta da função modular de cada peça: se eu escolhesse uma das faces laterais para o encaixe do cabo, eu automaticamente inutilizaria aquela face para o uso modular, o que fugia da minha intenção de uso à escolha do usuário, usando qualquer uma das faces como apoio para outros módulos.  Com isso definido, um outro empecilho tomou forma durante o processo: como fazer com que os dedos de uma pessoa consigam ter fácil acesso ao encaixe do cabo ao Arduino na parte debaixo de cada módulo? Foi fazendo diversos tipos de corte no papelão, e muitas tentativas até chegar à um tamanho aceitável, que não comprometesse sua função principal, mas que também não gerasse um corte muito grande a ponto de interferir no restante dos componentes internos. O modelo do corte foi, então, medido e levado até a modelagem 3D, que gerou os arquivos para o próximo protótipo.
                                    </p>
                                    <p>
A segunda prototipagem dos cases aconteceu durante a Feira Maker, paralelamente ao N Design em Bauru. Ela aconteceu de forma um pouco inesperada, mas foi de grande ajuda para a finalização da solda dos circuitos elétricos de todos os módulos. Dessa vez, o material para prototipagem seria muito mais próximo ao do final: uma chapa de MDF de 3 mm estava sendo disponibilizada para uso livre durante a Feira numa máquina de corte à laser cedida por uma empresa.
                                    </p>
                                    <p>
Essas são todas as faces dos módulos que depois, foram montados e auxiliaram a fase final da solda graças às suas medidas, que eram muito parecidas à dos módulos produzidos ao final do projeto em acrílico. Apesar das medidas serem muito semelhantes, alguns detalhes dessa prototipagem auxiliaram a identificar pequenos erros, como tamanho de furos para o encaixe dos parafusos, distâncias entre alguns componentes, posicionamento das placas do circuito elétrico dentro do case, etc. Detalhes que foram consertados para o corte à laser do modelo final, para que nele não houvesse nenhum tipo de erro que não pudesse ser consertado posteriormente. O problema do corte para a entrada do cabo de alimentação foi mais uma vez revisado e eu refiz alguns pequenos ajustes para o corte do modelo final.
                                    </p>
                                    <p>
A importância dos protótipos de baixa e alta fidelidade foram muito grandes durante todo o processo. Sem eles, eu não teria enxergado quais os erros a serem ajustados para as próximas fases e retirado elementos que estavam no esboço inicial, como por exemplo o uso de um HUB USB interno para a conexão de todos os módulos acompanhantes. Ou seja, a prototipação foi uma das coisas que me fez economizar tempo, dinheiro, materiais e um pouco de estabilidade mental, graças à identificação de erros que poderiam ser cruciais para a montagem do protótipo final. E é essa uma das propostas maker. Parafraseando a Heloísa Neves durante uma <a target="_blank" href="https://www.youtube.com/watch?v=jM5H9ezIIgs">palestra</a> num TED, o maker antes de pensar, faz. Ele testa, busca novas maneiras e ao final do processo, toda parcela empírica vale tanto quanto a parcela conceitual e teórica aplicada ao projeto, pois sem os testes, a construção do modelo final não seria tão funcional e seus erros não seriam identificados.
                                    </p>
                                    </div>
                                </Book.Side>

                                <Book.Side>
                                    <div className="book-page left">

                                    </div>
                                </Book.Side>
                            </Book.Page>


                            <Book.Page>
                                <Book.Side>
                                    <div className="book-page right">
                                    <p className="subtitle"><strong>2.12 Montagem</strong></p>
                                    <p>
        Para que a montagem de todos os tipos de protótipos – os de circuito elétrico nas placas de testes, os de montagem no papelão, os de montagem no case de MDF e os finais no case de acrílico – caminhassem de uma forma mais produtiva, eu tomei o cuidado de sistematizar os circuitos elétricos para que eu não me esquecesse de como seria a montagem elétrica de cada módulo, tendo uma forma de consulta do meu próprio esquema. Usando o Fritzing eu consegui de uma maneira muito eficaz, fazer com que os circuitos montados por mim no momento dos testes da programação, fossem sistematizados de uma maneira fácil e melhor legível para que no momento da solda eles me servissem como um gabarito de montagem, o que diminuiu a quantidade de erros durante o processo e me deixou mais calmo em relação à função e até mesmo à quantidade de componentes necessários para cada módulo.
                                    </p>
                                    <p>
                                    O momento da solda foi um dos mais prazerosos do processo. Tudo tem que ser feito com muita calma já que os componentes são muito pequenos e a solda deve ser precisa para que não se forme nenhum tipo de curto circuito comprometendo o funcionamento das controladoras, o que aconteceu algumas vezes em dois dos protótipos, apesar da minha calma no momento da solda. Vale dizer aqui que percebi uma diferença entre o método de solda aplicado por mim entre o primeiro módulo e o último. Notei uma evolução na maneira de avaliar os espaços e de evitar pequenos erros de leitura no funcionamento final do protótipo. A solda de todos os módulos do projeto foi feita completamente com fios, o que me fez avaliar a distância entre os componentes, para que os fios não fossem tão curtos, além de não querer gerar mais nenhum curto circuito a partir de algum contato que fique exposto. No primeiro módulo, a solda foi feita rapidamente, deixando pequenos espaços para manuseio, fios muito curtos e uma proximidade muito grande entre os componentes. Já no último, por ser muito maior e conter muitos componentes elétricos, a divisão foi feita por pequenos núcleos que foram testados progressivamente, fazendo com que o produto final funcionasse perfeitamente com a solda completa. Os erros foram sanados com a experiência e a prática de fazer esse tipo de solda. Deixo aqui apenas uma consideração negativa sobre esse tipo de solda realizado no projeto: por falta de recursos e conhecimentos sobre o tema, me escapou a possibilidade de produzir placas de circuito impresso para que a solda e seu funcionamento não tivesse nenhum comprometimento por conta dos fios que podem se romper mesmo soldados. O uso desse tipo de placa me traria mais conforto e agilidade na montagem, algo que pode ser aplicado em projeto futuros.

                                    </p>

                                    <p>
        O corte das peças para montagem dos cases em acrílico foi feito na empresa Lynk3D, localizada em Bauru. Com os arquivos para corte e a placa da cor desejada, o processo durou menos de 40 minutos.
                                    </p>
                                    <p>
        Com as peças já cortadas, a etapa seguinte foi a montagem usando cola para acrílico, colando as faces dos cases e os apoios internos para os componentes elétricos, já pensando na montagem com o circuito da solda pronta, colocando os encaixes de botão e os LEDs nos locais corretos. Já que a o circuito da solda pronta foi citado novamente, gostaria de deixar mais uma observação sobre esse tipo de solda: é muito complexo montar um sistema elétrico com essa quantidade de fios dentro de um case com dimensões tão compactas. A placa de circuito impresso, novamente, seria uma boa opção, diminuindo a quantidade de fios e deixando o sistema mais limpo para ajustes, além de caber mais confortavelmente dentro dos cases.
                                    </p>
                                    <p>
        O potenciômetro deslizante, que já havia me consumido uma grande quantidade de tempo anteriormente, me trouxe outros problemas no momento da montagem. Dessa vez, por conta de seus parafusos de fixação. Graças ao seu material (metal) e seu comprimento, o parafuso consegue fixar muito bem o componente à placa superior do case, o que é um ponto positivo. Por outro lado, ele fecha o circuito interno do componente ligando-o de uma ponta à outra graças ao seu material (também metal) na parte superior do componente. Isso fez com que eu montasse e desmontasse o módulo B2B por cinco vezes até que eu encontrasse o problema. Também foi graças aos parafusos que um curto circuito foi gerado no módulo do H2O2H, desligando outros componentes que haviam sido aterrados e alimentados por uma placa que unia um pequeno núcleo de montagem interno. Esse problema não foi gerado por um erro de solda ou por um fio desencapado, mas no momento da montagem. São pequenas coisas que foram deixando com que todo o processo da montagem fosse ainda mais difícil e demorado.
                                    </p>
                                    <p>
        Com todos os componentes em seus lugares, ligados aos sistema elétrico do Arduino e o case fechado para uso final, a última parte do processo de montagem foi a de colocar parafusos que fechassem o case pela tampa de uma forma segura, sem que o módulo tivesse a chance de abrir, já que ele não possui cola nessas peças. Isso se deve ao fato de que ajustes podem ser necessários e se a tampa fosse colada ao resto das outras faces o modelo teria que sofrer alguns traumas, podendo até se quebrar durante o processo de abertura. Dessa forma, foram coladas quatro porcas na parte interna da face superior de cada módulo, e um parafuso vindo da face inferior, fecha o sistema de forma mais segura. E para que o parafuso não fizesse contato direto com nenhuma superfície, eles foram cobertos com pés antiderrapantes de silicone, o que dá mais estabilidade aos módulos e melhora o sistema no momento de uso.
                                    </p>
                                    </div>
                                </Book.Side>

                                <Book.Side>
                                    <div className="book-page left">

                                    </div>
                                </Book.Side>
                            </Book.Page>

                            <Book.Page>
                                <Book.Side>
                                    <div className="book-page right">
                                        <p className="subtitle"><strong>2.13 Produto Final</strong></p>
                                        <p>
De uma maneira geral, os protótipos finais me agradaram. Todos eles possuem as dimensões exatas que eu havia projetado, deixando o uso confortável, assim como eu havia estimado durante o início do projeto. Além disso, sua aparência é muito semelhante à dos renders, o que me deixou muito feliz em relação às cores fortes e formas ortogonais
                                        </p>
                                        <p>
Em relação aos botões, confesso que fiquei dividido sobre minha satisfação. Nos casos dos botões em que o apoio interno é colado à placa superior, alguns funcionaram muito bem, outros nem tanto. Isso, por conta da imprecisão no momento da montagem e colagem do apoio interno e também pelo tamanho do contato, entre o botão impresso em 3D e o componente elétrico. Em alguns botões, o ato de apertar é muito prazeroso por conta da resposta mecânica de retorno do mesmo. Porém, em outros, isso se torna um pouco frustrante, já que o botão não retorna totalmente ao seu lugar depois de pressionado, o que compromete o próximo uso, fazendo com que o mesmo não gere nenhuma reação elétrica ou mecânica. Já em relação aos botões dos quais o apoio é na parte inferior do case, foram cortadas placas para solda de componentes nas quais os botões foram posicionados e a placa apoiada e colada em apoios de acrílico. Dessa forma, os botões (componentes elétricos) ganhariam altura para que fossem pressionados pelos botões impressos em 3D. Esse tipo de botão funcionou muito bem no módulo B2B, porém em outros, como no 7BL e no H2O2H ele não funcionou como o esperado. Essa alternativa foi gerada graças à proximidade entre os botões, o que não me possibilitaria a geração de um apoio interno superior, como no caso dos outros botões. Isso gerou uma nova imprecisão no momento da montagem, graças ao posicionamento da placa em relação aos botões impressos, o que também não gerou uma resposta satisfatória de uso. Os botões não atingem o componente elétrico para o fechamento do circuito, não retornando ao seu lugar, o que faz com que ele afunde e fique em uma posição ruim.
                                        </p>
                                        <p>
Em relação aos outros componentes, devo dizer que a sensação é bem satisfatória para uso. Todos os potenciômetros, tanto os deslizantes quanto os giratórios fazem bem o seu papel e estão bem confortáveis cobertos pelos knobs impressos para eles. Em alguns casos, eles ficam um pouco largos em relação aos componentes por conta da imprecisão das impressoras 3D, mas isso foi resolvido com o uso de massa epóxi no interior de seu encaixe, gerando mais volume e fazendo com que se encaixassem de uma maneira mais confortável.
                                        </p>
                                        <p>
Com todos o componentes comprados e soldados, peças impressas, cortadas e coladas, foi possível realizar um estudo de valores em relação a tudo que foi comprado para a realização deste projeto, dando sentido aos objetivos do mesmo.
                                        </p>

                                        <p className="subtitle"><strong>H2O2H (Mixer)</strong></p>
                                        <p className="subtitle"><strong>Componentes</strong></p>
                                        <p> Chave comutadora 3 posições = R$1,50 x2 = R$3,00</p>
                                        <p> Potenciômetro deslizante = R$20,00 x3 =R$60,00</p>
                                        <p> Potenciômetro giratório = R$1,50 x10 = R$15,00</p>
                                        <p> Botão Táctil = R$0,80 x13 = R$10,40 </p>
                                        <p> Led 3mm = R$0,70 x51 = R$35,70</p>
                                        <p> Placa de fenolite 3x10 = R$2,80 </p>
                                        <p> Placa de fenolite 5x10 = R$1,50 </p>
                                        <p> Arduino Mega = R$70,00</p>
                                        <p> Multiplexador digital 74HC595 = R$2,00 x 4 = R$ 8,00</p>
                                        <p className="subtitle"><strong>Estrutura (impressões 3D + case)</strong></p>
                                        <p> Botões 3D = R$ 1,50 x12 = R$ 18,00</p>
                                        <p> Knobs 3D = R$ 2,00 x10 = R$ 20,00</p>
                                        <p> Fader 3D = R$ 1,50 x3 = R$ 4,50</p>
                                        <p> Apoio botão 3D = R$ 1,00 x8 = R$ 8,00</p>
                                        <p> Corte à laser e acrílico = R$62,10</p>
                                        <p> Parafusos e porcas = R$2,00</p>
                                        <p> <strong>Total</strong> = R$206,40 (componentes) + R$114,60 (estrutura) = R$321,00</p>

                                        <p className="subtitle"><strong>BROWS (Browser)</strong></p>
                                        <p className="subtitle"><strong>Componentes</strong></p>
                                        <p> Botão Táctil = R$0,80 x4 = R$3,20</p>
                                        <p> Led 3mm = R$0,70 x4 = R$2,80</p>
                                        <p> Rotary Encoder = R$18,00</p>
                                        <p> Arduino Nano = R$30,00</p>
                                        <p> Cabo = R$ 11,90</p>
                                        <p className="subtitle"><strong>Estrutura (impressões 3D + case)</strong></p>
                                        <p> Knobs = R$2,00 x4 = R$8,00</p>
                                        <p> Botões 3D = R$1,50 x4 = 6,00</p>
                                        <p> Apoios botões 3D = R$1,00 x4 = R$4,00</p>
                                        <p> Corte à laser e acrílico = R$15,50</p>
                                        <p> Parafusos e porcas = R$2,00</p>
                                        <p> </p>
                                        <p> <strong>Total</strong>= R$65,90 (componentes) + R$35,50(estrutura) = R$101,40</p>

                                        <p className="subtitle"><strong>7BL (Jog Wheel)</strong></p>
                                        <p className="subtitle"><strong>Componentes</strong></p>
                                        <p> Potenciômetro giratório = R$1,50 x4 = R$6,00</p>
                                        <p> Led 3mm = R$0,70 x12 = R$8,40</p>
                                        <p> Potenciômetro deslizante = R$20,00</p>
                                        <p> Botão táctil = R$0,80 x12 = R$9,60</p>
                                        <p> Rotary encoder = R$18,00</p>
                                        <p> Arduino Uno = R$35,00</p>
                                        <p> Multiplexador digital 74HC595 =R$2,00 x2 = R$4,00</p>
                                        <p> Multiplexador digital 74HC165 = R$2,00 x2 = R$4,00</p>
                                        <p> Placa de fenolite 5x10 = R$1,50</p>
                                        <p> Placa de fenolite 3x10 = R$2,80 x2 = R$5,60</p>
                                        <p className="subtitle"><strong>Estrutura (impressões 3D + case)</strong></p>
                                        <p> Apoio botões 3D = R$1,00 x4 = R$4,00</p>
                                        <p> Botões 3D = R$1,50 x12 = R$ 18,00</p>
                                        <p> Fader 3D = R$1,50</p>
                                        <p> Jog Wheel 3D = R$6,00</p>
                                        <p> Knobs 3D = R$2,00 x4 = R$8,00</p>
                                        <p> Corte à laser e acrílico= R$ 58,70</p>
                                        <p> Parafusos e porcas = R$2,00</p>
                                        <p> <strong>Total</strong> = R$112,10(componentes) + R$98,20 (estrutura) = R$210,30</p>

                                        <p className="subtitle"><strong>B2B (Pad)</strong></p>
                                        <p className="subtitle"><strong>Componentes</strong></p>
                                        <p> Potenciômetro giratório = R$1,50 x8 = R$ 12,00</p>
                                        <p> Potenciômetro deslizante = R$20,00 x5 = R$100,00</p>
                                        <p> Botão táctil = R$0,80 x8 = R$6,40</p>
                                        <p> Led 3mm = R$0,70 x8 = R$5,60</p>
                                        <p> Arduino Uno = R$35,00</p>
                                        <p> Multiplexador analógico CD4067 = R$2,50</p>
                                        <p> Multiplexador digital 74HC595 = R$2,00 </p>
                                        <p> Multiplexador digital 74HC165 = R$2,00</p>
                                        <p> Placa de  fenolite 5x10 = R$1,50</p>
                                        <p> Placa de fenolite 3x10 = R$ x2 = R$2,80</p>
                                        <p className="subtitle"><strong>Estrutura (impressões 3D + case)</strong></p>
                                        <p> Corte à laser e acrílico = R$58,70</p>
                                        <p> Knobs 3D =R$2,00 x8 = R$ 16,00</p>
                                        <p> Fader 3D = R$1,50 x5 = R$7,50</p>
                                        <p> Botões 3D =R$1,50 x8 = R$12,00</p>
                                        <p> Parafusos e porcas = R$2,00</p>
                                        <p> <strong>Total</strong> = R$169,80 (componentes) + R$96,20 (estrutura) = R$266,00</p>

                                        <p className="subtitle"><strong>TOTAL FINAL = R$ 898,00 </strong></p>



                                    </div>
                                </Book.Side>

                                <Book.Side>
                                    <div className="book-page left">

                                    </div>
                                </Book.Side>
                            </Book.Page>

                            <Book.Page>
                                <Book.Side>
                                    <div className="book-page right">
                                        <p className="subtitle"><strong>3. Considerações finais</strong></p>
                                        <p>
                                        O projeto DALE tem a intenção de se tornar um projeto colaborativo, ou seja, ele não acaba por aqui. Minha pretensão com os downloads livres do projeto são muitas: disseminar o conhecimento apreendido às pessoas interessadas em aprender os mesmos assuntos; dar a oportunidade de outras pessoas fazerem suas próprias controladoras seguindo minha “receitinha”, se assim for da vontade delas; dar também a oportunidade de alterarem meu projeto, melhorando-o e adaptando-o a qualquer outro tipo de uso, seja envolvido com música ou não e até mesmo desenvolver projetos ainda maiores a partir deste.
                                        </p>
                                        <p>
                                        Para estas considerações finais, assim como nos objetivos, decidi considerar os objetivos pessoais e os do projeto para que as coisas pudessem se alinhar e ser melhor entendidas.
                                        </p>
                                        <p className="subtitle"><strong>Sobre os objetivos do projeto</strong></p>
                                        <p>
Retornando aos objetivos projetuais, eu pude perceber que atingia maioria deles. A produção da controladora modular MIDI e seus 4 módulos que se complementam foi realizada e é funcional. Fico muito feliz em poder dizer que sua funcionalidade é verdadeira pelos diversos desafios que passei durante todo o processo de projeto até chegar a este ponto. Os módulos possuem uma pequena indução de uso, ao contrário do que havia dito ter como objetivo deste projeto, porém podem ser utilizados para outras finalidades por conta de seus botões que não possuem suas funções delimitadas por meio de impressões e/ou instruções para uso (como por exemplo botão de play/pause ou para efeitos). Isso se dá, inevitavelmente, pela forma como os módulos foram construídos e projetados, embasados em equipamentos que já possuem uma convenção de uso facilitada no mercado há alguns anos, desde o início da prática de discotecagem. Como o objetivo deste projeto não era iniciar um tipo de prática totalmente nova dentro do meio, considero que o objetivo foi alcançado com sucesso.
                                        </p>
                                        <p>
                                        A finalidade dois módulos de serem reconfiguráveis e rearranjáveis também foi alcançada. Todos os módulos funcionam individualmente e em conjunto sem nenhum problema de interferência, o que traz a liberdade objetivada no início do projeto.
                                        Tratando sobre os preços das controladoras do mercado e comparando à produzida, podemos ver uma grande diferença sobre os preços de controladoras profissionais. Claramente o acabamento que tenho em mãos não é o de uma controladora profissional, porém ela pode ser utilizada sem grandes problemas em apresentações graças ao seu funcionamento. O preço final não era o esperado para tal projeto. O valor acima dos R$800,00 me deixou um pouco assustado, porém é preciso avaliar todo o contexto do projeto: são 4 módulos produzidos separadamente com diversos componentes, muitas vezes encontrados acima dos R$20,00 (como no caso dos potenciômetros deslizantes), que também se utilizam de uma quantidade maior de material para a confecção dos cases. Tendo em vista os pontos avaliados, o preço pago pelos módulos pode ser menor se os mesmos forem unidos em uma única controladora e os materiais para acabamento forem substituídos, como por exemplo o acrílico do case por MDF ou outro material de valor menor. Ou seja, com um melhor acabamento, inevitavelmente os preços finais podem ficar um pouco maiores, mas quem decide isso são as pessoas que quiserem produzir esse tipo de instrumento, ou seja, os preços podem se tornar maiores ou menores dependendo de suas escolhas.
                                        Com relação à difusão do conhecimento em relação ao panorama Maker e Hacker através da postura aberta adotada no projeto ainda é muito difícil dizer se o objetivo foi atingido. Isso, por conta do pouco tempo em que se encontra online e sua pequena divulgação, ainda sem grande alcance, não atingindo possíveis interessados em realizar o projeto e aprender um pouco mais sobre esses conceitos. Adotando isso como um guia para este objetivo específico, posso considerar que o projeto ainda não acabou e talvez não tenha fim, por conta de seu crescimento, podendo evoluir para novos projetos realizados por mim ou por outras pessoas que decidirem se aventurar criando novas controladoras.
                                        </p>
                                        <p>
Citando um objetivo que não foi mencionado com os outros e que surgiu durante o projeto, posso dizer que falhei com o tempo. O objetivo traçado durante o projeto foi o de realizar testes com pessoas próximas que trabalhem com atividades de discotecagem formal ou informalmente, trazendo pessoas de maior ou menor experiência com o assunto para que respondessem à um questionário sobre o uso das controladoras, apontando seus pontos fortes e fracos para que uma nova e melhor pudesse surgir após o termino deste projeto. Porém, como algumas etapas tomaram mais tempo do que o previsto, esse questionário será realizado após a entrega do projeto à banca, o que não poderá ser avaliado pelos mesmos, infelizmente.
                                        </p>

                                        <p className="subtitle"><strong>Sobre os objetivos pessoais</strong></p>
                                        <p>
                                        Sobre os objetivos pessoais que eu havia me programado a aprender, posso dizer com firmeza que aprendi mais do que esperava por todo esse processo de um ano.
                                        Quando comecei a me envolver com programação por conta do Arduino, me vi obrigado a entender um pouco sobre circuitos elétricos e eletrônicos, tipos de componentes a serem utilizados, seus funcionamentos e reações em um sistema elétrico. Como quase todos os cursos gratuitos e fóruns sobre esses assuntos envolvidos possuem conteúdo disponível em Inglês, acabei estudando de maneira indireta algo que eu me cobrava muito por ter abandonado, o que me deu ainda maior vontade em fazê-lo.
                                        </p>

                                        <p>
Além disso, trabalhando com algo relacionado à música, me vi obrigado a entender também, nem que fosse minimamente, os conceitos e teoria musicais. Então busquei aulas de piano, que poderiam ser melhor ilustradas com um instrumento completo que me ajudaria com os conceitos e teorias musicais, antes, totalmente desconhecidas por mim. E isso me ajudou de forma maravilhosa durante todo o processo. Muito mais do que músicas e teorias eu aprendi a errar mais, de forma mais rápida e a incorporar todos os erros ao processo: erros são comuns e somos suscetíveis a eles em qualquer etapa. E na música isso é perceptível e muito mais fácil de aceitar. Porque imediatamente após o erro, vem uma nova tentativa, que pode ser seguida de um acerto ou não. Isso me fez perceber que errar deve ser muito mais natural do que aceitamos, e a sensação de frustração em qualquer outra atividade ficava menor e seguida de uma nova tentativa.
                                        </p>
                                        <p>
Todos esses campos estudados e envolvidos ao meu projeto me dão a deixa para dizer que aprendi muitos tipos de linguagens e comunicações, coisa que percebi apenas durante o processo. A programação é um tipo de linguagem intermediária entre quem a faz e o computador. Algo que eu tive que aprender praticando outro tipo de linguagem: o Inglês, que não é minha língua nativa. Outra linguagem que me atrevi a aprender foi a própria música, tão difícil como qualquer outra.
                                        </p>
                    <p>
                    Por todo esse processo, aprendi demais. Senti medo, muita vontade em desistir em diversos momentos de frustração que nem a música foi capaz de me ajudar. Também tiveram momentos felizes, logicamente, e todos eles foram muito mais recompensadores e maiores do que qualquer momento ruim por que passei.
                    Tendo dito isto, eu me sinto feliz com o projeto desenvolvido e posso dizer que meus objetivos pessoais foram todos alcançados.

                    </p>
                    <p>
Quanto ao objetivo citado no início do projeto sobre fazer as pessoas felizes: obviamente não há como mensurar. Até porque o projeto foi recentemente disponibilizado e neste momento de escrita, eu não faço ideia se nesse futuro em que você lê, alguém comprou essa minha vontade de fazer a sua própria controladora. Eu espero que esse objetivo seja alcançado, não por mim, mas pelas pessoas que precisem.
                    </p>
                                    </div>
                                </Book.Side>

                                <Book.Side>
                                    <div className="book-page left">

                                    </div>
                                </Book.Side>
                            </Book.Page>

                            <Book.Page>
                                <Book.Side>
                                    <div className="book-page right">
                                        <p className="subtitle"><strong>4.Agradecimentos</strong></p>
                                        <p>
Gostaria de antemão, já deixar registrado aqui que estes agradecimentos são muito extensos pelo seguinte motivo: eu não moveria uma agulha sem a ajuda de todas essas pessoas, que foram e são peças essenciais durante toda a minha jornada neste ano. Apesar dessa grande quantidade de agradecimentos parecer impessoal, ela é de coração.
                                        </p>
                                        <p>
Meus agradecimentos são dedicados à todas as pessoas, que de algum modo fizeram parte deste projeto. Tenham passado de forma muito leva ou não pela minha existência, cada pessoa mudou e ainda muda o rumo da minha vida sem saber ou nem sequer quer prestar atenção a isso. Mas devo agradecer à cada uma delas, mesmo que não se importem, pois somos moldados por cada palavra, cada ato e gesto à que somos apresentados.
                                        </p>
                                        <p>
Aos meus pais, José e Maria, à minha irmã, Emi, meu padrinho e tio, André, e familiares que me apoiaram durante todo o meu processo de crescimento, aprendizado e educação para chegar aqui hoje. Especialmente à três pessoas que hoje já não fazem parte da minha vida física, mas memorial: minha avó, Ana, meu avô, Orazil e a meu tio José Benedito e que me deixaram diversos ensinamentos em vida e com suas partidas.
                                        </p>
                                        <p>
À minha namorada e amor da minha vida, Karolina, que me ensinou muito mais do que imagina durante todo o processo desse trabalho e tantas outras situações que me fizeram chegar até aqui. Cada palavra de amor, cada gesto, cada sentimento me fez ter ainda mais força e enxergar a vida de uma maneira diferente, um pouco mais colorida, diversa e encantadora.
                                        </p>
                                        <p>
A todos os meus amigos de Bauru, amigos da sala do Diurno de 2014 e em especial aos que fizeram parte da minha segunda família em tempos diferentes na república Ponto, onde morei com: José Octávio (Zé), Lucas Wakamatsu, Leonardo Bortolussi, Daniel Batista, Pedro Veneziano, Rodrigo Moon, Eduardo Morais, Thulio Franco, Marcos Abdallah e Luca Villela. Aqui fica o meu agradecimento mais que especial a todos vocês por todos os anos vividos em conjunto, todas as festas, idas ao bar, brincadeiras, pegadinhas, noites passadas em claro (por qualquer ocasião) e o amor que compartilhamos juntos.
                                        </p>
                                        <p>
À Rebeca Nicocan, Marina Rebelatto, Gabrielli Alves e Bruno Pavão por todos os momentos incríveis que passamos juntos durante todos esses anos. Cada palavra de carinho, cada crise de riso (estou falando com você, Bruno), cada xingamento espontâneo e cada ato da nossa incrível amizade, vão ficar para sempre guardados comigo como forma de amor que tenho por vocês.
                                        </p>
                                        <p>
                                        A todos os participantes do MUDA Design do qual fiz parte durante mais de dois anos da minha graduação, o meu agradecimento especial por me fazerem ser uma pessoa dedicada e amante do Design como um todo. Sem esse projeto maravilhoso no qual aprendi tanto, minha graduação não teria sido tão proveitosa quanto foi.
                                        </p>
                                        <p>
                                        À minha família de Centro Acadêmico durante dois anos: André Minei, Letícia Sakomura, Isabella Martino e novamente o José Octávio que me fizeram entender o verdadeiro sentido da Universidade e me deram ensinamentos humanos e sociais que levarei comigo durante toda a minha vida, respeitando à todas pessoas e sendo uma pessoa cada vez melhor, por vocês.
                                        </p>
                                        <p>
A todos os meus professores e educadores, que me acompanharam durante todas as minhas fases de crescimento até chegar à graduação. E em especial, ao meu querido professor e amigo, Dorival Rossi por toda a liberdade e calma durante todo o processo de execução deste TCC, além de sua presença com a missão de abrir as pequenas mentes dos calouros, desde o ano em que entrei na Unesp.
                                        </p>
                                        <p>
Ao Guilherme, ou Radchild Lug, como é conhecido no meio da música eletrônica, pelos grandes conselhos durante todo o começo do projeto, me guiando pelas dúvidas e diminuindo minha megalomania.
                                        </p>
                                        <p>
Ao Itu, ou Vitor Marchi, pela quantidade enorme de contatos e links passados para a continuação e execução de todo o projeto.
                                        </p>
                                        <p>
Ao FabLab Livre de São Paulo, e em especial à Aline Barros, que me ajudou em meio ao desespero de nunca ter mexido com impressoras 3D e foi um anjo salvador durante as duas semanas que passei em São Paulo.
                                        </p>
                                        <p>
Ao Guilherme Souza, ou meu parceiro Azeitona, que me abrigou durante minha visita à São Paulo e me presenteou com toda a sua vibração verdadeira à cada pequena vitória minha.
                                        </p>
                                        <p>
Ao Thomas Honda, que além de meu grande amigo durante toda a minha formação, me ajudando em MUITAS coisas, me recebeu durante uma semana inteira na sua casa em São Paulo para que eu pudesse ir até os Fab Labs.
                                        </p>
                                        <p>
                                        Ao Thiago Stefanin pelo apoio gigantesco com todo o processo de impressão 3D e com o empréstimo da impressora para testes, além de conselhos e ensinamentos.
                                        Ao Gabriel de Souza, também conhecido como Laifer, que me ajudou imensamente em momentos de desespero com os maus contatos e sistemas elétricos que não deixavam meu projeto se concretizar.

                                        </p>
                                        <p>
Ao Gabriel de Souza, também conhecido como Laifer, que me ajudou imensamente em momentos de desespero com os maus contatos e sistemas elétricos que não deixavam meu projeto se concretizar.
                                        </p>
                                        <p>
Ao Felipe Del Rio, que é umas das pessoas mais talentosas das quais respeito imensamente o trabalho e me ajudou sem hesitar em TODOS os renders presentes neste projeto. Cada animação, cada imagem, textura, iluminação eu devo a ele. MUITÍSSIMO OBRIGADO por ceder seu tempo profissional, me ajudando nesse projeto.
                                        </p>
                                        <p>
Ao Vitor Napolião, meu querido professor de piano, o qual tive o prazer e o privilégio de aprender a linguagem da música com afinco, graças à sua postura querida, na qual ganhei uma grande amizade.
                                        </p>
                                        <p>
E por fim, ao meu nenê, o irmão que Bauru me deu sem explicação: Hugo Cicarelli, ou Dani. Eu agradeço cada momento por ter feito parte da minha história, de escrever palavras de conexão e parceria tão fortes na minha existência, e fazer com que tudo o que faço contigo seja leve e merecedor de uma forte lembrança. Vale lembrar que sem ele, esse TCC e este relatório não existiriam. Meu guru da programação, MUITÍSSIMO OBRIGADO pela ajuda, te devo esse projeto quase que inteiramente.
                                        </p>
                                        <p>
Obrigado, Bauru. Obrigado Unesp, por me proporcionar os MELHORES ANOS da minha vida.
                                        </p>


                                    </div>
                                </Book.Side>

                                <Book.Side>
                                    <div className="book-page left">

                                    </div>
                                </Book.Side>
                            </Book.Page>

                            <Book.Page>
                                <Book.Side>
                                    <div className="book-page right">
                                        <p className="subtitle"><strong>5. Bilbiografia</strong></p>
                                        <p>
CARDOSO, Rafael. Design para um mundo complexo. São Paulo: Cosac Naify, 2012.
                                        </p>
                                        <p>
HELLER, Eva. A psicologia das cores. São Paulo: Editora G.Gili, 2016.
                                        </p>

                                        <p>
 HERRIGEL, Eugen. A arte cavalheiresca do arqueiro zen. São Paulo: Editora Pensamento, 1975.
                                        </p>
                                        <p>
                                        MORIN, Edgar. Introdução ao pensamento complexo. Porto Alegre: Editora Sulina, 2015.
                                        </p>
                                        <p>
THACKARA, John. Plano B: O design e as alternativas viáveis em um mundo complexo. São Paulo: Editora Saraiva, 2008
                                        </p>
                                        <p>
WISNIK, José Miguel. O som e o sentido: Uma outra história das músicas.  São Paulo: Companhia das Letras, 2004.
                                        </p>
                                        <p> <strong> Sites </strong> </p>

                                        <p>
                                              <a target="_blank" href="http://www.juntoemixado.com.br/o-que-e-ser-dj/">http://www.juntoemixado.com.br/o-que-e-ser-dj/</a> - Acessado em 26/09/2018
                                        </p>
                                        <p>
                                              <a target="_blank" href="https://canaltech.com.br/produtos/O-que-e-open-source/">https://canaltech.com.br/produtos/O-que-e-open-source/</a> - Acessado em 26/09/2018
                                        </p>
                                        <p>
                                              <a target="_blank" href="http://blog.fazedores.com/sobre/">http://blog.fazedores.com/sobre/</a> -  - Acessado em 29/09/2018
                                        </p>
                                        <p>
                                              <a target="_blank" href="https://pt.wikipedia.org/wiki/Microcontrolador">https://pt.wikipedia.org/wiki/Microcontrolador </a> -  - - Acessado em 29/09/2018
                                        </p>
                                        <p>
                                              <a target="_blank" href="https://super.abril.com.br/cultura/como-funciona-o-principal-equipamento-do-dj-o-mixer/">https://super.abril.com.br/cultura/como-funciona-o-principal-equipamento-do-dj-o-mixer/</a> - Acessado em 05/10/2018
                                        </p>


                                    </div>
                                </Book.Side>

                                <Book.Side>
                                    <div className="book-page left">

                                    </div>
                                </Book.Side>
                            </Book.Page>

                            <Book.Page>
                                <Book.Side>
                                    <div className="book-page right">
                                        <p className="subtitle"><strong>6. Discografia Inspiradora</strong></p>
                                        <p>
                                    <a target="_blank" href="https://open.spotify.com/album/2Kwbn1H4KMGZAe4MS6uDzU?si=hw9AojAmSAKuZBFUr1D2lQ">Eric Prydz – Opus Álbum</a>
                                        </p>
                                        <p>
                                        Esse álbum contém a música da minha vida. A última das 19 faixas é a música que mais preenche os meus desejos e por isso é guardada com carinho por mim para momentos específicos de grande necessidade (eu tento não banalizá-la para que não perca o sentido).
                                        </p>

                                        <p>
                                    <a target="_blank" href="https://open.spotify.com/artist/29zsVzEH33dD5QqxeL8dvy?si=ezQzkGB4SWKF8jrceE7Aew">Vini Vici </a>
                                        </p>
                                        <p>
                                        Talvez seja o DJ pelo qual eu aprendi a amar a música eletrônica e a vertente do Trance. Foi por onde começou a minha paixão pelas músicas de alto BPM.
                                        </p>

                                        <p>
                                    <a target="_blank" href="https://open.spotify.com/artist/7ry8L53T4oJtSIogGYuioq?si=Gh9U_GiESQGFkKxR-PWZ-g">N’to - Músicas</a>
                                        </p>
                                        <p>
                                        Um amor recente pelo Techno me fez apreciar demais o tipo de música que esse cara faz. Depois de um tempo, o BPM alto das músicas se tornam um pouco cansativos e o Techno te envolve de uma maneira muito intimista e introspectiva. E é nas músicas desse cara que eu sinto um grande conforto de estar comigo mesmo.
                                        </p>

                                        <p>
                                    <a target="_blank" href="hhttps://open.spotify.com/user/12164090099/playlist/6gDN9Fdvrn00S0I6nUIpWc?si=KNMyQn-hRjW0iS9BcyCPhw">Good por demais</a>
                                        </p>
                                        <p>
                                        Uma playlist que reúne os melhores Technos ouvidos por mim durante todo o projeto. Talvez a que mais alimentou os meus momentos de programação e inspiração para resolver pequenos problemas.
                                        </p>

                                        <p>
                                    <a target="_blank" href="https://open.spotify.com/user/12164090099/playlist/5lBQgwwZxx6aujfCZ9nbl2?si=pidk_EaVQxCzGQkBlhpihg">Pra cantar</a>
                                        </p>
                                        <p>
                                        A playlist que define o que foi o Cainã do passado, sem mudar o Cainã do presente. Com músicas dos anos 2000 que fazem parte da minha infância, essa é uma daquelas playlists que mais me levam à minha área de conforto, onde sei que vou encontrar a minha essência.
                                        </p>

                                        <p>
O mais doido de tudo isso é que essas playlists podem mudar à qualquer momento, quando eu adicionar mais músicas à elas, ou até mesmo quando os artistas criarem novas faixas. O mais importante desse processo é que elas se atualizem e se moldem ao meu novo jeito de pensar. Talvez elas sejam a maneira mais fácil de me entender à qualquer momento, mesmo que subjetivamente.
                                        </p>


                                    </div>
                                </Book.Side>

                                <Book.Side>
                                    <div className="book-page left">

                                    </div>
                                </Book.Side>
                            </Book.Page>






                        {/*
                          <br />                  => quebra de linha
                          <em></em>               => italico
                          <strong></strong>       => negrito
                          <a target="_blank" href="https://fb.com">Facebook</a>
                          <img src="https://res.cloudinary.com/daduvnugo/image/upload/v1542675638/1.2_-_discotecagem_e_os_equipamentos_envolvidos.jpg" width="300" alt=""/>

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
