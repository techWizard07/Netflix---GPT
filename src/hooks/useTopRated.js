import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addTopRatedMovies } from '../utils/movieSlice';
import { OPTIONS } from '../utils/constants';

function useTopRated() {
  
    const dispatch=useDispatch()
      const fetchMovies=async ()=>{
        const movie=await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1',OPTIONS);
        const movieData= await movie.json()
        dispatch(addTopRatedMovies(movieData.results))

      }
    
      useEffect(()=>{
        fetchMovies()
      },[])
}

export default useTopRated


