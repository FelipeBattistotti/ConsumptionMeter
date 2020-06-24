import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.png';

export default function Logon() {
    //const [id, setId] = useState('');

    const [email, setEmail] = useState('');
    const [pwd, setPWD] = useState('');
    const history = useHistory();

    async function handleLogin (e) {
        e.preventDefault();

        try {
            //const response = await api.post('session', { id });
            const response = await api.post('session', { email, pwd });

            localStorage.setItem('userId', response.data.id);

            //localStorage.setItem('ongId', id);
            //localStorage.setItem('ongName', response.data.name);

            history.push('/bills');
        } catch (err) {
            alert('Falha no login, tente novamente.');
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img  src={logoImg} alt="Yoda" />

                <form onSubmit={handleLogin}>
                    <input 
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                        placeholder="Senha"
                        value={pwd}
                        type="password"
                        onChange={e => setPWD(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>
                </form>
            </section>
        </div>
    );
}
