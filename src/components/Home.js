import React, { useState, useEffect } from 'react'
import Hero from './Hero'
import SingleContent from './SingleContent'

const Home = () => {
    return (
        <div className='home'>
            <Hero />
            <SingleContent type={'all'} />
            <SingleContent type={'languages'} />
            <SingleContent type={'projects'} />
            <div className='spacer' />
        </div>
      )
  }
  
  export default Home;