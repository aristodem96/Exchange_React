import React from 'react'

export default function HowToExchange() {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 how_exchange' style={{ marginTop: '100px'}}>
            <div style={{ backgroundColor: 'black', opacity: '90%', borderRadius:'20px', padding:'3%' }}>
              <p style={{ fontSize: '150%' }}>HOW TO EXCHANGE YOUR CRYPTO?</p>
              <p style={{ fontSize: '150%' }}>FOLLOW THESE SIMPLE STEPS:</p>
              <p style={{ color: '#1E90FF', fontSize: '150%' }}>Choose the pair of cryptocurrency:</p>
              <img src={require('../assets/Exchangepicture.png')} alt="crypto" style={{width:'60%'}} />
              <p style={{ color: '#1E90FF', paddingTop: '3%', fontSize: '150%' }}>Pay the request after filling the information fields:</p>
              <img src={require('../assets/Exchangepicture2.png')} alt="crypto" style={{width:'60%'}} />
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 how_exchange' style={{ marginTop: '100px'}}>
            <div style={{ backgroundColor: 'black', opacity: '90%', borderRadius:'20px', padding:'3%' }}>
              <p style={{ color: 'whitesmoke', fontSize: '200%' }}>
                Our advantages for clients:
                Auto payouts for most destinations
                Favorable tariffs and individual conditions at the request of the client
                No hidden fees, transparent transaction settlement
                Large reserves for various requests
                Security and privacy
                The instantaneous operation - 5-10 minutes
              </p>

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
