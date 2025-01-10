import React from 'react';
import Fleur from '../images/fleur.jpg'

const Second = () => {
    return (
        <div>
            <h1>Dessin au feutre</h1>
            <ul>
                <li>
                    <img src={Fleur}/>
                </li>
                <li>
                <img src={Fleur}/>
                </li>
            </ul>

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
    );
};

export default Second;