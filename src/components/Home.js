import Hero from './Hero'
import SingleContent from './SingleContent'

const Home = () => {
    return (
        <div className='home'>
            <Hero />
            <SingleContent type={'all'} />
        </div>
      )
  }
  
  export default Home;