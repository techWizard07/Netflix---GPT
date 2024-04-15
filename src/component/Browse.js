import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from'./SecondaryContainer'
import usePopular from '../hooks/usePopular'
import useUpcoming from '../hooks/useUpcoming'
import useTopRated from '../hooks/useTopRated'
import GptSearch from './GptSearchPageGptSearchPage'
import { useSelector } from 'react-redux'

function Browse() {
  
  useNowPlayingMovies()
  usePopular()
  useTopRated()
  useUpcoming()

  const gptValue=useSelector(store=>store.gpt.showGptSearch)
  return (
    <div>
      <Header/>
      {gptValue ? <GptSearch/>: 
      <>
      <MainContainer/>
      <SecondaryContainer/>
      </>}

    </div>
  )
}

export default Browse