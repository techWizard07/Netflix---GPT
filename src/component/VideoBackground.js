import React from 'react'
import useTrailerVideo from '../hooks/useTrailerVideo'
import { useSelector } from 'react-redux'

function VideoBackground({movieId}) {
  const trailerKey=useSelector(store=>store.movies?.trailerVideo)
  useTrailerVideo(movieId)
  return (
    <div className='w-screen h-screen'>
      <iframe 
      className='w-screen aspect-video'
        src={`https://www.youtube.com/embed/${trailerKey?.key}?playlist=${trailerKey?.key}&loop=1&autoplay=1&mute=1`} 
        title="YouTube video player" 

      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullCcreen>
      </iframe>
    </div>
  )
}

export default VideoBackground