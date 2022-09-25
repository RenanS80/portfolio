import { useState } from 'react';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser'

import { EMAIL_ID, PUBLIC_KEY, TEMPLATE_ID } from 'utils/emailjs';

import ArrowIcon from 'assets/images/arrow.svg';

import './style.css';

function Form() {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = (e: React.SyntheticEvent) => {
        e.preventDefault();

        if (name === '' || email === '' || message === '') {
            alert('Preencha todos os campos');
            return;
        }

        const TEMPLATE_PARAMS = {
            from_name: name,
            last_name: lastName,
            message: message,
            email: email
        }

        emailjs.send(EMAIL_ID, TEMPLATE_ID, TEMPLATE_PARAMS, PUBLIC_KEY)
            .then((response) => {
                toast.success('Mensagem enviada com sucesso.');

                /* Limpando os inputs após envio */
                setName('');
                setLastName('');
                setEmail('');
                setMessage('');
            }, (err) => {
                console.log("Erro", err);
            });
    }

    return (
        <form onSubmit={sendEmail}>
            <div className="contact__input-name-lastname">
                <div className="contact__input-name">
                    <label htmlFor="name">Nome <span className="text-red">*</span></label>
                    <input
                        type="text"
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        required
                    />
                </div>
                <div className="contact__input-lastname">
                    <label htmlFor="lastname">Sobrenome</label>
                    <input
                        type="text"
                        name="lastname"
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                    />
                </div>
            </div>
            <div className="contact__input-email">
                <label htmlFor="email">E-mail <span className="text-red">*</span></label>
                <input
                    type="email"
                    placeholder="exemplo@email.com"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                />
            </div>
            <div className="contact__textarea-message">
                <label htmlFor="message">Mensagem <span className="text-red">*</span></label>
                <textarea
                    name="message"
                    rows={10}
                    placeholder="Digite aqui a sua mensagem"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    required
                ></textarea>
            </div>

            <div>
                <button type="submit" className="btn btn--large btn--blue">
                    Enviar
                    <img src={ArrowIcon} alt="Enviar mensagem" />
                </button>
            </div>
        </form>
    );
}

export default Form;