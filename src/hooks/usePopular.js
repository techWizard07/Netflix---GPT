import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../utils/movieSlice';
import { OPTIONS } from '../utils/constants';

function usePopular() {
  
    const dispatch=useDispatch()
      const fetchMovies=async ()=>{
        const movie=await fetch('https://api.themoviedb.org/3/movie/popular?page=1',OPTIONS);
        const movieData= await movie.json()
        dispatch(addPopularMovies(movieData.results))

      }
    
      useEffect(()=>{
        fetchMovies()
      },[])
}

export default usePopular


