import './App.css';
import Game from './components/Game';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Game m={76} n={160}/>
      </header>
    </div>
  );
}

export default App;
