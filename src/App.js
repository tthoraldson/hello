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
        <h2>Theresa Thoraldson - Software Engineer</h2>
        <p>I'm currently a Software Engineering Manager at <a href='https://www.serko.com/'>Serko</a>, working on modernizing the corporate expensing experience. I have 5 years of professional software engineering experience.</p>
        <p>I'm also going through <a href='https://www.eacambridge.org/technical-alignment-curriculum'>EA Cambridge AI Safety Fellowship</a>.</p>
        {/* <p>Have a look at my <a href='www.mycoolresume.com'>resume</a> if you'd like to know more.</p> */}
        <h2>Let's keep in touch.</h2>
        <div id="icons">
        <a href="mailto:theresa.thoraldson@gmail.com"><FontAwesomeIcon icon={["fa", "envelope"]} size="20px"/></a>
          <a href="https://twitter.com/tthoraldson"><FontAwesomeIcon icon={["fab", "twitter"]} /></a>
          <a href="https://www.linkedin.com/in/theresathoraldson/"><FontAwesomeIcon icon={["fab", "linkedin"]} /></a>
          <a href="https://github.com/tthoraldson"><FontAwesomeIcon icon={["fab", "github"]} /></a>
          <a href="https://www.kaggle.com/tthoraldson/"><FontAwesomeIcon icon={["fab", "kaggle"]} /></a>
        </div>
      </header>
    </div>
  );
}

export default App;
