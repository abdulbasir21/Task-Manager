import React from 'react'

function TodoItem({todos,handleDelete,handleToggle}) {
  return (
   <>
     {/* Todo list */}
      <ul className="w-full max-w-md space-y-2">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex items-center justify-between bg-white p-2 rounded shadow"
          >
            {/* Todo text */}
            <span
              className={`flex-1 ${todo.completed ? "line-through text-gray-400" : ""} overflow-x-auto`}
            >
              {todo.text}
            </span>

            {/* Actions */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggle(index)}
                className="w-4 h-4"
              />
              <button
                onClick={() => handleDelete(index)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
   
   
   </>
  )
}

export default TodoItem