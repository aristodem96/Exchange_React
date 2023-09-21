import { wait } from '@testing-library/user-event/dist/utils';
import React, { useEffect, useState } from 'react'
import { NavLink, redirect } from 'react-router-dom';

export default function Exchange({ setGotOrder }) {
    /* STATES */
    const [crypto, setCrypto] = useState([
        { name: 'ada', price: '0.262347', min: '627.37643', max: '570342.20532', wallet: "addr1qyf2cxu5vzrawr5g74am2tugmcrs9zz070h6k2ent2q4k8f003hjk98tensyv9nwpgcngl7vmmq58u5glaej7vmgsr5sf9c2am" },
        { name: 'bnb', price: '218.47', min: '0.75377', max: '685.2444', wallet: 'bnb17u5ks2us7p34wltenst8ymq2835rkmugmg0lqn' },
        { name: 'btc', price: '26081', min: '0.00631', max: '5.73672', wallet: 'bc1q6r703r86ce9h9ff77dajq66wketuzhtmf8xljz' },
        { name: 'dash', price: '25.66', min: '6.39535', max: '5813.95349', wallet: 'XqUP993AzJk2wjk59iZuyPQjPv8pJf7MG7' },
        { name: 'doge', price: '0.062816', min: '2611.58594', max: '2374169.04084', wallet: 'DAwfh4mdAVKw1tEBx5T8fYiXouudVp94gC' },
        { name: 'eth', price: '1656.71', min: '0.09954', max: '90.49009', wallet: '0xf9d4e468FAd52569cAc1c7e325046C122Ad4A091' },
        { name: 'ftm', price: '0.201448', min: '816.02374', max: '741839.76261', wallet: '0xf9d4e468FAd52569cAc1c7e325046C122Ad4A091' },
        { name: 'ltc', price: '65.17', min: '2.52216', max: '2292.8768', wallet: 'ltc1q4hkj5cc6txzu4lvzutem6ypwrc306f0fv5gyd8' },
        { name: 'matic', price: '0.553171', min: '296.65588', max: '269687.16289', wallet: '0xf9d4e468FAd52569cAc1c7e325046C122Ad4A091' },
        { name: 'nano', price: '9.54505', min: '279.14059', max: '253764.1685', wallet: 'nano_18b7chiji8jqu55ztwparq3fjo6hsybqc3upeert184b4jq6otfzzyy6fh9f' },
        { name: 'shib', price: '0.00000806', min: '20395550.0618', max: '18541409147.09518', wallet: '0xf9d4e468FAd52569cAc1c7e325046C122Ad4A091' },
        { name: 'sol', price: '20.57', min: '7.95948', max: '7235.89001', wallet: 'EgWk4VnB4Y1YsgBkRJuKuTe3dDasWBUeU9oZN2U1WUYK' },
        { name: 'trx', price: '0.077473', min: '2129.30701', max: '1935733.64305', wallet: 'TMc8HVogBihK1E8hpJSkaC3BoYMDbzzXKT' },
        { name: 'usdt', price: '0.998714', min: '165', max: '150000', wallet: '0xf9d4e468FAd52569cAc1c7e325046C122Ad4A091' },
        { name: 'vet', price: '0.0159307', min: '10306.05871', max: '9369144.28482', wallet: '0x687E51F2FA6f8eAF1919c273E18eddc7DBA7BC23' },
        { name: 'xlm', price: '0.120649', min: '1365.89404', max: '1241721.8543', wallet: 'GDEQ55JFDX5UFDY4W2YLYQF6F5ZHGV24U2ZGIMC5QIHEZFK7RSJMXPLZ' },
        { name: 'xmr', price: '143.92', min: '1.13496', max: '1031.77879', wallet: 'Wallet will be added soon.' }
    ]);
    const [input_send_crypto, setInputSendCrypto] = useState('');
    const [input_receive_crypto, setInputReceiveCrypto] = useState('');
    /* FUNCTION ON CLICK*/
    const selectCrypto_Send = (event) => {
        let p_elemet_id = document.getElementById('name_crypto_send');
        let select_button = event.currentTarget.id;
        let myinput = document.getElementById('input_send');
        crypto.forEach((c) => {
            if (c.name == select_button) {
                p_elemet_id.innerHTML = c.name.toUpperCase() + ' min(' + c.min + ') - max(' + c.max + ')';
                p_elemet_id.style.display = 'block'
                myinput.value = c.min;
                document.getElementById('input_send').removeAttribute('disabled');
                setInputSendCrypto(c);
            }
            else {
                return;
            }
        })
        document.getElementById('input_receive').placeholder = 'Choice a receive crypto!';
    }
    const selectCrypto_Receive = (event) => {
        let p_elemet_id = document.getElementById('name_crypto_receive');
        let select_button = event.currentTarget.id;
        let myinput = document.getElementById('input_receive');
        try {
            crypto.forEach((c) => {
                if (c.name == select_button) {
                    p_elemet_id.innerHTML = c.name.toUpperCase();
                    p_elemet_id.style.display = 'block';
                    setInputReceiveCrypto(c);

                    myinput.value = (input_send_crypto.price / c.price) * document.getElementById('input_send').value;
                    myinput.min = (input_send_crypto.price / c.price) * document.getElementById('input_send').value;
                    document.getElementById('input_receive').removeAttribute('disabled');

                }
                else {
                    return;
                }
            })
        } catch (error) {
            alert("To begin, select a cryptocurrency from the block to send!")
            return;
        }

    }
    /* Exchange button */
    const handleExchange = (e) => {
        if (document.getElementById('input_send').value < input_send_crypto.min) {
            alert('The amount entered is less than the minimum!');
            console.log(document.getElementById('input_receive_address').value.legth)
            e.preventDefault();
        }
        if (document.getElementById('input_receive_address').value.length < 20 || document.getElementById('input_receive_address').value == undefined ){
            alert('Enter your wallet!')
            e.preventDefault();
        }
        if(input_send_crypto.name == input_receive_crypto.name){
            alert('Unacceptable pair for cryptocurrencies!');
            e.preventDefault();
        }
        else {
            let order = { send_crypto: input_send_crypto.name, receive_crypto: input_receive_crypto.name, send_quantity: document.getElementById('input_send').value, receive_quantity: document.getElementById('input_receive').value, wallet: input_send_crypto.wallet };
            setGotOrder(order);
        }
    }

    /* FUNCTION ONINPUT */
    const changeValue_Send = (event) => {
        let input_receive = document.getElementById('input_receive');
        input_receive.value = (input_send_crypto.price / input_receive_crypto.price) * event.target.value;
        if (parseFloat(document.getElementById('input_send').value) < input_send_crypto.min) {
            document.getElementById('input_send').style.backgroundColor = '#B22222';
        }
        else {
            document.getElementById('input_send').style.backgroundColor = 'whitesmoke';
        }
    }

    const changeValue_Receive = (event) => {
        let input_send = document.getElementById('input_send');
        let min_receive = input_receive_crypto.min;
        input_send.value = (input_receive_crypto.price / input_send_crypto.price) * event.target.value;
        console.log(min_receive);
        if (parseFloat(document.getElementById('input_receive').value) < min_receive) {
            document.getElementById('input_receive').style.backgroundColor = '#B22222';
            
        }
        else {
            document.getElementById('input_receive').style.backgroundColor = 'whitesmoke';
        }
    }

    useEffect(() => {

        if (document.getElementById('input_send').value.length > 1 && document.getElementById('input_receive').value.length > 1) {
            document.getElementById('exchange').style.display = 'block';
        }
    })


    return (
        <div className='container-fluid '>
            <div className='row main'>
                <div style={{ position: 'relative', color: 'whitesmoke', backgroundColor: 'black', width: '100%', fontFamily: 'monospace', padding: '10px', display: 'block', marginBottom: '15px' }}>
                    <h2 style={{ color: 'whitesmoke' }}>START THE EXCHANGE IN JUST FEW CLICKS! CHOOSE THE PAIR TO EXCHANGE</h2>
                    <h5 style={{ color: 'whitesmoke' }}>New modern cryptocurrencies of exchange platforms — <nav style={{ fontSize: '250%', color: '#1E90FF' }}>Got Exchange</nav></h5>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-6 col-xs-6 exchange_block'>
                    <div className='exchange_block_internal'>

                        <div className='exchange_block_crypto'>
                            <h1 style={{ color: 'whitesmoke' }}>YOU SEND</h1>
                            <ul style={{ margin: '1px', float: 'left' }}>
                                {crypto.map(item => (
                                    <li key={item.name} className='exchange_li btn btn-dark' id={item.name} onClick={selectCrypto_Send}>
                                        <img src={require(`../assets/crypto_picture/${item.name.toUpperCase()}.png`)} className="exchange_li_picture" alt="crypto picture" />
                                    </li>
                                ))}
                            </ul>

                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-6 col-xs-6 exchange_block'>
                    <div className='exchange_block_internal'>

                        <div className='exchange_block_crypto'>
                            <h1 style={{ color: 'whitesmoke' }}>YOU RECEIVE</h1>
                            <ul style={{ margin: '1px', float: 'left' }}>
                                {crypto.map(item => (
                                    <li key={item.name} className='exchange_li btn btn-dark' id={item.name} onClick={selectCrypto_Receive}>
                                        <img src={require(`../assets/crypto_picture/${item.name.toUpperCase()}.png`)} className="exchange_li_picture" alt="crypto picture" />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-12 col-sm-12 col-xs-12 exchange_block'>
                    <div className='exchange_block_internal'>
                        <h1 style={{ color: 'whitesmoke' }}>FILL FIELDS</h1>
                        <div className='exchange_block_form'>
                            <form>
                                <div className='form-group'>
                                    <label htmlFor="input_send" style={{ color: 'whitesmoke' }}><h4>You Send</h4></label>
                                    <p style={{ color: '#1E90FF', display:'none' }} id='name_crypto_send'></p>
                                    <input type="text" required disabled className='form-control' id='input_send' name='input_send' placeholder='To send...' onInput={changeValue_Send} />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="input_receive" style={{ color: 'whitesmoke' }}><h4>You Receive</h4></label>
                                    <p style={{ color: '#1E90FF', display:'none' }} id='name_crypto_receive'></p>
                                    <input type='text' required disabled className='form-control' id='input_receive' name='input_receive' placeholder='To receive...' onInput={changeValue_Receive} />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="receive_address" style={{ color: 'whitesmoke' }}><h4>Receive Address</h4></label>
                                    <input type="text" minLength='20' required className='form-control' id='input_receive_address' name='input_receive_address' placeholder='Your receive address...' />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="input_email" style={{ color: 'whitesmoke' }}><h4>Email Address</h4></label>
                                    <input type="email" required className='form-control' id='input_email' name='input_email' placeholder='Your email address...' />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="submit" style={{ color: '#C0C0C0', paddingTop: '3%' }}><p>If you filled in all the fields correctly, click the button below to create an application and prepare for the exchange</p></label>
                                    <NavLink className='form-control btn btn-outline-primary' id='exchange' to='/Order' style={{ display: 'none' }} onClick={handleExchange}> EXCHANGE  </NavLink>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
                <div className='block_exchangepicture col-md-12 col-lg-6 col-sm-12 col-xs-12'>
                    <h4 style={{ color: 'darkgray' }}>Choose the pair of cryptocurrency:</h4>
                    <img src={require("../assets/Exchangepicture.png")} className="exchangepicture" alt="exchangepicture" />
                </div>
                <div className='block_exchangepicture col-md-12 col-lg-6 col-sm-12 col-xs-12'>
                    <h4 style={{ color: 'darkgray', paddingRight: '5%' }}>Pay the request after filling the information fields:</h4>
                    <img src={require("../assets/Exchangepicture2.png")} className="exchangepicture" alt="exchangepicture" />
                </div>
            </div>

        </div>
    )
}
