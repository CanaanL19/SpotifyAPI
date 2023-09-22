import React from "react";
import Track from "../Track/Track";


function TrackList({filteredSongs}) {
    const filtered = filteredSongs.map(song => <Track key={song.id} song={song} />);
    return(
        <div>
            {filtered}
        </div>
    );

    const handleScroll = (props) =>{
        return(
            <div style={{overflowY: 'scroll', height:'70vh'}}>
                {props.children}
            </div>
    
        );
    }
}

export default TrackList;
