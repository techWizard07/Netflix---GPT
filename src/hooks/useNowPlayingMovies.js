import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';
import { OPTIONS } from '../utils/constants';

function useNowPlayingMovies() {
  
    const dispatch=useDispatch()
      const fetchMovies=async ()=>{
        const movie=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',OPTIONS);
        const movieData= await movie.json()
        dispatch(addNowPlayingMovies(movieData.results))

      }
    
      useEffect(()=>{
        fetchMovies()
      },[])
}

export default useNowPlayingMovies


