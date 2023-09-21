import React, { useEffect } from 'react'

export default function Order({ gotOrder }) {
  /* ONCLICK CONFIRM */
  const handleConfirm = () => {
    let div_confirm = document.getElementById('confirm');
    let new_div = document.createElement('div');
    new_div.innerHTML = "Do not reload the page! We are waiting for your payment! After receiving the payment, we will send the amount you need to your wallet! ";
    new_div.className = "alert alert-danger alert-block";
    div_confirm.appendChild(new_div);
    document.getElementById('confirm_btn').setAttribute('disabled', 'disabled');

    let transaction = { 'cryptocurrency_send_name': gotOrder.send_crypto, 'amount_of_cryptocurrency_send': gotOrder.send_quantity, 'cryptocurrency_receive_name': gotOrder.receive_crypto, 'amount_of_cryptocurrency_receive': gotOrder.receive_quantity };
    let url = 'http://127.0.0.1:8000/api/add_order';
    const options = {
      method: 'post',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(transaction)
    };
    fetch(url, options)
    .then((response)=>{console.log(response);})
    .catch((error)=>{console.log(error);});

  }

  return (
    <div className='container' style={{ paddingTop: '100px' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ backgroundColor: 'black', opacity: '90%', padding: '2px', margin: '2', borderRadius: '20px', width: '100%', position: 'relative' }} className='row'>
          <p style={{ color: 'whitesmoke', fontSize: '200%' }}>Exchange</p>
          <p style={{ color: 'whitesmoke', fontSize: '150%' }}>Order ID {parseInt(Math.random() * (5000000 - 1000000) + 1000000)}</p>
          <p style={{ color: '#1E90FF', fontSize: '150%' }}>{gotOrder.send_crypto} on {gotOrder.receive_crypto}</p>
          <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12' >
            <div style={{ color: 'whitesmoke', backgroundColor: '#282c34', borderRadius: '20px', padding: '2px', marginBottom: '20px' }}>
              <div className='p-3'>
                <p style={{ color: 'whitesmoke' }}>Pay directly to the wallet</p>
                <p style={{ color: 'whitesmoke', width: '100%' }}>You send: {gotOrder.send_quantity} {gotOrder.send_crypto} | You receive: {gotOrder.receive_quantity} {gotOrder.receive_crypto} </p>
              </div>

              <form method='post'>
                <div className='form-group p-3'>
                  <label htmlFor="quantity">The amount you have to send:</label>
                  <input type="text" name='quantity' className='form-control' value={gotOrder.send_quantity + ' ' + gotOrder.send_crypto} readOnly />
                </div>
                <div className='form-group p-3'>
                  <label htmlFor="wallet">Send it to this wallet:</label>
                  <input type="text" name="wallet" className='form-control' value={gotOrder.wallet} readOnly />
                </div>
                <div id='confirm' className='form-group m-3 row'>
                  <input type="submit" className='btn btn-primary' id='confirm_btn' value='Confirm' readOnly onClick={handleConfirm} />
                </div>
              </form>

            </div>

          </div>
          <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12' style={{ marginBottom: '20px' }} >
            <div style={{ color: 'whitesmoke', backgroundColor: '#282c34', borderRadius: '20px', padding: '10px', marginBottom: '5px' }}>
              <p style={{ color: 'whitesmoke' }}>Pay by scanning the QR code!</p>
              <img src={require('../assets/QRCodeOrder.png')} alt="QRcode" style={{ width: '30%', paddingBottom: '10px' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
