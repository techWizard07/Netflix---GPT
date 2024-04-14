import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addUpcomingMovies } from '../utils/movieSlice';
import { OPTIONS } from '../utils/constants';

function useUpcoming() {
  
    const dispatch=useDispatch()
      const fetchMovies=async ()=>{
        const movie=await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1',OPTIONS);
        const movieData= await movie.json()
        dispatch(addUpcomingMovies(movieData.results))

      }
    
      useEffect(()=>{
        fetchMovies()
      },[])
}

export default useUpcoming


