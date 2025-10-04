import React from 'react'

function TodoInput({inpValue,handleChange,handleAdd}) {
  return (
   <>
   
   <div className="flex mb-6 w-full max-w-md">
        <input
          type="text"
          placeholder="Enter Todo"
          value={inpValue}
          onChange={handleChange}
          className="flex-1 border border-gray-300 p-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400 "
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 rounded-r-md hover:bg-blue-600"
        >
          Add
        </button>
      </div>
   </>
  )
}

export default TodoInput