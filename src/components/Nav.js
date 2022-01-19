const Nav = ({ setEnabled }) => {
    const openPopup = () => {
        setEnabled(true)
        console.log('popup')
    }

    return (
      <div className='nav'>
          <h1 className='nav-txt left'>trest.in</h1>
          <h1 className='nav-txt right' onClick={openPopup} >contact</h1>
      </div>
    )
  }
  
  export default Nav;