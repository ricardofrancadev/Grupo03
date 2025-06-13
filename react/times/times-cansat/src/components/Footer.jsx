import React from 'react';

function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="imglogo">
                    {}
                    <img className="ibmeclogo" src="/Imagens/ibmeclogo.png" alt="ibmeclogo" />
                    <img src="./Imagens/nasalogo.png" alt="nasalogo" />
                    <img src="./Imagens/rocketlogo.png" alt="rocketlogo" />
                </div>
                <div className="imgredesociais">
                    <img src="./Imagens/youtubelogo.png" alt="youtubelogo" />
                    <img src="./Imagens/linkedinlogo.png" alt="linkedinlogo" />
                    <img src="./Imagens/instalogo.png" alt="instalogo" />
                    <img src="./Imagens/facebooklogo.png" alt="facebooklogo" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;