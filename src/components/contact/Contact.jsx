import React from 'react';
import '../contact/Contact.scss';
import flecha from '../../assets/images/flecha.svg';


const Contact = () => {
    return (
        <section className="contact">
            <div className="contact__container">
                <h1 className="contact__container__title">Fuel Your Bland's Goals with <span className="contact__container__title--decoration">Beyond</span></h1>
                <p className="contact__container__subtitle">You will gel a response within 24 hours. We will explain in details how we can help you fuel and grow your brand within the stated budget.</p>
            </div>
            <form className="contact__form">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email address" />
                <input type="tel" placeholder="Phone number" />
                <input type="text" placeholder="Budget" />
                <input type="text" placeholder="Goals" />
                <div className="contact__button">
                    <button className="contact__button__style">Send Enquiry <img src={flecha} width="32" height="32" alt="img button"></img></button>
                </div>
            </form>
        </section>
    );
}
export default Contact;