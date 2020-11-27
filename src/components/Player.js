import React from 'react'

function Player(props) {
    return (
        <div className="c-player">
            <audio>Playing now</audio>
            <p><strong>Next up:</strong> {props.nextSong.title} by {props.nextSong.artist}</p>
        </div>
    )
}

export default Player;
