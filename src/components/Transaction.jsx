import React, { useEffect, useState } from 'react'

export default function () {

    const [transaction, setTransaction] = useState([]);

    const viewTransaction = () => {
        let url = 'http://127.0.0.1:8000/api/order';
        fetch(url)
            .then((response) => {
                response.json().then((data) => { setTransaction(data); console.log(data) });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div className='container-fluid'>
            <div className='transaction'>
                <button className='btn btn-outline-primary' style={{ margin: '5px' }} onClick={viewTransaction}>View all transactions</button>
                {
                    transaction.map((crypto, index) => {
                        return <div key={index} style={{ backgroundColor: '#282c34', color: 'whitesmoke', margin:'1%', borderRadius:'8px', border:'1px solid #1E90FF' }}>The name of the cryptocurrency that was sent: {crypto.cryptocurrency_send_name} | Amount of send: {crypto.amount_of_cryptocurrency_send} | The name of the received cryptocurrency: {crypto.cryptocurrency_receive_name} | Amount of receive: {crypto.amount_of_cryptocurrency_receive} </div>
                    })
                }
            </div>
        </div>
    )
}
