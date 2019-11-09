import React, { useState, useEffect, Fragment } from 'react';

function Form({consultAPILyric}) {

    const [search, addSearch] = useState({
        artist: '',
        song: ''
    })

    // function to update the state of the inputs
    // pass event (e) to access values
    const updateState = (e) => {
        addSearch({
            ...search,
            [e.target.name]: e.target.value
        });
    }

    // submit form
    const sendInformation = (e) => {
        e.preventDefault();

        // pass state local of the form (search)
        consultAPILyric(search);
    }
    

    return (
        <div className="bg-info">
            <div className="container">
                <div className="row">
                    <form
                        onSubmit={sendInformation}
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2">
                        <fieldset>
                            <legend className="text-center">Search Song Lyrics</legend>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artist</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="artist"
                                            placeholder="Artist Name"
                                            onChange={updateState}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Canción</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="song"
                                            placeholder="Song Name"
                                            onChange={updateState}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary float-right">Search</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form;