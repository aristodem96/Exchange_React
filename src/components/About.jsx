import React from 'react'

export default function About({ gotOrder }) {
  return (

    <div className='container' style={{ marginTop: '150px' }} >
      <div style={{ backgroundColor: 'black', opacity: '90%', padding: '2%', borderRadius: '20px' }}>
        <div style={{ paddingTop: '2%' }}>
          <div style={{ color: 'whitesmoke', fontSize: '200%', fontFamily: 'monospace' }}>New modern cryptocurrency exchange platform - <h3 style={{ color: '#1E90FF', fontSize: '130%', fontFamily: 'monospace' }}>Got Exchange</h3> </div>
        </div>
        <div>
          <p style={{ color: '#C0C0C0', fontSize: '150%', paddingLeft: '5%', paddingRight: '5%', fontFamily: 'monospace' }}>We are happy to present you new biggest service to exchange your cryptocurrency. You can easily exchange every coin listed on Binance with lowest fee!</p>
        </div>
        <div>
          <img src={require('../assets/crypto_about.png')} alt="crypto" style={{ width: '80%' }} />
        </div>
        <div>
          <p style={{ color: '#1E90FF', fontSize: '150%', paddingLeft: '5%', paddingRight: '5%', paddingTop: '2%', fontFamily: 'monospace' }}>And many other coins are available!</p>
        </div>
        <div style={{ paddingBottom: '5%', display: 'inline' }}>
          <a href="/" className='btn btn-primary' style={{ fontSize: '200%', fontFamily: 'monospace' }}>Exchange</a>
        </div>
      </div>
    </div>
  )
}
