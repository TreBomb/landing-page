const SingleContent = ({ type }) => {
    if (type==='all') {
        return (
            <div className='single-content'>
                <div className='content-txt'>
                    <h1 className='txt-title'>About Me</h1>
                    <h2 className='txt-sub'>A little bit on who I am and what I do</h2>
                    <hr />
                    <p className='txt-body'>
                        Hello, I'm Trestin! I'm a software engineer based in Austin, TX.
                        I have a passion for building things that make people's lives better.
                        I love to create and design high quality websites and applications.
                        I'm always looking to learn new things and grow as a developer.
                        I aspire to make something great that I can be proud of.
                        I'm currently looking for a position in the Austin area.
                    </p>
                </div>
                <img className='content-img' src='https://davidnelsoncollins.com/wp-content/uploads/2018/11/profiles-empty1.png' />
            </div>
        )
    }
  }
  
  export default SingleContent;