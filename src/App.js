import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faGithub, faKaggle, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './App.css';

library.add(faEnvelope, faTwitter, faGithub, faKaggle, faLinkedin)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello! It was nice to meet you.</h1>
        <h2>Theresa Thoraldson - Machine Learning Egnineer</h2>
        <p><i><a href='https://calendly.com/tthoraldson'>Let's have a call!</a></i> I would love to keep in contact.</p>
        <p>I'm currently a Senior Software Engineer at <a href='https://www.rhythmsystems.com/'>Rhythm Systems</a>. Previously a Software Engineering Manager & Tech Lead at <a href='https://www.serko.com/'>Serko</a>. I have 7 years of professional software engineering experience.</p>
        <p>I'm also studying for a BSc in Computer Science at the <a href="https://www.london.ac.uk/">University of London</a> (2024 est).</p>
        <p>I recently completed a Machine Learning Engineering bootcamp at <a href='https://fourthbrain.ai/'>Fourth Brain</a> and the <a href='https://fullstackdeeplearning.com/'>Full Stack Deep Learning</a> course.</p>
        <p>My main interests are Privacy Preserving ML, AI Safety, and Computational Creativity.</p>
        <p>Have a look at my <a href='https://github.com/tthoraldson/resume/blob/master/TheresaThoraldson_CV.pdf'>resume</a> if you'd like to know more.</p>
        <h2>Let's keep in touch.</h2>
        <div id="icons">
          <a href="mailto:theresa.thoraldson@gmail.com"><FontAwesomeIcon icon={["fa", "envelope"]} size="20px"/></a>
          <a href="https://twitter.com/tthoraldson"><FontAwesomeIcon icon={["fab", "twitter"]} /></a>
          <a href="https://www.linkedin.com/in/theresathoraldson/"><FontAwesomeIcon icon={["fab", "linkedin"]} /></a>
          <a href="https://github.com/tthoraldson"><FontAwesomeIcon icon={["fab", "github"]} /></a>
        </div>
      </header>
    </div>
  );
}

export default App;
