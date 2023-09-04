import React from 'react'
import FeedHeader from './Widget/FeedHeader'
import Videos from "./Widget/Videos"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WatchVideo from '../WatchVideo'

export default function Feed() {
  return (
    <div className='lg:flex-[0.8] md:w-full sm:w-full mr-1 overflow-y-auto overflow-x-hidden'>
        <FeedHeader />
        <div className='w-full py-2 px-2'>
            <h3 className='text-[#ff0000] lg:text-3xl md:text-xl sm:text-md'>Videos</h3>
        </div>
        
        <Routes>
            <Route path="/" element={ <Videos />} />
            <Route path="/watchvideo/:id" element={ <WatchVideo />} />
          
        </Routes>
      
       
    </div>
  )
}
