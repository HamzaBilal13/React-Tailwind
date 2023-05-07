import React, { useState } from 'react';
import Home from './Home';
import Portfolio from './Portfolio';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Form2 from './Form2';
import { Routes, Route, Link } from 'react-router-dom';


const Navbar = () => {
  const [showMyModal, setShowMyModal] = useState(false);
  const handleOnClose = () => setShowMyModal(false);
  return (

    <header className="absolute inset-x-0 top-0 z-50 container mx-auto">

      <nav className="flex items-center justify-between p-4 lg:px-8 border-b shadow" aria-label="Global">
        <div className="flex lg:flex-1">

          <h1 className="font-medium">Hamza Bilal</h1>
        </div>
        <div className="flex lg:hidden">
          <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link to="/" className="text-sm font-semibold leading-6 text-gray-900">Home</Link>
          <Link to="/Portfolio" className="text-sm font-semibold leading-6 text-gray-900">Portfolio</Link>
          <Link to="/Services" className="text-sm font-semibold leading-6 text-gray-900">Services</Link>
          <Link to="/About" className="text-sm font-semibold leading-6 text-gray-900">About</Link>
          <Link to="/Contact" className="text-sm font-semibold leading-6 text-gray-900">Contact</Link>

        </div>
        <button class="btn btn-blue hidden lg:flex lg:flex-1 lg:justify-end">

          <a className="text-sm font-semibold leading-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">Signup
            <span aria-hidden="true">
              &rarr;
            </span>
          </a>


        </button>





        < Login closeModal={handleOnClose} showModal={showMyModal} />

      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Portfolio" element={<Portfolio />}></Route>
        <Route path="/Services" element={<Services />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Form2" element={<Form2 />}></Route>

      </Routes>




    </header>




  );
}

export default Navbar;
