import background from './images/background.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={background} className="background" />
      <button className="start-buton"></button>
    </div>
  );
}

export default App;
