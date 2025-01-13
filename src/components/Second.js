import React, { useState } from 'react';
import Fleur from '../images/fleur.jpg';
import '../components/Second.css';
import Modal from './Modals/Modals';
import Analakely from '../images/Analakely.jpg';
import Dessin from '../images/dessin.jpg';
import Dessin2 from '../images/dessin2.jpg';
import Pieuvre from '../images/pieuvre.png';
import Sakalava from '../images/Sakalava.jpg';
import Sunbath from '../images/sunbath.jpg';
import Tan1 from '../images/tan1.png';
import Tan2 from '../images/tan2.png';
import Taro from '../images/tarot1.jpg';
import Taro2 from '../images/tarot2.jpg';
import Witch from '../images/witch.png';
import Tigre from '../images/tigre.bmp';



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
    const feutreImages = [Analakely, Dessin, Dessin2, Pieuvre, Sakalava, Sunbath, Tan1, Tan2];
    const graphiqueImages = [Taro, Taro2, Witch, Tigre, Pieuvre, Sakalava, Sunbath, Tan1];

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

            
        </div>
    );
};

export default Second;
