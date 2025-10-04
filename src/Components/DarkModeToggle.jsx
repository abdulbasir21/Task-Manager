import React from 'react'
import { FiSun, FiMoon } from "react-icons/fi";
function DarkModeToggle({toggleMode,darkMode}) {
  return (
  <>
   <button
  className="absolute top-5 right-8 px-4 py-2 bg-gray-300 dark:bg-gray-700 dark:text-white rounded-full hover:bg-gray-400 dark:hover:bg-gray-600"
  onClick={toggleMode}
>
  {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
</button>
  
  </>
  )
}

export default DarkModeToggle