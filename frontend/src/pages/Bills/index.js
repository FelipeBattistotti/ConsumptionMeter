import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';


export default function Bills () {
    const [bills, setBills] = useState([]);
    const userId = localStorage.getItem('userId');
    //const ongName = localStorage.getItem('ongName');

    const history = useHistory();

    useEffect(() => {
        api.get('bill', {
            headers: {
                Authorization: userId,
            }
        }).then(response => {
            setBills(response.data);
        })
    }, [userId]);

    function handleLogout () {
        localStorage.clear();

        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <button onClick={handleLogout} type="button">
                    <FiPower size={25} color="#E02041" />
                </button>
            </header>

            <h1>Casos Cadastrados</h1>

            <ul>
                {bills.map(bill => (
                    <li key={bill.id}>
                        <strong>Fatura</strong>
                        <p>{bill.month}</p>
                        <p>{bill.year}</p>
                        <p>{bill.status}</p>

                        <p>{bill.monthly_consumption}</p>
                        <p>{bill.monthly_value}</p>

                        <strong>VENCIMENTO</strong>
                        <p>{bill.due_date}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
