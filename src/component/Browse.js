import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from'./SecondaryContainer'
import usePopular from '../hooks/usePopular'
import useUpcoming from '../hooks/useUpcoming'
import useTopRated from '../hooks/useTopRated'
function Browse() {
  
  useNowPlayingMovies()
  usePopular()
  useTopRated()
  useUpcoming()

  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>

    </div>
  )
}

export default Browse