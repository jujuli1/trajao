import React, { useState } from 'react';
import '../components/Second.css';
import Modal from './Modals/Modals';
import Analakely from '../images/Analakely.jpg';
import Dessin from '../images/dessin.jpg';
import Dessin2 from '../images/dessin2.jpg';
import Pieuvre from '../images/pieuvre.png';
import Sakalava from '../images/Sakalava.jpg';
import Sunbath from '../images/sunbath.jpg';
import Temp from '../images/tan1.png';
import Tan2 from '../images/tan2.png';
import Brioch from '../images/tarot1.jpg';
import Cyclope from '../images/tarot2.jpg';
import Witch from '../images/witch.png';
import Tigre from '../images/tigre.bmp';
import Sorciere from '../images/sorciere.png';
import Ruche from '../images/ruche.jpg'



const Second = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const handleImageClick = (imgSrc) => {
        setSelectedImage(imgSrc);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedImage('');
    };

    // Tableaux des images pour chaque section
    const feutreImages = [Analakely,Brioch,Cyclope, Dessin, Dessin2, Sunbath, Temp, Tan2];
    const graphiqueImages = [Witch, Tigre, Pieuvre, Sakalava,Sorciere ];

    const renderImages = (images, section) => {
        return images.map((image, index) => (
            <li key={`${section}-${index}`}>
                <img
                    src={image}
                    className='img'
                    alt={`${section} ${index + 1}`}
                    onClick={() => handleImageClick(image)}
                />
            </li>
        ));
    };

    return (
        <div className='Second'>
            {/* Section Dessin au feutre */}
            <div className='feutre'>
                <h1 className='title'>Dessin au feutre</h1>
                <ul>{renderImages(feutreImages, 'feutre')}</ul>
            </div>
            
            {/* Section Dessin graphique */}
            <div className='graphique'>
                <h1 className='title'>Dessin graphique</h1>
                <ul>{renderImages(graphiqueImages, 'graphique')}</ul>
            </div>

            

            {/* Modal */}
            <Modal show={modalOpen} onClose={closeModal} imgSrc={selectedImage} />

            <footer>

            <p className='merci'>remerciements</p>
                <div className='thx'>

                    
            <div className='laruche' >

            
            <a className='linkthx' href='https://www.facebook.com/laruchedesarts22/photos?locale=fr_FR'><img src={Ruche} className='ruche'/>La Ruche des arts 22</a>
            <a className='linkthx' href='https://www.instagram.com/collectiflabrioche/'>La Brioch</a>

            </div>
                </div>
                
            
            </footer>
        </div>
    );
};

export default Second;
