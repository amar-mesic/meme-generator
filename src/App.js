import logo from './res/Troll Face.svg';
import './App.css';
import './styles/header.css'
import Main from './components/Main';

function Header() {
  return(
    <header className='header'>
      <img src={logo} alt='logo'/>
      <h2>Meme Generator</h2>
    </header>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
