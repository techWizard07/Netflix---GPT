import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

function SecondaryContainer() {
  const movies=useSelector(store=>store.movies)

  return (
    <div className='bg-black text-white '>
      <div className="-mt-36 relative">
      {movies.nowPlayingMovies &&<MovieList title={"NowPlaying"} movies={movies?.nowPlayingMovies} />}
      {movies.popularMovies &&<MovieList title={"Popular"} movies={movies?.popularMovies} />}
      {movies.topRatedMovies &&<MovieList title={"Top-Rated"} movies={movies?.topRatedMovies} />}
      {movies.upcomingMovies &&<MovieList title={"Upcoming"} movies={movies?.upcomingMovies} />}
      </div>
  </div>
  )
}

export default SecondaryContainer 