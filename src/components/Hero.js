import World from './World'
const Hero = () => {
    return (
        <div className='hero'>
            {/* <svg className='hero-svg' viewBox='0 0 100 100'>
                <g className='hero-svg-group'>
                <text className='hero-svg-txt' x='0' y='20'>welcome</text>
                <text className='hero-svg-txt' x='0' y='40'>to</text>
                <text className='hero-svg-txt' x='0' y='60'>trest.in</text>
                </g>
                <text className='hero-svg-arrow' x='5' y='98'>v</text>
            </svg> */}
            <World />
            {/* <h1 className='hero-msg'>welcome to trest.in</h1> */}
        </div>
      )
  }
  
  export default Hero;