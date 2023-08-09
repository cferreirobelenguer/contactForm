import React, {useState} from 'react';
import '../contact/Contact.scss';
import flecha from '../../assets/images/flecha.svg';
import Modal from '../modal/Modal';


const Contact = () => {

    const [data, setData] =useState({
        name: '',
        email: '',
        phone: '',
        budget: '',
        goals: ''
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalInfo, setModalInfo] =useState({
        title: '',
        subtitle: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setData({...data,[name]: value});

    }

     //modal is close
    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const sendData = (event) => {
        const phonePattern = /^\d{9}$/;
        const namePattern = /^([a-zA-ZñÑáéíóúÁÉÍÓÚ])+$/i;
        let isValid = true;
        event.preventDefault();

        if (!(!isNaN(data.phone) && phonePattern.test(data.phone))) {
            isValid = false;
        }
    
        if (!(namePattern.test(data.name))) {
            isValid = false;
        }
    
        if (!(data.email.includes('@'))) {
            isValid = false;
        }

        if (!data.budget) {
            isValid = false;
        }

        if (!data.goals) {
            isValid = false;
        }
    
        if (isValid) {
            setIsModalOpen(true)
            setModalInfo({
                title: 'Thank you for contacting us!',
                subtitle: 'We will answer you as soon as possible.'
            })
            fetch('http://127.0.0.1:5000/save', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(data => console.log("Enviado "+data));
        } else {
            setIsModalOpen(true);
            setModalInfo({
                title: 'Error',
                subtitle: 'Please check your input and try again.'
            });
        }
    }
    return (
        <section className="contact">
            <div className="contact__container">
                <h1 className="contact__container__title">Fuel Your Bland's Goals with <span className="contact__container__title--decoration">Beyond</span></h1>
                <p className="contact__container__subtitle">You will gel a response within 24 hours. We will explain in details how we can help you fuel and grow your brand within the stated budget.</p>
            </div>
            <form className="contact__form">
                <input type="text" placeholder="Name" name="name" value={data.name} onChange={handleChange}/>
                <input type="email" placeholder="Email address" name="email" value={data.email} onChange={handleChange}/>
                <input type="tel" placeholder="Phone number" name="phone" value={data.phone} onChange={handleChange}/>
                <input type="text" placeholder="Budget" name="budget" value={data.budget} onChange={handleChange}/>
                <input type="text" placeholder="Goals" name="goals" value={data.goals} onChange={handleChange}/>
                <div className="contact__button">
                    <button type="submit" className="contact__button__style" onClick={sendData}>Send Enquiry <img src={flecha} width="32" height="32" alt="img button"></img></button>
                </div>
            </form>
            <Modal isOpen={isModalOpen} onClose={handleModalClose}>
                <h2>{modalInfo.title}</h2>
                <p>{modalInfo.subtitle}</p>
            </Modal>
        </section>
    );
}
export default Contact;