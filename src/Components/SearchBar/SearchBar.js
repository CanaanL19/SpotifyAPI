import React, {useState} from "react";
import './SearchBar.css';
import TrackList from "../Tracklist/Tracklist";




export function SearchBar({details}) {
    const [input, setInput] = useState('');
    const [searchShow, setSearchShow] = useState(false);

    
    const filteredSongs = details.filter(
        song => {
            return (
                song.name
                .toLowerCase()
                .includes(input.toLowerCase())
            );
        }
    );
    
    const handleChange = (e) => {
        setInput(e.target.value);
        if(e.target.value===""){
            setSearchShow(false);
        }
        else{
            setSearchShow(true);
        }
        
    
    };

    const handleClick = (e) => {
        
        setSearchShow(input);
        
    };


    function trackList() {
        if (searchShow) {
            return(
                <handleScroll>
                    <TrackList filteredSongs ={filteredSongs} />
                </handleScroll>
            );
        }
    }

   




    return(
      <section>
        <div className="search-Input">
            <input type="search" placeholder="Enter song title here.." value={input}
            onChange={handleChange}/>
            <button onclick={handleClick}>Search</button>
            {trackList()}
        </div>
      </section>
    );
    }

