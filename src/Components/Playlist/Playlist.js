import React from "react";
import './Playlist.css';


export function Playlist() {
    
    return(
        <div className="playbackground">
            <input id="listTitle" type="text" placeholder="Playlist Name"/>
            <button type="button" id="saveList" >Save To Spotify</button>

        </div>

    );

};

