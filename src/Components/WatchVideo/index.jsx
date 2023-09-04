import React, { useCallback, useEffect,useState } from 'react'
import ReactPlayer from 'react-player';
import { useNavigate, useParams } from 'react-router-dom'
import {youtubeData} from "../../utils/data"
import TruncateText from '../../common/TruncateText';
import { useMediaQuery } from 'react-responsive'


export default function WatchVideo() {

    const {id} = useParams();
    const [videoUrl,setVideoUrl] = useState();
    const navigate = useNavigate();
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1000px)' })


    useEffect(()=>{
        console.log(id)
        const video = youtubeData.filter(item => item.title == id);
        console.log(video[0])
        setVideoUrl(video[0])

        window.scrollTo(0,0)
    },[id])

    

  return (
    <div className='w-full grid lg:grid-cols-3 md:grid-cols sm:grid-cols-1'>
        <div className='px-2 col-span-2'>
              <ReactPlayer url={videoUrl?.url} style={{width:'100%'}}/>
              <div className='w-full py-2 px-2 flex flex-col justify-start items-start gap-2'>
                <p className='text-white'><span className='text-[#ff0000] text-2xl'>Title:</span> {videoUrl?.title}</p>
                <p className='text-white'><span className='text-[#ff0000] text-2xl mr-3'>Channel:</span> {videoUrl?.channelTitle}</p>
                <p className='text-white'>
                  <span className='text-[#ff0000] text-2xl mr-3 block'>Description:</span> {videoUrl?.description}</p>

              </div>
              <div className='w-full px-2 my-1'>
                <h2 className='text-[#ff0000] text-2xl'>Tags</h2>
              </div>
              <div className='w-full py-2 flex flex-wrap gap-2 rounded-md'>
               
                  {videoUrl?.tags.map((item,index)=>{return(
                     <div key={index} className='px-2 py-2 bg-white rounded-md'>
                    <p>{item}</p>
                    </div>
                  )})}
               
              </div>
        </div>
        {
          !isTabletOrMobile &&   <div className='w-full px-3 py-2 overflow-y-auto rounded-md'>
          {
            youtubeData.map((item,index)=>{return(
              <div key={index} onClick={()=>{ 
                navigate(`/watchvideo/${item.title}`)
                  window.scrollTo(0,0)
              }}
               className='w-full h-[400px] cursor-pointer relative border border-gray-200 mb-2 rounded-md'>
                  <div className='w-full h-[230px]'>
                      <img src={item.thumbnails.high.url} />
                  </div>
                  <div className='w-full py-2 px-2'>
                    <TruncateText text={item.title} maxWords={10} customCSS={'text-white'} />
                    <p className='text-[#ff0000]'>{item?.channelTitle}</p>
                  </div>
                  <div className='w-full py-2 px-2 flex flex-col justify-start items-start gap-3'>
            <TruncateText text={item.publishedAt}  customCSS={'text-white'} />
          </div>
              </div>
            )})
          }
                
        </div>
        }
      
      
    </div>
  )
}
