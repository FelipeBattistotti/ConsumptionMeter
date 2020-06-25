import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import headerImg from '../../assets/header.png';

export default function Bills () {
    const [bills, setBills] = useState([]);
    const userId = localStorage.getItem('userId');
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

        history.push('/'); // volta para a pagina de logon
    }

    return (
        <div className="profile-container">
            <header>
                <img src={headerImg} alt="Header" />
                <button onClick={handleLogout} type="button">
                    <FiChevronLeft size={35} />
                </button>
            </header>
            <ul>
                {bills.map(bill => (
                    <li key={bill.id}>
                        <strong className="label-fatura">Fatura</strong>
                        <p1 className="month-year">{bill.month}&nbsp;{bill.year}</p1>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <p2>{bill.status}</p2>
                        <br/>
                        <p3>{bill.monthly_consumption} MB</p3>
                        <br/>
                        <p4>R$ {bill.monthly_value}</p4>
                        <strong className="label-vencimento">VENCIMENTO</strong>
                        <p5>{bill.due_date}</p5>
                    </li>
                ))}
            </ul>
        </div>
    );
}
