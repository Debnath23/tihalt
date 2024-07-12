import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Wedge from "@/components/Wedge";
import { offices } from "@/constants";
import InfoForm from "@/components/InfoForm";

function Contact() {
  return (
    <main className="relative">
      <Nav />
      <section className="z-[1]">
        <div className="bgContactUs md:py-52 pt-44 pb-20 text-white flex flex-col justify-center items-center">
          <h1 className="md:text-[70px] text-[40px] font-bold max-sm:pt-16">
            Contact Us
          </h1>
          <p className="text-[30px] font-semibold text-slate-200 max-sm:px-8 text-center">
            Get Intouch
          </p>
        </div>

        <div className="md:flex md:px-[145px] px-12 py-[80px]">
          <div className="md:w-1/2">
            <div className="flex gap-4 py-8">
              <img
                src="https://i0.wp.com/tihalt.com/wp-content/uploads/2020/02/230643_preview-e1580738879355.png?fit=26%2C27&amp;ssl=1"
                width="26"
                height="27"
                alt="phone"
              />
              <p className="text-[#383838] text-[26px] font-semibold">Phone</p>
            </div>
            <p className="text-[16px]">
              <span className="text-[#666666] font-semibold">Phone</span> :{" "}
              <a
                href="tel:+919611223984"
                className="hover:text-black hover:underline text-[#EFB025] "
              >
                +91 96 1122 3984
              </a>
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="flex gap-4 py-8">
              <img
                src="https://i0.wp.com/tihalt.com/wp-content/uploads/2020/02/unnamed-e1580739201215.png?fit=42%2C27&ssl=1"
                width="42"
                height="27"
                alt="email"
              />
              <p className="text-[#383838] text-[26px] font-semibold">Email</p>
            </div>

            <p className="text-[#EFB025] text-[16px] hover:text-black hover:underline py-1">
              <a href="email:info@tihalt.com">info@tihalt.com</a>
            </p>
            <p className="text-[#EFB025] text-[16px] hover:text-black hover:underline py-1">
              <a href="email:support@tihalt.com">support@tihalt.com</a>
            </p>
          </div>
        </div>

        {/* <section className="bg-[#f3f3f3] md:flex md:px-[100px] justify-center py-16 px-8">
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
        </section> */}

        <InfoForm />

        <div className="md:grid md:grid-cols-3 md:gap-20 md:px-[140px] py-24 px-16">
          {offices.map((item) => (
            <div key={item.id} className="py-4">
              <div className="flex py-6">
                <img src={item.img} alt="country-img" width={40} height={27} />
                <p className="text-[26px] text-[#383838] pl-8 font-semibold">
                  {item.title}
                </p>
              </div>
              <p className="text-[16px] text-[#666666] font-medium">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </section>
      <Wedge />
      <Footer />
    </main>
  );
}

export default Contact;
