import React, { useEffect, useState } from 'react';
import { ApiHandler } from '../component/ApiHandler';
import '../css/FindById.css'

const FindById = ({Id}) => {
    const [details, setDetails] = useState(null); 
    const [error, setError] = useState('');
    const [isSearchDetails, setIsSearchDetails] = useState(false);

    const searchHandler = async (id) => {
        try {
            setError('');
            const data = await ApiHandler(id);

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

    useEffect(() => {
        if(Id){
            searchHandler(Id)
        }
    },[Id])

    return (
        <div className='MVPage'>
            
            <h1 className='error-displays'>{error}</h1>

            <div className="details-display">
                {details ? (
                    <div className="single-detail" key={details.imdbID}>
                        <div className="MPoster">
                            <img src={details.Poster} alt={details.Title} />
                        </div>

                        <div className='MAll-info'>
                            <div className="title-rating">
                                <h1>{details.Title}</h1>
                            </div>

                            <div className='Movie-rating-section'>
                                <h2>Ratings</h2>
                                <div className="rating-three">
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
                                <div className="title-release">
                                    <h2>Movie Data</h2>
                                </div>
                                <div className="info-release">
                                    <p>Release Date : {details.Released}</p>
                                    <p>IMDB Rating : {details.Rated}</p>
                                    <p>RunTime : {details.Runtime}</p>
                                </div>
                            </div>

                            <div className="Mcast">
                                <div className='title-cast'>
                                    <h2>Cast</h2>
                                </div>
                                <div className='info-cast'>
                                    <p><strong>Actors : </strong>{details.Actors}</p>
                                    <p><strong>Writer : </strong>{details.Writer}</p>
                                    <p><strong>Director : </strong>{details.Director}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    isSearchDetails && <h2>No movie details available. Try searching for another movie.</h2>
                )}
            </div>
        </div>
    );
};

export default FindById;
