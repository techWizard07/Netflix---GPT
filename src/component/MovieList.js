import React from 'react'
import MovieCard from './MovieCard'

function MovieList({title,movies}) {
  return (
    <div className="p-4">
            <h1 className='pb-2 text-4xl '>{title}</h1>
    
        <div  className="flex overflow-x-scroll">
            {movies.map(movie=><MovieCard key={movie.id} photoPath={movie?.poster_path}/>)}
        </div>
    </div>
    
  )
}

export default MovieList