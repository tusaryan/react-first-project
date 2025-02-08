import { createRoot } from 'react-dom/client'
import './index.css'
// import reactImg from './assets/react.svg';
//since it is coming from public folder so we don't need to pass the whole path
import viteImg from '/vite.svg';
import rightArrow from './assets/right-arrow.svg'
// good practice to create seperate css file for each component
import './profile.css'

const rootElement = document.getElementById('root');
const rootDom = createRoot(rootElement);

rootDom.render(
  <> 
    <header>
      {/* when source is public folder then do this */}
      {/* <img src="/vite.svg" alt="Vite Image" /> */}

      {/* Path is correct but still we are not getting the image from below code reason is 
      except public folder everthing it optimized, size is reduced and a hash is assigned after 
      there name so we directly can't access it after it is build to dist folder,
      to access it, first we have to import it */}
      {/* <img src="./assets/react.svg" alt="Vite Image" /> */}

      {/* now we can access it */}
      {/* <img src={reactImg} alt="Vite Image" /> */}

      <img src={viteImg} style={{width: '4rem', height: '4rem'}} alt="Vite Image" />
      <h1 className='heading'>Hi, I am a React <span>Developer</span></h1>
    </header>

    {/* used to display main content */}
    <main>
      <h2 className='name-heading'>My name is Aryan</h2>
      <ol>
        <li>I like Vite, Webpack not so much</li>
        <li>Let&apos;s make the web interactive and awesome</li>
        <li>Building cool user interfaces with React</li>
      </ol>
      <a href="#" className="hire-me-buttom">
        <span>Hire Me</span>
        <img src={rightArrow} alt="Right Arrow" />
      </a>
    </main>

    <footer style={{marginTop: '2rem'}}>
      {/* &copy; */}
      <span style={{color: "grey"}}>© All rights reserved</span>
    </footer>
  </>
)
