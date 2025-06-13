import React from 'react';

function MainContent() {
    return (
        <main id="main">
            <section className="section1">
                <div className="homelogo">
                    {}
                    <img src="./Imagens/cansat_logo 1.png" alt="Logo Fundo de tela" />
                </div>
            </section>
            <section className="section2">
                <div className="conteudohome">
                    <p className="textoconteudo">
                        O que é um CanSat?
                        O CanSat é um microssatélite educacional projetado para simular todas as funções de
                        um satélite real em uma missão simplificada. Seu nome vem da combinação das
                        palavras "Can" (lata) e "Sat" (satélite), pois seu tamanho e formato se assemelham
                        a uma lata de refrigerante.
                        Durante a competição, os participantes devem projetar, construir e programar um
                        CanSat para ser lançado de um drone ou foguete a uma determinada altitude.
                        Durante a descida, o satélite coleta e transmite dados, como temperatura,
                        pressão atmosférica e altitude, além de executar missões específicas definidas no
                        regulamento.
                        O desafio envolve diversas áreas da engenharia, como eletrônica, telecomunicações,
                        mecânica e programação, proporcionando uma experiência prática e imersiva para
                        estudantes interessados no setor aeroespacial. 🚀
                    </p>
                </div>
            </section>
        </main>
    );
}

export default MainContent;