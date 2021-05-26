import React from 'react';

const MovieList = (props) => {
    const WatchlistComponent = props.watchlistComponent;
    return(
        <>
            {props.movies.map((movie, index)=> 
            <div
             className='image-container d-flex justify-content-start m-3'>
                <img src={movie.Poster} alt='movie'></img>
                <div onClick={() => props.handleWatchlistClick(movie)} className="overlay d-flex align-items-center justify-content-center">
                    <WatchlistComponent/>
                </div>
            </div>)}
        </>
    );
};

export default MovieList;