import React from "react";

const Hero = () => {
  return (
    <>
      <section className="hero flex items-center mx-auto max-w-[1180px]">
        <div className="right--col">
          <h1 className="text-black font-extrabold text-[108px] leading-[102px] mb-9" style={{fontFamily: 'Poppins, sans-serif'}}>
            YOUR FEET DESERVE THE BEST
          </h1>
          <p className="text-base text-[#5A5959] font-semibold mb-9 w-[404px]" style={{ fontFamily: "Mooli, sans-serif" }}>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="btns flex gap-10 mb-9">
            <button className="flex items-center bg-[#D01C28] px-4 pt-1.5 pb-1.5 rounded capitalize
             text-white font-medium text-xl" style={{ fontFamily: "Mooli, sans-serif" }}>
              shop now
            </button>
            <button className="flex items-center bg-transparent px-4 pt-1.5 pb-1.5 
            rounded capitalize text-[#5A5959] border border-black font-medium text-xl"
            style={{ fontFamily: "Mooli, sans-serif" }}>
              category
            </button>
          </div>
          <div className="mb-4">
            <small className="capitalize text-[#5A5959]" style={{ fontFamily: "Mooli, sans-serif" }}>
              also Available on
            </small>
          </div>
          <div className="sm-brand flex gap-4 mb-6">
            <img src="/images/amazon.png" className="w-8 h-8" alt="" />
            <img src="/images/flipkart.png" className="w-8 h-8" alt="" />
          </div>
        </div>

        <div className="left--col">
          <img src="/images/shoe_image.png"  alt="" />
        </div>
      </section>
    </>
  );
};

export default Hero;
