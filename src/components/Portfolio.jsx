import React from 'react'

const Portfolio = () => {
  return (
    <div>
      
      <div className="w-full mx-auto p-10 bg-white shadow">
        <h1 class="font-bold text-center text-2xl">PRODUCTS</h1>
        <div className="w-full mx-auto p-10 bg-white grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
          <div className="shadow-lg text-center p-2 rounded-xl">
            <div className="overflow-hidden rounded-xl">
              <img src="./img/photo1.jpg" alt="photo1" className="rounded-xl hover:scale-125 duration-1000" />
            </div>
            <div className="py-5">
              <h3 className="font-bold">Product Name</h3>
              <p className="font-semibold">Price: 120$</p>
            </div>
          </div>
          <div className="shadow-lg text-center p-2 rounded-xl">
            <div className="overflow-hidden rounded-xl">
              <img src="./img/photo1.jpg" alt="photo1" className="rounded-xl hover:scale-125 duration-1000" />
            </div>
            <div className="py-5">
              <h3 className="font-bold">Product Name</h3>
              <p className="font-semibold">Price: 120$</p>
            </div>
          </div>
          <div className="shadow-lg text-center p-2 rounded-xl">
            <div className="overflow-hidden rounded-xl">
              <img src="./img/photo1.jpg" alt="photo1" className="rounded-xl hover:scale-125 duration-1000" />
            </div>
            <div className="py-5">
              <h3 className="font-bold">Product Name</h3>
              <p className="font-semibold">Price: 120$</p>
            </div>
          </div>
          <div className="shadow-lg text-center p-2 rounded-xl">
            <div className="overflow-hidden rounded-xl">
              <img src="./img/photo1.jpg" alt="photo1" className="rounded-xl hover:scale-125 duration-1000" />
            </div>
            <div className="py-5">
              <h3 className="font-bold">Product Name</h3>
              <p className="font-semibold">Price: 120$</p>
            </div>
          </div>
        </div>
      </div>


      {/*   
      
          <div className="w-full h-screen" style={{}}>
              <h1 className="color-[white] text-3xl text-center py-4">Welcome To Home</h1>
          </div> 
      
      */}



      {/*-------------------- Learning -------------------- */}



      <div className="py-5 container mx-auto">
        <div className="p-[5%] bg-white text-3xl lg:text-center md:text-center sm:text-right xs:text-center">
          Learning
        </div>
      </div>

      <div className="container mx-auto mt-2 grid lg:grid-cols-4 md:grid-cols-2 gap-5 mb-4">
        <div className="text-center col-span-full bg-green-500 py-5 text-white font-bold">
          Grid System
        </div>
        <div className="text-center col-span-3 bg-green-500 py-5 text-white font-bold">
          Grid System
        </div>
        <div className="text-center bg-green-500 py-5 text-white font-bold">
          Grid System
        </div>
        <div className="text-center bg-green-500 py-5 text-white font-bold">
          Grid System
        </div>
        <div className="text-center bg-green-500 py-5 text-white font-bold">
          Grid System
        </div>
        <div className="text-center bg-green-500 py-5 text-white font-bold">
          Grid System
        </div>
        <div className="text-center bg-green-500 py-5 text-white font-bold">
          Grid System
        </div>
        <div className="text-center bg-green-500 py-5 text-white font-bold">
          Grid System
        </div>
      </div>



      <hr className="w-full" />


      {/*-------------------- Learning -------------------- */}

    </div>
  )
}

export default Portfolio;
