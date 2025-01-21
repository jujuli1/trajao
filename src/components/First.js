import React from 'react';
import { useState } from 'react';
import Tanya from '../images/tanya.jpeg'
import Modal from './Contact/Modale';
import Contact from './Contact/Contact';
import Sign from '../images/sign.png'
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
<a href="https://www.facebook.com/people/Tan-artiste-peintre-illustratrice/61550479411738/" target="_blank">
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


            
            <img src={Tanya} className='photoProfile'/>
            <div className='cadreProfil'></div>
            <div className='presentation'>

            <h1>MANAHOANA ! </h1>
            <p>Je suis Tanya RAJAONARIVELO, dessinatrice et peintre.</p>
            <p>Installée en Bretagne depuis 10 ans et d'origine Malgache, j'expose depuis maintenant 4 ans</p>
            <p>Je suis membre de deux associations artistiques dans le pays de Saint Brieuc :</p>
            <p>La ruche des Arts 22 et le collectif La Brioche (créateur des fanzines briochins , BROC) .</p>

            </div>

            <div className='signature'>

              <img src={Sign} alt='signature'/>
{/*
              <svg width="300" height="200" viewBox="0 0 622 670" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="622" height="670" fill="white"/>
<path id='sign' d="M2 283C18.1285 265.405 31.4417 245.272 46.7778 227C81.1752 186.018 121.148 151.655 163.111 118.667C218.316 75.2685 274.94 34.9691 337 2" stroke="black" stroke-width="3" stroke-linecap="round"/>
<path id='sign' d="M173 129C173.801 154.627 176.64 180.101 177.222 205.778C180.011 328.815 180 451.938 180 575" stroke="black" stroke-width="3" stroke-linecap="round"/>
<path id='sign' d="M620 421C620.076 421.113 620.625 421.737 620.333 422C616.874 425.125 607.551 428.098 604.278 429.444C558.823 448.149 512.834 463.998 468.5 485.5C386.905 525.074 304.485 564.246 225.222 608.333C195.916 624.634 168.332 642.954 140.056 660.833C133.289 665.112 130.5 665.66 124 668" stroke="black" stroke-width="3" stroke-linecap="round"/>
<path id='sign' d="M270 300C245.478 350.486 214.002 401.063 206.222 457.611C204.76 468.237 204.204 477.71 204.556 488.389C204.825 496.572 204.988 508.295 211.667 514.556C217.859 520.361 230.339 517.928 236.944 514.722C281.582 493.06 298.055 433.167 306.389 388.667C315.017 342.596 322 294.417 322 247.444C322 240.404 321.971 261.544 321.333 268.556C319.674 286.809 316.856 304.818 316.111 323.167C314.763 356.375 311.988 392.364 325.056 423.778C327.987 430.825 331.502 437.477 339.778 438C343.68 438.246 346.069 438.796 348.389 435.389C384.547 382.282 404.884 317.732 415.333 254.833C419.046 232.485 421.278 209.937 423.889 187.444C425.019 177.71 427.555 148.543 428 158.333C428.877 177.617 426.991 197.515 426.444 216.778C425.396 253.748 424.088 290.676 424 327.667C423.873 381.408 423.191 542.63 423 488.889C422.877 454.237 433.495 419.272 442.944 386.278C451.284 357.159 461.775 328.821 475 301.556C479.928 291.395 485.067 278.963 492.278 270.056C493.476 268.576 496.27 288.592 496.444 289.778C499.062 307.527 500.412 324.968 501.056 342.889C501.609 358.287 504.56 372.559 511.778 386.333C529.391 419.948 554.915 377.123 561 358" stroke="black" stroke-width="3" stroke-linecap="round"/>
</svg>

              

            <svg width="300" height="200" viewBox="0 0 1011 635" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="1011" height="635" fill="white"/>
<path id='sign' d="M124 123C127.936 139.349 130.222 155.767 132.611 172.389C136.997 202.901 137 232.759 137 263.556C137 312.49 139.065 361.887 131.889 410.444C128.026 436.581 124.183 463.087 119 489" stroke="black" stroke-width="3" stroke-linecap="round"/>
<path id='sign' d="M80 18C69.5198 17.1266 61.4337 8.85233 52.1111 4.66667C44.1267 1.08181 30.4368 1.55157 22.8333 5.22222C-2.85189 17.622 -3.07626 52.1796 11.6111 73.5C28.776 98.4167 49.3189 109.566 79.5556 112C117.734 115.074 158.307 114.625 195.389 104.611C244.532 91.3404 286.932 58.2547 326 27" stroke="black" stroke-width="3" stroke-linecap="round"/>
<path id='sign' d="M326 162C323.235 186.887 314.547 210.637 312.667 235.778C310.677 262.375 311.432 289.805 312.222 316.444C313.039 343.953 315 371.201 315 398.778C315 419.363 317.588 443.142 303.556 460.222C294.759 470.929 277.717 478.026 263.778 477C253.898 476.273 245.403 469.845 237.778 464.111C231.31 459.248 224.456 453.834 220.222 446.778C211.008 431.421 217.023 415.328 234.889 411.667C239.47 410.728 259.613 408.742 253 418" stroke="black" stroke-width="3" stroke-linecap="round"/>
<path id='sign' d="M284 240C263.571 232.161 232.623 216.229 231.222 191.222C230.631 180.679 235.933 171.333 242.556 163.556C257.975 145.448 278.819 134.281 301.778 128.833C324.125 123.531 347.458 123.622 370.278 124.222C388.593 124.704 404.142 126.213 419.944 136C431.843 143.369 443.686 152.389 451.389 164.278C459.65 177.028 462.755 192.511 464.778 207.333C467.281 225.675 469.597 245.584 467.333 264.111C465.314 280.64 456.2 290.256 442.944 299.444C431.609 307.302 420.296 315.391 407 319.444C391.267 324.241 374.294 323.622 358 322.778C345.076 322.108 331.678 318.919 320.444 312.222C318.294 310.94 318.767 308.871 320.444 307.222C324.9 302.842 333.48 303.227 339.222 303.056C347.246 302.816 355.896 302.904 363 307.167C374.184 313.877 380.897 326.956 385.111 338.778C390.601 354.181 394.304 370.298 400.556 385.444C416.632 424.394 447.241 453.225 485.444 470.278C527.812 489.189 585.044 499.057 625.611 470.222C651.262 451.99 662.336 423.819 668.111 393.944C669.245 388.076 674.775 365.55 671 358" stroke="black" stroke-width="3" stroke-linecap="round"/>
<path id='sign' d="M4 633C72.2319 622.754 140.73 614.511 209.111 605.333C321.637 590.232 433.904 572.949 547.333 566C647.839 559.842 748.596 559.988 849.111 553.556C902.463 550.141 955.731 545.486 1009 541" stroke="black" stroke-width="3" stroke-linecap="round"/>
</svg>*/}
            </div>

            <div class="arrow-down"></div>

            
            
        </div>
    );
};

export default First;