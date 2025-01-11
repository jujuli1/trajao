import React from 'react';
import './Contact.css'
import Swal from 'sweetalert2'

const Contact = () => {


    {/** web3form : message de validation d'envoi du message*/}
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "f03efe11-9163-4e0a-a1fa-eaa39ed0b933");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                
                text: "Votre message à été envoyé",
                icon: "success"
              });
              
        }
      };
    return (
        <div>
            {/**contenue modale de contacte */}
            <section className='contact'>
            
                <form onSubmit={onSubmit}>
                    <h2>Me Contacter</h2>
                    <div className='input-box'>
                        <label>Votre nom</label>
                        <input type='text' className='field' placeholder='Entrez votre nom' name='name' required/>
                    </div>
                    <div className='input-box'>
                        <label>Votre Email</label>
                        <input type='email' className='field' placeholder='Entrez votre email' name='email' required/>
                    </div>
                    <div className='input-box'>
                <label className="futuristic">Votre message</label>
                <textarea name='message'  className='field mess' placeholder='Votre message' required></textarea>
            </div>
            <button type='submit'>Envoyer</button>
                </form>
               
            </section>
        </div>
    );
};

export default Contact;