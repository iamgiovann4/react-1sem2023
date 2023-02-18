import logo from './logo.svg'; //svg ou img importa com from
import './App.css'; //arquivos css importam sem o from
import MainMenu from './components/MainMenu'; //arquivos js importam com from sem .js
import Header from './components/Header'; //arquivos js importam com from sem .js

function App() { //forma tradicional de montar função
  return (
    <div className="App">
      <div className="App-header">
        <Header/>
        <MainMenu/>
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <p className='Nome-react'>
            {/* Edit <code>src/App.js</code> and save to reload. */}
            "I am React !!!"
          </p>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
  );
}

export default App; //Para poder ser usado nas de mais rotas