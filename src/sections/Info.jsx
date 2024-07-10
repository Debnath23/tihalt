import React from "react";

export default function Info() {
  return (
    <section className="bg-[#f3f3f3] md:flex md:px-[100px] justify-center py-16 px-8">
      <div className="flex flex-col justify-center items-center md:w-1/2 w-full">
        <div className="md:px-5 pb-[30px] flex flex-col justify-center items-center">
          <h2 className="text-[39px] text-[#383838] font-semibold">
            Leave us your info
          </h2>
          <p className="text-[19px] pt-2.5 text-[#747474]">
            and we will get back to you.
          </p>
        </div>
        <div className="flex justify-center items-center pb-[50px] mb-[30px]">
          <div className="border-[0.8px] w-[40px] border-[#2b2b2b]"></div>
        </div>
        <div className="md:grid md:grid-cols-2 gap-4 w-full">
          <div className="px-[7px] mb-[14px]">
            <input
              type="text"
              placeholder="Full Name*"
              required
              className="px-[22px] py-[15px] w-full h-[55.5px]"
            />
          </div>
          <div className="px-[7px] mb-[14px]">
            <input
              type="email"
              placeholder="Email*"
              required
              className="px-[22px] py-[15px] w-full h-[55.5px]"
            />
          </div>
          <div className="px-[7px] mb-[14px]">
            <input
              type="number"
              placeholder="Phone Number*"
              required
              className="px-[22px] py-[15px] w-full h-[55.5px]"
            />
          </div>
          <div className="px-[7px] mb-[14px]">
            <input
              type="text"
              placeholder="Subject*"
              required
              className="px-[22px] py-[15px] w-full h-[55.5px]"
            />
          </div>
        </div>
        <div className="w-full px-[7px] mb-[14px]">
          <textarea
            name="message"
            placeholder="Message*"
            className="w-full h-[120px] py-[18px] px-[22px]"
          ></textarea>
        </div>
        <div className="bg-[#233C85] text-white mx-2 mt-4 w-full h-[51px] flex justify-center items-center">
          <button type="submit">Submit</button>
        </div>
      </div>
      <div className="md:w-1/2 w-full mt-8 md:mt-0 flex justify-center items-center">
        <img
          src="https://i0.wp.com/tihalt.com/wp-content/uploads/2020/04/Social-Media-Marketing.png?fit=559%2C559&ssl=1"
          alt="info-img"
          className="max-w-full h-auto"
        />
      </div>
    </section>
  );
}
