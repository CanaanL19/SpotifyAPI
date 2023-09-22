import React from "react";
import './Track.css';


function Track({song}) {
    return(
        <div className="TrackInfo">
            <h2 id="TrackName">{song.name}</h2>
            <p id="TrackDetails">{song.artist} | {song.album}</p>
        </div>
    );
}

export default Track;