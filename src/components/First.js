import React from 'react';
import Fleur from '../images/fleur.jpg'
import '../components/First.css'

const First = () => {
    return (
        <div className='first'>
            
            <img src={Fleur} className='photoProfile'/>
            <div className='cadreProfil'></div>
            <div className='presentation'>

            <h1>JE ME PRESENTE</h1>
            <p>Je suis Tanya RAJAONARIVELO, dessinatrice et peintre.</p>
            <p>Installée en Bretagne depuis 10 ans et d'origine Malgache, j'expose depuis maintenant 4 ans</p>
            <p>Je suis membre de deux associations artistiques dans le pays de Saint Brieuc :</p>
            <p>La ruche des Arts 22 et le collectif La Brioche (créateur des fanzines briochins , BROC) .</p>

            </div>
            
        </div>
    );
};

export default First;