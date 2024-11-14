import { DarkLogo } from "../../assets";
import { FiMenu } from "react-icons/fi";
import { Input } from "../ui/input";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-2 bg-[#212121]">
      <div className="flex items-center ">
        <FiMenu size={30} className="cursor-pointer" />
        <img src={DarkLogo} alt="" />
      </div>
      <div className="flex items-center gap-2">
        <div className="flex md:w-[426px] rounded-md border border-[#303030] items-center dark:bg-[#303030] dark:p-[1px]">
          <Input
            placeholder="search"
            className="dark:bg-[#121212]  py-3  dark:placeholder:text-white flex-2 border-none rounded-none dark:rounded-md  focus:outline-none focus:border-none"
          />
          <div className="px-3">
            <CiSearch />
          </div>
        </div>
        <div className="w-[40px] cursor-pointer flex justify-center items-center h-[40px] rounded-full bg-black">
          <FaMicrophone size={16} className="dark:text-white" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 13H11V16H9V13H6V11H9V8H11V11H14V13ZM17 6H3V18H17V11.61L21 13.44V8.56L17 10.39V6ZM18 5V8.83L22 7V15L18 13.17V19H2V5H18Z"
            fill="white"
          />
        </svg>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 4V8H20V4H16ZM19 7H17V5H19V7ZM16 10V14H20V10H16ZM19 13H17V11H19V13ZM10 4V8H14V4H10ZM13 7H11V5H13V7ZM10 10V14H14V10H10ZM13 13H11V11H13V13ZM16 16V20H20V16H16ZM19 19H17V17H19V19ZM10 16V20H14V16H10ZM13 19H11V17H13V19ZM4 4V8H8V4H4ZM7 7H5V5H7V7ZM4 10V14H8V10H4ZM7 13H5V11H7V13ZM4 16V20H8V16H4ZM7 19H5V17H7V19Z"
            fill="white"
          />
        </svg>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 20H14C14 21.1 13.1 22 12 22C10.9 22 10 21.1 10 20ZM20 17.35V19H4V17.35L6 15.47V10.32C6 7.40001 7.56 5.10001 10 4.34001V3.96001C10 2.54001 11.49 1.46001 12.99 2.20001C13.64 2.52001 14 3.23001 14 3.96001V4.35001C16.44 5.10001 18 7.41001 18 10.33V15.48L20 17.35ZM19 17.77L17 15.89V10.42C17 7.95001 15.81 6.06001 13.87 5.32001C12.61 4.79001 11.23 4.82001 10.03 5.35001C8.15 6.11001 7 7.99001 7 10.42V15.89L5 17.77V18H19V17.77Z"
            fill="white"
          />
        </svg>
        <Avatar className="w-[30px] h-[30px]">
          <AvatarImage src="https://github.com/shadcn.png"  />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Header;
