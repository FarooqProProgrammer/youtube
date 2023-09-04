import React from 'react'
import {youtubeData } from "../../../../utils/data"
import TruncateText from '../../../../common/TruncateText'
import { useNavigate } from 'react-router-dom'


export default function Videos() {
  const navigate = useNavigate();

  return (
    <div className="w-full py-2 lg:px-2 md:px-2 sm:px-0 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 placed-items-center overflow-y-auto gap-2">
        

    {
      youtubeData?.map((item,index)=>{return(
        <div key={index} onClick={()=>navigate(`/watchvideo/${item.title}`)} className="w-full h-[400px] border border-gray-400 rounded-md relative cursor-pointer">
          <div className="w-full h-[250px] rounded-md">
            <img src={item.thumbnails.high.url} className="w-full h-full rounded-md" />
          </div>
          <div className='w-full py-2 px-2 flex flex-col justify-start items-start '>
            <TruncateText text={item.title}  customCSS={'text-white'} />
            <p className='text-[#ff0000]'>{item?.channelTitle}</p>
          </div>
          <div className='w-full py-2 px-2 flex flex-col justify-start items-start gap-3'>
            <TruncateText text={item.publishedAt}  customCSS={'text-white'} />
          </div>
          
        </div>
      )})
    }
   


    </div>
  )
}
