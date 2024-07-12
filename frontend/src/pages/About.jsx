import * as React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Wedge from "../components/Wedge";
import CountUp from "react-countup";
import { carouselContent, clients, features2, numbers } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

function About() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <main className="relative">
      <Nav />
      <section className="z-[1]">
        <div className="bgAbout md:py-52 pt-44 pb-20 text-white flex flex-col justify-center items-center">
          <h1 className="md:text-[70px] text-[40px] font-semibold max-sm:pt-16">
            About Us
          </h1>
          <p className="text-[16px] font-semibold text-slate-200 max-sm:px-8 text-center">
            We provide the solution for business development
          </p>
        </div>

        <div className="md:mx-[120px] my-10">
          <div className="px-5 pb-[60px]">
            <h1 className="md:text-[48px] text-[40px] font-montserrat text-[#1E3375] text-center font-extrabold mb-5">
              “We are regarded as industry leaders in digital strategy and
              solutions, focused solely on delivering great user experiences”
            </h1>
          </div>

          <div className="md:flex">
            <div className="md:w-[600px] w-[342px] pl-14 font-semibold">
              <p className="text-[16px] text-[#666666] mb-5 text-justify">
                NEED to know how technology can bring you value? Never stop
                looking for better solutions to consult us. We design, develop
                and manage web-based enterprise solutions and mobile
                applications.{" "}
                <a href="#">
                  <span className="text-[#EFB025]">Tihalt Technologies</span>
                </a>{" "}
                can make your business perform better, compete better, and
                generate more money.
              </p>
              <h2 className="text-[36px] text-[#383838] md:font-extrabold font-semibold mb-5">
                Quality, Usability, Security! Creative Web Solutions!
              </h2>
              <p className="text-[16px] text-[#666666] mb-5 text-justify">
                Are all at the heart of our unique smart tools Our digital
                solutions support your business with innovative technology and
                user-centered design.
              </p>
              <p className="text-[16px] text-[#666666] mb-5 text-justify">
                We support clients to reach more customers by bringing them
                online/Digital Space with{" "}
                <span>
                  <b>
                    Websites Development, Digital Marketing, and eCommerce
                    Developments.,
                  </b>
                </span>
              </p>
            </div>
            <div className="md:px-[100px] md:py-[30px] px-14">
              <img
                src="https://i0.wp.com/tihalt.com/wp-content/uploads/2019/04/gal-1.jpg?fit=461%2C307&ssl=1"
                alt="img"
                width={461}
                height={307}
              />
            </div>
          </div>
        </div>

        <div className="md:flex">
          <div className="bgDigitalWeb md:w-1/2 md:px-32 px-12 py-24">
            <h1 className="text-[36px] mb-5 text-white font-[700] font-montserrat">
              Digital Web Solutions that deliver! The Right Tools!! The Right
              Solution!!!
            </h1>
            <h2 className="text-[28px] text-white font-[700] font-montserrat mb-5">
              Who we are
            </h2>
            <p className="text-[16px] text-[#CCCCCC] mb-5 text-justify">
              <span className="font-semibold">Tihalt</span> is a full-service
              digital agency. We provide creative digital solutions to bring
              your products and services to a wider public. With our{" "}
              <span className="font-semibold">
                branding and user-centered design
              </span>
              , customers are engaged and brand awareness grows. Our impressive
              client list trusts us to deliver creative, interactive experiences
              for their customers across the whole range of web and mobile
              applications.
            </p>
          </div>
          <div className="bgDigitalWeb2 md:w-1/2"></div>
        </div>

        <div className="md:flex md:mx-[99.6px] py-16 md:gap-6">
          <div className="md:w-1/2">
            <h1 className="text-[41px] text-[#1E3375] font-montserrat font-bold px-5 pb-[30px] text-start">
              OUR VISION
            </h1>
            <p className="text-[16px] text-[#666666] px-5 pb-[30px] text-start">
              Our vision to bring our clients into the modern era through
              innovation technologies. <b>Tihalt Technosoft Pvt. Ltd.,</b> based
              in <b>Bangalore, India,</b> we deliver web solutions and digital
              marketing services. We will engage in sustainable practices and
              anticipate the needs of our clients. We help clients enjoy life,
              by offering an affordable solution. Our team serves clients from{" "}
              <b>UK, Europe, USA…</b>
            </p>
          </div>
          <div className="md:w-1/2">
            <h1 className="text-[41px] text-[#1E3375] font-montserrat font-bold px-5 pb-[30px] text-start">
              OUR MISSION
            </h1>
            <p className="text-[16px] text-[#666666] px-5 pb-[30px] text-start">
              The foundations and aspirations of our business remain true to
              those established by our visionary founders, and their innovation
              and energy continue to be our inspiration. We always do the right
              thing. With{" "}
              <b>Precision, Pace and Passion. Tihalt Technologies</b> trusts
              each other and have fun winning together. We own and shape our
              future. We create sustainable growth. For All. Our passion and
              entrepreneurial culture will ensure that we deliver for our
              customers in quality and assurance – today and in the future.
            </p>
          </div>
        </div>

        <div className="bgNumbers md:flex lg:px-28 md:px-14 px-12 py-4">
          {numbers.map((item) => (
            <div
              key={item.id}
              className="px-5 pb-[30px] flex flex-col justify-center items-center md:w-1/4"
            >
              <p className="text-white text-[74px] font-montserrat pb-8">
                <CountUp end={item.num} duration={5} />+
              </p>
              <p className="text-[#EFC31A] text-[16px] font-bold">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="md:flex lg:px-28 md:px-14 px-12 py-20">
          {features2.map((item) => (
            <div
              key={item.id}
              className="md:w-1/4 flex flex-col justify-center items-center py-8"
            >
              <div className="bg-[#1C4389] rounded-full w-16 h-16 text-white flex justify-center items-center">
                <FontAwesomeIcon icon={item.icon} className="w-8 h-8" />
              </div>
              <p className="text-[14px] text-[#383838] font-semibold pt-4">
                {item.title}
              </p>
              <p className="text-[15px] text-[#666666] text-center px-6 pt-2">
                {item.content}
              </p>
            </div>
          ))}
        </div>

        <div className="bgClient py-16">
          <div className="flex justify-center items-center py-12">
          <div className="w-[1px] h-8 bg-white"></div></div>
          <p className="text-center text-[15px] font-bold text-white pb-4">OUR CLIENTS</p>
          <p className="text-center text-[16px] text-[#73BAE3]">THANKS TO OUR VALUABLE CLIENTS WHO MADE IT HAPPEN</p>
          <div className="md:grid md:grid-cols-4 py-12 px-20">
            {
              clients.map((item) => (
                <div key={item.id} className="px-4 pb-7">
                  <img src={item.img} alt="img" width={264} height={95} />
                </div>
              ))
            }
          </div>
        </div>

        <div className="flex flex-col justify-center items-center pt-8 pb-28 max-sm:mx-16">
          <h1 className="text-[28px] text-[#343434] font-bold text-center mb-24">TESTIMONIALS</h1>
          <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-[1200px] mb-12"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {carouselContent.map((item) => (
                <CarouselItem key={item.id} className="w-full">
                  <div className="">
                    <p className="text-[#3B3B3B] text-[17px] font-bold pb-4">{item.title}</p>
                    <p className="text-[#707070] text-[15px]">{item.content}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
      <Wedge />
      <Footer />
    </main>
  );
}

export default About;
