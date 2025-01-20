import React, { useState } from 'react';
import { ApiHandler } from '../component/ApiHandler';

const MVPage = () => {
    const [mName, setMName] = useState('');
    const [details, setDetails] = useState(null); 
    const [error, setError] = useState('');
    const [isSearchDetails, setIsSearchDetails] = useState(false);

    const searchHandler = async () => {
        try {
            setError('');
            const data = await ApiHandler(mName);

            if (data.Response === 'True') {
                setDetails(data); 
                setIsSearchDetails(true);
            } else {
                setError('That movie details is not available.');
                setDetails(null);
                setIsSearchDetails(false);
            }
        } catch (err) {
            setError('An error occurred while fetching movie details.');
            console.log('catch block error:', err.message);
            setIsSearchDetails(false);
        }
    };

    return (
        <div className='MVPage'>
            <h1>Find Movie Details by Entering Name</h1>

            <div className="movieSearch">
                <input
                    type="text"
                    value={mName}
                    onChange={(e) => setMName(e.target.value)}
                    placeholder="Enter Movie Name ..."
                />
                <button onClick={searchHandler}>Search</button>
            </div>

            {error && <h2>There is an error: {error}</h2>}

            <div className="details-display">
                {details ? (
                    <div className="single-detail" key={details.imdbID}>
                        <div className="Mintro">
                            <img src={details.Poster} alt={details.Title} />
                            <div className="title-rating">
                                <h2>{details.Title}</h2>
                                {details.Ratings.map((rating, index) => (
                                    <div className="rat" key={index}>
                                        <p>
                                            {rating.Source} : {rating.Value}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="Mrelese-info">
                            <p>{details.Released}</p>
                            <p>{details.Rated}</p>
                            <p>{details.Runtime}</p>
                        </div>

                        <div className="Mcast">
                            <p>{details.Actors}</p>
                            <p>{details.Writer}</p>
                            <p>{details.Director}</p>
                        </div>
                    </div>
                ) : (
                    isSearchDetails && <h2>No movie details available. Try searching for another movie.</h2>
                )}
            </div>
        </div>
    );
};

export default MVPage;
