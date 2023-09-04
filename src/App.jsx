import React from 'react'
import Sidebar from './Components/Sidebar'
import Feed from './Components/Feed'
import { BrowserRouter } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>  
     <div className='App flex'>
      <Sidebar />
      <Feed />
    </div>
    </BrowserRouter>
 
  )
}
