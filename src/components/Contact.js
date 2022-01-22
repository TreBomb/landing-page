import React, { useState, useEffect } from 'react'
import emailjs from 'emailjs-com'
import { useForm } from 'react-hook-form'

const Contact = ({ enabled, setEnabled }) => {
    const { register, handleSubmit, formState: { errors }} = useForm()
    const onSubmit = (data, r) => {
        alert(`Thank you for your message from ${data.Email}`)
        const templateId = 'template_dr13zeo'
        const serviceID = 'portfolio_emails'
        sendFeedback(serviceID, templateId, { from_name: data.Name, message_html: data.Message, reply_to: data.Email, phone_number: data.Phone })
        r.target.reset()
    }

    const sendFeedback = (serviceID, templateId, variables) => {
        window.emailjs.send(
            serviceID, templateId,
            variables
        ).then(res => {
            console.log('Email successfully sent!')
        })
            .catch(err => console.error('Error:', err))
    }

    function sendEmail(e) {
        e.preventDefault()
    
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
          .then((result) => {
              console.log(result.text)
          }, (error) => {
              console.log(error.text)
          })
      }

    if (enabled === true) {
        console.log('contact')
        return (
            <div className='contact-bg'>
                <div className='contact-container'>
                    <button className='contact-close' onClick={() => setEnabled(false)}>x</button>
                    <h3 className='contact-txt'>Send me a message!</h3>
                    <p className='contact-desc'>Fill out this form and I will get an email with your contact info and your message. I'm available for hire!</p>
                    <form className='contact-form' onSubmit={handleSubmit(onSubmit)} >
                        <input
                        className='contact-input'
                        type='text'
                        name='Name'
                        placeholder='Name'
                        {...register('Name', { required: 'Please enter your name', pattern: {
                            value: 20
                        } })}
                        />
                        {errors.Name && errors.Name.message}
                        <input
                        className='contact-input'
                        type='text'
                        placeholder='Email'
                        {...register('Email', { required: 'Please enter an email', pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                        } })}
                        />
                        {errors.Email && errors.Email.message}
                        <input
                        className='contact-input'
                        type='text'
                        placeholder='Phone'
                        {...register('Phone', { required: true })}
                        />
                        {errors.Phone && errors.Phone.message}
                        <textarea
                        className='contact-input'
                        placeholder='Message'
                        {...register('Message', { required: true })}
                        />
                        {errors.Message && "oops, you forgot your message!"}
                        <button className='contact-btn' >Send</button>
                    </form>
                    <a href='static/Trestin_Ishak_Resume.pdf' download='Trestin Ishak Resume'><h2 className='contact-desc'>Click to download my resume</h2></a>
                </div>
            </div>
            )
    } else {
        return null
    }
  }
  
export default Contact