
import './App.css';
import {SearchBar} from "./Components/SearchBar/SearchBar";
import {Playlist} from "./Components/Playlist/Playlist";


function App() {
  return (
    <div className="App">
      <h1 id="title">Jammming</h1>
      <header className="App-header">
      <div className="SearchBox">
        <SearchBar />
      </div>
      <div className="PlayBox">
        <Playlist />
      </div>


      </header> 
  </div>
  );
}

export default App;
