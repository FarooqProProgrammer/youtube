import { Box, IconButton, Typography } from '@mui/joy'
import React from 'react'
import { AiOutlineMenu, AiOutlineYoutube } from "react-icons/ai"
import { SidebarData } from '../../utils/Sidebar'
import { useMediaQuery } from 'react-responsive'
import { Link, useNavigate } from 'react-router-dom'


export default function Sidebar() {


    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1000px)' })

    return (
        <div className={` ${isTabletOrMobile ? 'w-[18%]' : 'flex-[0.2]' }  border-r-2 border-gray-500`}>
            <div className='w-full py-2 flex justify-between items-center px-2'>
                <span className='text-white'>
                    <IconButton  cursor="pointer">
                        <AiOutlineMenu size={25} color='#ff0000' />
                    </IconButton>

                </span>
                {
                    !isTabletOrMobile  &&      <Link to='/' >   <Typography   fontSize={{sx:25},{md:22}} display={'flex'} justifyContent={'center'} alignItems={'center'} gap={1} >
                    <IconButton> <AiOutlineYoutube color='#ff0000' size={25} /></IconButton>
                   
                         <span className='text-[#ff0000]'>Youtube</span>   
                     </Typography> </Link>
                }
       
            </div>
            <div className='w-full py-2 flex flex-col justify-start items-start gap-2  lg:px-2 md:px-0 sm:px-0'>
                {SidebarData?.map((item,index)=>{
                    return(
                        <Box key={index} sx={{paddingRight:2,paddingLeft:2, paddingBottom:2,paddingTop:2,}} display={'flex'} flexDirection={isTabletOrMobile?'column':'row'} justifyContent={'space-between'} alignItems={'center'} gap={1}>
                            {item.icon}
                            <p className={` text-[#fff] ${isTabletOrMobile && 'text-xs'}`}>{item.text}</p>
                        </Box>
                    )
                })}
            </div>
        </div>
    )
}
