import React from 'react';
import Fleur from '../images/fleur.jpg'
import '../components/First.css'

const First = () => {
    return (
        <div className='first'>
            
            <img src={Fleur} className='photoProfile'/>
            <div className='cadreProfil'></div>
        </div>
    );
};

export default First;