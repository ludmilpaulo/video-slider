import React, { useState} from 'react';

import './App.css';
import {data} from './RawData';

function App() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <div className="flex flex-col w-full min-h-screen overflow-x-hidden bg-black">
  
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-black mb-3">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
            href="#pablo"
          >
            rose Tailwind Starter Kit
          </a>
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
    
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#pablo"
              >
              <span className="ml-2">Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#pablo"
              >
                <span className="ml-2">Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  

   
 



      <div className='relative flex items-center bg-black'>
      <div
          id='slider'
          className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
        >
    
        {data.map((item) => (
          <img
            className='w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
            src={item.img}
            alt='/'
          />
        ))}
        </div>
        
      </div>
  </div>
  );
}

export default App;
