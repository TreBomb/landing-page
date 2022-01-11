const Hero = () => {
    return (
        <div className='hero'>
            <svg className='hero-svg' viewBox='0 0 100 100'>
                <g className='hero-svg-group'>
                <text className='hero-svg-txt' x='0' y='20'>welcome</text>
                <text className='hero-svg-txt' x='48' y='40'>to</text>
                <text className='hero-svg-txt' x='55' y='60'>trest.in</text>
                </g>
                <text className='hero-svg-arrow' x='50' y='98'>v</text>
            </svg>
        </div>
      )
  }
  
  export default Hero;