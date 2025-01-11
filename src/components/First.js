import React from 'react';
import { useState } from 'react';
import Fleur from '../images/fleur.jpg'
import Modal from './Contact/Modale';
import Contact from './Contact/Contact';
import '../components/First.css'

const First = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    {/*Modale contacte */}
    const handleModalOpen = () => {
        setIsModalOpen(true);
      };
    
      const handleModalClose = () => {
        setIsModalOpen(false);
      };
    return (
        <div className='first'>

<div className='link'>

<a href="https://www.instagram.com/tan_didit/" target="_blank">
    <i class="fab fa-instagram"></i> Instagram
</a>
<a href="https://www.facebook.com/profile.php?id=61550479411738/" target="_blank">
    <i class="fab fa-facebook"></i> Facebook
</a>

<button
          
          className='join-bouton'
          onClick={handleModalOpen}
        >
          Me contacter
        </button>  


</div>



<Modal show={isModalOpen} onClose={handleModalClose}>
      
      <Contact onClose={handleModalClose} /> 
      </Modal>  


            
            <img src={Fleur} className='photoProfile'/>
            <div className='cadreProfil'></div>
            <div className='presentation'>

            <h1>JE ME PRESENTE</h1>
            <p>Je suis Tanya RAJAONARIVELO, dessinatrice et peintre.</p>
            <p>Installée en Bretagne depuis 10 ans et d'origine Malgache, j'expose depuis maintenant 4 ans</p>
            <p>Je suis membre de deux associations artistiques dans le pays de Saint Brieuc :</p>
            <p>La ruche des Arts 22 et le collectif La Brioche (créateur des fanzines briochins , BROC) .</p>

            </div>

            <div className='signature'>

            <svg width="300" height="200" viewBox="0 0 1011 635" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="1011" height="635" fill="white"/>
<path id='sign' d="M124 123C127.936 139.349 130.222 155.767 132.611 172.389C136.997 202.901 137 232.759 137 263.556C137 312.49 139.065 361.887 131.889 410.444C128.026 436.581 124.183 463.087 119 489" stroke="black" stroke-width="3" stroke-linecap="round"/>
<path id='sign' d="M80 18C69.5198 17.1266 61.4337 8.85233 52.1111 4.66667C44.1267 1.08181 30.4368 1.55157 22.8333 5.22222C-2.85189 17.622 -3.07626 52.1796 11.6111 73.5C28.776 98.4167 49.3189 109.566 79.5556 112C117.734 115.074 158.307 114.625 195.389 104.611C244.532 91.3404 286.932 58.2547 326 27" stroke="black" stroke-width="3" stroke-linecap="round"/>
<path id='sign' d="M326 162C323.235 186.887 314.547 210.637 312.667 235.778C310.677 262.375 311.432 289.805 312.222 316.444C313.039 343.953 315 371.201 315 398.778C315 419.363 317.588 443.142 303.556 460.222C294.759 470.929 277.717 478.026 263.778 477C253.898 476.273 245.403 469.845 237.778 464.111C231.31 459.248 224.456 453.834 220.222 446.778C211.008 431.421 217.023 415.328 234.889 411.667C239.47 410.728 259.613 408.742 253 418" stroke="black" stroke-width="3" stroke-linecap="round"/>
<path id='sign' d="M284 240C263.571 232.161 232.623 216.229 231.222 191.222C230.631 180.679 235.933 171.333 242.556 163.556C257.975 145.448 278.819 134.281 301.778 128.833C324.125 123.531 347.458 123.622 370.278 124.222C388.593 124.704 404.142 126.213 419.944 136C431.843 143.369 443.686 152.389 451.389 164.278C459.65 177.028 462.755 192.511 464.778 207.333C467.281 225.675 469.597 245.584 467.333 264.111C465.314 280.64 456.2 290.256 442.944 299.444C431.609 307.302 420.296 315.391 407 319.444C391.267 324.241 374.294 323.622 358 322.778C345.076 322.108 331.678 318.919 320.444 312.222C318.294 310.94 318.767 308.871 320.444 307.222C324.9 302.842 333.48 303.227 339.222 303.056C347.246 302.816 355.896 302.904 363 307.167C374.184 313.877 380.897 326.956 385.111 338.778C390.601 354.181 394.304 370.298 400.556 385.444C416.632 424.394 447.241 453.225 485.444 470.278C527.812 489.189 585.044 499.057 625.611 470.222C651.262 451.99 662.336 423.819 668.111 393.944C669.245 388.076 674.775 365.55 671 358" stroke="black" stroke-width="3" stroke-linecap="round"/>
<path id='sign' d="M4 633C72.2319 622.754 140.73 614.511 209.111 605.333C321.637 590.232 433.904 572.949 547.333 566C647.839 559.842 748.596 559.988 849.111 553.556C902.463 550.141 955.731 545.486 1009 541" stroke="black" stroke-width="3" stroke-linecap="round"/>
</svg>
            </div>

            <div class="arrow-down"></div>

            
            
        </div>
    );
};

export default First;