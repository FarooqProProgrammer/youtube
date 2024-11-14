import { useState, useEffect } from "react";
import { CiDark } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

function DarkButton() {
  // Check if there's a saved dark mode preference in localStorage
  const getSavedDarkMode = () => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("darkMode");
      return savedMode ? JSON.parse(savedMode) : false; // Default to false if no preference is saved
    }
    return false;
  };

  const [isDarkMode, setIsDarkMode] = useState(getSavedDarkMode());

  // Effect to update the class on the <html> element when the dark mode state changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Store the dark mode state in localStorage
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  // Toggle dark mode manually (e.g., on button click)
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div
      onClick={toggleDarkMode}
      className="absolute w-[60px] h-[60px] flex justify-center items-center bg-white shadow-xl border border-gray-300 rounded-xl bottom-5 right-5 cursor-pointer"
    >
      {
        isDarkMode ? (
          <CiDark size={30} className="dark:text-black" />
        ) : (
          <MdDarkMode size={30} className="dark:text-black" />
        )
      }
    </div>
  );
}

export default DarkButton;
