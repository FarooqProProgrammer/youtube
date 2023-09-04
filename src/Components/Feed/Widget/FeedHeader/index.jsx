import { IconButton } from '@mui/joy'
import React, { useState } from 'react'
import { AiOutlineSearch, AiOutlineUser, AiOutlineVideoCamera } from 'react-icons/ai'
import { MdSettingsVoice } from "react-icons/md"
import { useMediaQuery } from 'react-responsive'
import { youtubeData } from '../../../../utils/data'
import { useNavigate } from 'react-router-dom'

export default function FeedHeader() {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1000px)' })
    const [showSearchBar,setShowSearchBar] = useState(false);
    const [filterValue,setFilterValue] = useState('');
    const navigate = useNavigate();

    

    const HandleSearch = (e) => {
        console.log(e.target.value)
        setFilterValue(e.target.value)


        if (e.target.value.length > 0) {
            setShowSearchBar(true)
        }
        else  {
            setShowSearchBar(false)
        }
    }


    return (
        <>
        <div className='w-full fixed py-2 flex justify-between items-center px-2 border border-b border-gray-100 relative' >

            <div className='flex lg:w-[50%] md:w-full  sm:w-full py-1 px-1 bg-white outline-none rounded-md'>
                <IconButton>
                    <AiOutlineSearch size={20} />
                </IconButton>

                <input type='text' onChange={HandleSearch} placeholder='Enter Your Video' className='flex-1 outline-none rounded-md px-3' />




            </div>
            {
                showSearchBar && <div className=' lg:w-[50%] md:w-full  sm:w-full rounded-md py-2  max-h-[300px] absolute z-50 bg-white top-[70px] overflow-y-auto'>

             
                {
                    youtubeData?.filter(item => item.title.includes(filterValue))?.map((item,index)=>{return(
                        <div onClick={()=>{
                            setFilterValue('')
                            navigate(`watchvideo/${item.title}`)
                            setShowSearchBar(false)
                            
                            } }
                            key={index}
                             className='w-full border-b border-gray-400 py-2 flex justify-start items-start px-2 hover:bg-gray-200 cursor-pointer'>
                        <h4>{item.title}</h4>
                        </div>
                    )})
                }
           


        </div>
            }
            
            {
                !isTabletOrMobile && <div>
                    <IconButton>
                        <MdSettingsVoice color='#ff0000' size={20} />
                    </IconButton>
                    <IconButton>
                        <AiOutlineVideoCamera color='#ff0000' size={20} />
                    </IconButton>
                    <IconButton>
                        <AiOutlineUser color='#ff0000' size={20} />
                    </IconButton>

                </div>
            }


        </div>

        </>
    )
}
