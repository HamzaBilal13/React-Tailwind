import React from 'react'

const About = () => {
  return (
    <div className="container mx-auto w-full flex flex-col sm:flex-col md:flex-row lg:flex-row  bg-white shadow p-10 gap-10">
      <div>
        <img src="./img/photo1.jpg" alt="image" className="rounded-xl hover:scale-125 duration-1000" />
      </div>
      <div className="text-center">
        <h1 className="text-3xl pb-2">About Us</h1>
        <p className="py-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
        <p className="py-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
         <p className="py-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
         <p className="py-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
    </div>
  )
}

export default About