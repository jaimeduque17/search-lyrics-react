import React, { useState, useEffect, Fragment } from 'react';
import Form from './components/Form';
import Song from './components/Song';
import Information from './components/Information';
import axios from 'axios';

function App() {

	// useState with 3 states
	const [artist, addArtist] = useState('');
	const [lyric, addLyric] = useState([]);
	const [info, addInfo] = useState({});

	// method to consult the song lyrics API
	const consultAPILyric = async (search) => {
		const { artist, song } = search;
		const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;

		// consult API
		const result = await axios(url);

		// store the artist
		addArtist(artist);

		// sotre lyric in the state
		addLyric(result.data.lyrics);
	}

	// method to consult the artist information API
	const consultAPIInfo = async () => {
		if (artist) {
			const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

			// consult API
			const result = await axios(url);

			addInfo(result.data.artists[0]);
		}
	}

	useEffect(
		() => {
			consultAPIInfo();
		}, [artist]
	)

	return (
		<Fragment>
			<Form
				consultAPILyric={consultAPILyric}
			/>
			<div className="container mt-5">
				<div className="row">
					<div className="col-md-6">
						<Information
							info={info}
						/>
					</div>
					<div className="col-md-6">
						<Song
							lyric={lyric}
						/>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default App;