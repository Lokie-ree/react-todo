import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-blue-600">
      <div className="flex-1 text-white">
        <a className="btn btn-ghost text-xl">Randall's To-Do List</a>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost mr-3">
          <input type="checkbox" value="light" className="toggle theme-controller" />
        </button>
      </div>
    </div>
  )
}

export default Navbar