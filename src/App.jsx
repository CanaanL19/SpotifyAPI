
import './App.css';
import {SearchBar} from "./Components/SearchBar/SearchBar";
import {Playlist} from "./Components/Playlist/Playlist";
import { SearchResults } from './Components/SearchResults/SearchResults';
import exampleList from './Components/testList';

function App() {
  return (
    <div className="App">
      <h1 id="title">Jammming</h1>
      <header className="App-header">
      <div className="SearchBox">
        <SearchBar details ={exampleList}/>
      </div>
      <div className="PlayBox">
        <Playlist />
      </div>
      <div className = "ResultBox">
        <SearchResults />
      </div>


      </header> 
  </div>
  );
}

export default App;
