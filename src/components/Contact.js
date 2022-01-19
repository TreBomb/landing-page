import React, { useState, useEffect } from 'react'

const Contact = ({ enabled, setEnabled }) => {
        if (enabled === true) {
            console.log('contact')
            return (
                <div className='contact-bg'>
                    <div className='contact-container'>
                        <button className='contact-close' onClick={() => setEnabled(false)}>x</button>
                        <h1 className='contact-txt'>Send me a message!</h1>
                        <form className='contact-form'>
                            <input className='contact-input' type='text' placeholder='name' />
                            <input className='contact-input' type='text' placeholder='email' />
                            <textarea className='contact-input' placeholder='message' />
                            <button className='contact-btn'>send</button>
                        </form>
                    </div>
                </div>
              )
        } else {
            return null
        }
  }
  
  export default Contact;