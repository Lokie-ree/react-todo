'use client'

import React from 'react'
import { BsSun, BsMoon } from 'react-icons/bs'

const Header = () => {

  const toggleTheme = () => {
    const html = document.documentElement;
    html.setAttribute('data-theme', 
      html.getAttribute('data-theme') === 'acid' ? 'sunset': 'acid');
  }

  return (
    <>
      <header className="flex justify-between items-center p-4 bg-accent-content">
        <h1 className="text-xl text-accent font-bold">Randall's To-Do App</h1>
        <button
          className="btn btn-ghost bg-accent-content text-accent rounded-full text-xl"
          onClick={toggleTheme}
          aria-label="Toggle Dark Mode"
        >
          <BsSun className="block dark:hidden"/>
          <BsMoon className="hidden dark:block"/>
        </button>
      </header>
    </>
    
    
  )
}

export default Header