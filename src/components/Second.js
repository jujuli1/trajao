import React from 'react';
import Fleur from '../images/fleur.jpg'
import '../components/Second.css'

const Second = () => {
    return (
        <div className='Second'>

            <div className='feutre'>

                <h1>Dessin au feutre</h1>
            <ul>
                <li>
                    <img src={Fleur}/>
                </li>
                <li>
                <img src={Fleur}/>
                </li>
            </ul>
            </div>
            
            <div className='graphique'>

            <h1>Dessin graphiques</h1>
            <ul>
                <li>
                    <img src={Fleur}/>
                </li>
                <li>
                <img src={Fleur}/>
                </li>
            </ul>
            </div>

            
        </div>
    );
};

export default Second;