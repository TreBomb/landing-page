import React, { useState, useEffect } from 'react'

const Contact = ({ enabled, setEnabled }) => {
        if (enabled === true) {
            console.log('contact')
            return (
                <div className='contact-bg'>
                    <div className='contact-container'>
                        <button className='contact-close' onClick={() => setEnabled(false)}>x</button>
                        <h3 className='contact-txt'>Send me a message!</h3>
                        <p className='contact-desc'>Fill out this form and I will get an email with your contact info and your message. I'm available for hire!</p>
                        <form className='contact-form'>
                            <input className='contact-input' type='text' placeholder='Name' />
                            <input className='contact-input' type='text' placeholder='Email' />
                            <input className='contact-input' type='text' placeholder='Phone' />
                            <textarea className='contact-input' placeholder='Message' />
                            <button className='contact-btn'>Send</button>
                        </form>
                    </div>
                </div>
              )
        } else {
            return null
        }
  }
  
  export default Contact;