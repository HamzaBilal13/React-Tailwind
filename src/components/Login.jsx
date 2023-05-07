import React from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';



export default function Login({showModal, closeModal}) {
    if(!showModal) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="w-full max-w-md">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="text-2xl py-2">
                        <div className="float-right">
                            <button onClick={closeModal}>
                            <AiOutlineCloseCircle/>

                            </button>
                            

                        </div>

                        <h1 className="text-left">Welcome Back!

                        </h1>
                        <hr className="mt-5" />

                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Email
                        </label>
                        <input type="email" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" placeholder="Username" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                        <input type="password" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" placeholder="******************" />
                        <p className="text-red-500 text-xs italic">Please choose a password.</p>
                        
                    </div>
                    <div className="flex items-center justify-between">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            <Link to="/Form2" >Sign In</Link>
                        </button>
                        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Forgot Password?
                        </a>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}