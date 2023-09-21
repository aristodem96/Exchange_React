import React from 'react'

export default function Support() {
  return (
    <div className='container'>
      <div style={{backgroundColor:'black', opacity:'90%', marginTop:'150px', borderRadius:'20px', padding:'5%'}}>
        <p style={{fontSize:'350%', color:'#1E90FF'}}>Got Exchange</p>
        <p style={{fontSize:'250%', color:'whitesmoke'}}>Support</p>
        <p style={{fontSize:'250%', color:'whitesmoke'}}>Answering your questions 24/7</p>
        <p style={{fontSize:'200%', color:'darkgray'}}>Send message to our support!</p>
        <a href="https://t.me/got_exchange" className='btn btn-primary'><img src={require('../assets/tg/tg.png')} alt="" /> Support</a>
      </div>
    </div>
  )
}
 