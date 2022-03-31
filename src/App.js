import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello! It was nice to meet you.</h1>
        <h2>Theresa Thoraldson - Software Engineer</h2>
        <p>Cool stuff about me!</p>
        <p>Have a look at my <a href='www.mycoolresume.com'>resume</a> if you'd like to know more.</p>
        <h2>Let's keep in touch.</h2>
        <div id="icons">
        <FontAwesomeIcon icon="fa-brands fa-github" />
        </div>
      </header>
    </div>
  );
}

export default App;
