import logo from './logo.svg';
import Playlist from './components/playlist';
import MostPlayed from './components/mostPlayed';
import './App.css';
import './style.css'
function App() {
  return (
    <div className="App">
        <Playlist/>
        <MostPlayed/>
        
    </div>
  );
}

export default App;
