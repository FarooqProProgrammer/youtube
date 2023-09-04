import { AiOutlineHistory, AiOutlineHome, AiOutlineLike, AiOutlineVideoCamera } from "react-icons/ai";
import { MdOutlineSubscriptions } from "react-icons/md"

export const SidebarData = [
    {
        icon: <AiOutlineHome color="#ff0000" size={25} />,
        text: 'Home',
        href: '/',
    },
    {
        icon: <AiOutlineVideoCamera color="#ff0000" size={25} />,
        text: 'Shorts',
        href: '/shorts',
    },
 
    {
        icon: <AiOutlineHistory color="#ff0000" size={25} />,
        text: 'History',
        href: '/history',
    },
    {
        icon: <AiOutlineVideoCamera color="#ff0000" size={25} />,
        text: 'Videos',
        href: '/videos',
    },
    {
        icon: <AiOutlineLike color="#ff0000" size={25} />,
        text: 'Like',
        href: '/like',
    },
]