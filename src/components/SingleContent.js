const SingleContent = ({ type }) => {
    if (type==='all') {
        return (
            <div className='single-content'>
                <div className='content-txt'>
                    <h1 className='txt-title'>About Me</h1>
                    <a href='static/Trestin_Ishak_Resume.pdf' download='Trestin Ishak Resume'><h2 className='txt-sub'>Click here for my resume</h2></a>
                    <hr />
                    <p className='txt-body'>
                        Hello, I'm Trestin! I'm a software engineer based in Austin, TX
                        with a passion for building things that make people's lives better.
                        I love to create and design high quality websites and applications
                        that allow me to learn new things and grow as a developer.
                        I aspire to make something great that I can be proud of
                        and call my own. I'm currently looking for a position in the Austin area.
                    </p>
                </div>
                <img className='content-img' src='/static/images/Me_BLANK.png' alt='Myself' />
            </div>
        )
    } else if (type==='languages') {
        return (
            <div className='single-content'>
            <div className='content-txt'>
                <h1 className='txt-title'>My Talents</h1>
                <h2 className='txt-sub'>Check out what I know</h2>
                <hr />
                <ul className="content-ul">
                    <li className='content-li'>
                        <article className="txt-body">Javascript</article>
                    </li>
                    <li className='content-li'>
                        <article className="txt-body">React</article>
                    </li>
                    <li className='content-li'>
                        <article className="txt-body">Ruby on Rails</article>
                    </li>
                    <li className='content-li'>
                        <article className="txt-body">SQL</article>
                    </li>
                    <li className='content-li'>
                        <article className="txt-body">JSON</article>
                    </li>
                    <li className='content-li'>
                        <article className="txt-body">Bootstrap</article>
                    </li>
                    <li className='content-li'>
                        <article className="txt-body">MaterialUI</article>
                    </li>
                    <li className='content-li'>
                        <article className="txt-body">Adobe Suite</article>
                    </li>
                    <li className='content-li'>
                        <article className="txt-body">Git</article>
                    </li>
                    <li className='content-li'>
                        <article className="txt-body">Blender</article>
                    </li>
                    <li className='content-li'>
                        <article className="txt-body">Unity</article>
                    </li>
                </ul>
            </div>
            <img className='content-img' src='/static/images/Languages_BLANK.png' alt='Languages I Know' />
        </div>
        )
    } else if (type==='projects') {
        return (
            <div className='single-content'>
            <div className='content-full'>
                <h1 className='txt-title'>Projects</h1>
                <h2 className='txt-sub'>View what I've done</h2>
                <hr />
                <div className="project-grid">
                    <a href='https://fit-spot.herokuapp.com/' className='content-project'>
                        <img className="project-img" src='/static/images/fitspot.png' alt='FitSpot Icon' />
                        <p className="project-title">The Fit Spot</p>
                        <hr />
                        <p className="project-desc">Fitness app that allows users create their own workout schedules and weekly routines.</p>
                    </a>
                    <a href='https://store.steampowered.com/app/1299890/Zombie_Slayer/' className='content-project'>
                        <img className="project-img" src='/static/images/zombie.png' alt='Zombie Slayer Icon' />
                        <p className="project-title">Zombie Slayer</p>
                        <hr />
                        <p className="project-desc">Virtual Reality app made in Unity published through Steamworks.</p>
                    </a>
                    <a href='https://github.com/TreBomb' className='content-project'>
                        <img className="project-img" src='/static/images/github.png' alt='Git Hub' />
                        <p className="project-title">GitHub</p>
                        <hr />
                        <p className="project-desc">View my personal GitHub account.</p>
                    </a>
                </div>
            </div>
        </div>
        )
    }
  }
  
  export default SingleContent;