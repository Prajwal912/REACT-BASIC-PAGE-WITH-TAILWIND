import React from 'react'

const Navbar = () => {
  return (
   <>
   <nav className="flex justify-between mx-auto items-center  max-w-[1280px] h-[72px] mb-20">
        <div className="logo w-[76px]">
          <img src="/images/brand_logo.png" alt="logo" />
        </div>

        <ul className="list-none flex gap-8 text-xl cursor-pointer" style={{fontFamily: 'Poppins, sans-serif'}}>
          <li href="#" className='font-medium'>Menu</li>
          <li href="#" className='font-medium'>Location</li>
          <li href="#" className='font-medium'>About</li>
          <li href="#" className='font-medium'>Contact</li>
        </ul>

        <button className="px-4	pt-1.5 pb-1.5 bg-[#D01C28] h-8 text-white font-medium items-center 
        flex rounded text-base" style={{ fontFamily: "Mooli, sans-serif" }}>
          Login
        </button>
      </nav>
   </>
  )
}

export default Navbar