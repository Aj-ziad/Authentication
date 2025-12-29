import React from 'react'

function Home() {
  return (
   <div className="font-sans overflow-x-hidden overflow-y-hidden min-h-screen">
      {/* Navigation */}
      <nav className="flex justify-end items-center py-6 px-16 relative z-10">
        <ul className="flex gap-10 font-bold text-lg text-white">
          <li><a  className="hover:text-orange-600 transition">Home</a></li>
          <li><a  className="hover:text-orange-600 transition">Blog</a></li>
          <li><a  className="hover:text-orange-600 transition">Contact</a></li>
        </ul>
      </nav>

      {/* Logo */}
      <div className="h-20 w-auto ml-32">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCiZ3wpN_5CPKFRDw-skLR5mlStw3cwQWB2A&s" 
          alt="orange-logo" 
          className="h-full w-auto object-contain"
        />
      </div>

      {/* Main Section */}
      <section className="flex min-h-[calc(100vh-90px)] relative bg-white">
        {/* Orange Shape Background */}
        <div className="absolute right-[-120px] top-[-220px] bottom-[-10px] w-[55%] rounded-[60%_20%_0_80%] bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 shadow-2xl z-0"></div>

        {/* Left Text Content */}
        <div className="z-10 flex flex-col justify-center px-16 py-24">
          <h1 className="text-6xl leading-tight text-gray-900 font-bold">
            Welcome to<br />
            <span className="text-orange-600">Orange</span> Digital Center
          </h1>
          <p className="text-lg text-gray-600 mb-10 mt-4">
            We help you achieve the dreams you've always had.
          </p>
          <button className="bg-gray-900 text-white px-10 py-4 rounded-full text-lg w-fit hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
            Get Started Now
          </button>
        </div>
      </section>

      {/* Profile Card */}
      <div className="w-80 bg-white border-4 border-black shadow-[8px_8px_0_#000] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        {/* Top Yellow Area */}
        <div className="h-36 bg-yellow-400 border-b-4 border-black flex justify-center items-end">
          <div className="w-24 h-24 bg-white border-4 border-black translate-y-1/2 flex justify-center items-center">
            <img 
              src="https://api.dicebear.com/7.x/thumbs/svg?seed=Alaina"
              alt="Profile"
              className="w-20 h-20 border-2 border-black"
            />
          </div>
        </div>

        {/* Bottom Area */}
        <div className="pt-16 pb-6 px-6 text-center">
          <h3 className="text-xl font-bold text-black m-0">Ajdour Ziad</h3>
          <h4 className="text-sm text-gray-700 mt-1 mb-4">Full Stack Developer</h4>
          <p className="text-sm text-black border-2 border-dashed border-black bg-gray-200 p-3 mb-5">
            Développeur passionné avec une base en HTML, Tailwind, JavaScript, React et Laravel.
            Motivé, créatif et curieux.
          </p>
          <a 
            href="#"
            className="inline-block px-5 py-2 bg-pink-600 text-white font-bold border-4 border-black shadow-[4px_4px_0_#000] hover:bg-white hover:text-pink-600 hover:border-pink-600 hover:shadow-none transition"
          >
            View Profile
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
