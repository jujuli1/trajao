import React, { useState } from 'react';
import Fleur from '../images/fleur.jpg';
import '../components/Second.css';
import Modal from './Modals/Modals';

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

    return (
        <div className='Second'>
            <div className='feutre'>
                <h1 className='title'>Dessin au feutre</h1>
                <ul>
                    {Array(8).fill(null).map((_, index) => (
                        <li key={index}>
                            <img
                                src={Fleur}
                                className='img'
                                alt={`Dessin au feutre ${index + 1}`}
                                onClick={() => handleImageClick(Fleur)}
                            />
                        </li>
                    ))}
                </ul>
            </div>
            
            <div className='graphique'>
                <h1 className='title'>Dessin graphique</h1>
                <ul>
                    {Array(8).fill(null).map((_, index) => (
                        <li key={index}>
                            <img
                                src={Fleur}
                                className='img'
                                alt={`Dessin graphique ${index + 1}`}
                                onClick={() => handleImageClick(Fleur)}
                            />
                        </li>
                    ))}
                </ul>
            </div>

            {/* Modal */}
            <Modal show={modalOpen} onClose={closeModal} imgSrc={selectedImage} />

            
        </div>
    );
};

export default Second;
