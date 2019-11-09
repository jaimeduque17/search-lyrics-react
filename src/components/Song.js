import React, { Fragment } from 'react';

function Song({ lyric }) {

    if(lyric.length === 0) return null;

    return (
        <Fragment>
            <h2>Song Lyric</h2>
            < p className="lyric">{lyric}</p>
        </Fragment>
    )
}

export default Song;