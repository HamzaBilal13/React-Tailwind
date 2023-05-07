import React from 'react';
import '../App.css';

const Home = () => {
  return (
    // <div className="w-full h-screen" style={{}}>
    //   <h1 className="color-[white] text-3xl text-center py-4">Welcome To Home</h1>
    // </div>
    <div className="container lg:columns-2 md:columns-2 py-[5%]">
      <div className="">
        <h1 className="font-bold px-[10%] text-2xl pb-3">Hi I am Hamza Bilal</h1>
        <h1 className="font-bold px-[10%] text-2xl pb-6">I love to build amazing websites in Reactjs</h1>
        <p className="px-[10%]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>

       <div className="px-[20%]">
       <div class="px-12 py-8 bg-white max-w-sm rounded overflow-hidden shadow-lg">
          <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
      </div>
       </div>
    </div>
  )
}

export default Home;
