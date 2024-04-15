import React from 'react'
import { useSelector } from 'react-redux'
import {language} from '../utils/langConstants'

function GptSearchBar() {
  const lang=useSelector(store=>store.config.lang)
  return (
    <div className='pt-[10%] flex justify-center'>
        <form action="" className="w-1/2 grid grid-cols-12 bg-black">
            <input type="text" className=" p-4 m-4 col-span-9" placeholder={language[lang].placeholder} />
            <button className="py-2 px-4 bg-red-700 text-white rounded-md col-span-3 m-4">{language[lang].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar