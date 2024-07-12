import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faPinterest } from "@fortawesome/free-brands-svg-icons/faPinterest";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight";
import {
  DigitalMarketingLinks,
  InteractiveWebSolutionLinks,
  SoftwareDevelopmentLinks,
} from "../constants";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <>
      <footer className="py-[70px] md:px-[120.6px] sm:px[15px] bg-[#202020] md:grid md:grid-cols-3">
        <div className="flex">
          <div className="w-[426.66px] px-[30px]">
            <div>
              <div className="mb-[60px]">
                <img
                  src="https://i0.wp.com/tihalt.com/wp-content/uploads/2019/04/logo.png?fit=106%2C25&ssl=1"
                  width={106}
                  height={25}
                />
              </div>
              <p className="text-white text-[15px] mb-[10px]">
                In Tihalt, everyone has a voice and the ability to propose
                projects directly to the network. Anything you can do.
              </p>
              <div className="flex gap-3 py-10">
                <div className="w-6 h-6 bg-white rounded-full flex justify-center items-center">
                  <FontAwesomeIcon icon={faFacebookF} />
                </div>
                <div className="w-6 h-6 bg-white rounded-full flex justify-center items-center">
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
                <div className="w-6 h-6 bg-white rounded-full flex justify-center items-center">
                  <FontAwesomeIcon icon={faYoutube} />
                </div>
                <div className="w-6 h-6 bg-white rounded-full flex justify-center items-center">
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
                <div className="w-6 h-6 bg-white rounded-full flex justify-center items-center">
                  <FontAwesomeIcon icon={faLinkedin} />
                </div>
                <div className="w-6 h-6 bg-white rounded-full flex justify-center items-center">
                  <FontAwesomeIcon icon={faPinterest} />
                </div>
              </div>
              <div>
                <p className="text-white pb-6">INTERACTIVE WEB SOLUTIONS</p>
                <div>
                  {InteractiveWebSolutionLinks.map((item) => (
                    <div className="mb-[15px]" key={item.id}>
                      <div className="flex items-center gap-2 pb-4">
                        <FontAwesomeIcon
                          icon={faAngleRight}
                          className="w-3 h-3 text-white"
                        />
                        <a
                          href="#"
                          className="hover:underline hover:text-blue-600 cursor-pointer text-white"
                        >
                          {item.link}
                        </a>
                      </div>
                      <div className="border-[0.1px] border-[#494949]"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="border-[0.1px] border-[#494949]"></div>
        </div>

        <div className="flex">
          <div className="w-[426.66px] px-[30px]">
            <p className="text-white text-[13px] font-bold text-start">
              USEFUL LINKS
            </p>
            <div className="flex flex-col justify-center items-start py-6">
              <div className="mb-2">
                <a
                  href="#"
                  className="hover:underline hover:text-blue-600 cursor-pointer text-white"
                >
                  Mobile Application Development
                </a>
              </div>
              <div className="mb-2">
                <a
                  href="#"
                  className="hover:underline hover:text-blue-600 cursor-pointer text-white"
                >
                  Best Digital Marketing Company in Bangalore
                </a>
              </div>
              <div className="mb-2">
                <a
                  href="#"
                  className="hover:underline hover:text-blue-600 cursor-pointer text-white"
                >
                  Website Development Services
                </a>
              </div>
              <div className="mb-2">
                <a
                  href="#"
                  className="hover:underline hover:text-blue-600 cursor-pointer text-white"
                >
                  Creative Communications
                </a>
              </div>
              <div className="mb-2">
                <a
                  href="#"
                  className="hover:underline hover:text-blue-600 cursor-pointer text-white"
                >
                  Graphic Design Company in Bangalore
                </a>
              </div>
              <div className="mb-2">
                <a
                  href="#"
                  className="hover:underline hover:text-blue-600 cursor-pointer text-white"
                >
                  SEO Services in Bangalore
                </a>
              </div>
              <div className="mb-2">
                <a
                  href="#"
                  className="hover:underline hover:text-blue-600 cursor-pointer text-white"
                >
                  Terms and Conditions
                </a>
              </div>
              <div className="mb-2">
                <a
                  href="#"
                  className="hover:underline hover:text-blue-600 cursor-pointer text-white"
                >
                  Refund and Cancellation Policy
                </a>
              </div>
            </div>
            <div>
              <p className="text-white text-[13px] font-bold pb-8 pt-6">
                DIGITAL MARKETING
              </p>
              <div>
                {DigitalMarketingLinks.map((item) => (
                  <div className="mb-[15px]" key={item.id}>
                    <div className="flex items-center gap-2 pb-4">
                      <FontAwesomeIcon
                        icon={faAngleRight}
                        className="w-3 h-3 text-white"
                      />
                      <a
                        href="#"
                        className="hover:underline hover:text-blue-600 cursor-pointer text-white"
                      >
                        {item.link}
                      </a>
                    </div>
                    <div className="border-[0.1px] border-[#494949]"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="border-[0.1px] border-[#494949]"></div>
        </div>
        <div className="flex">
          <div className="w-[426.66px] px-[30px]">
            <p className="text-white text-[13px] font-bold text-start">
              GET TOUCH WITH US
            </p>
            <div className="flex gap-1 py-5">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-white pt-1"
              />
              <p className="text-white">
                No. 32, 38/1, 2nd Floor, Sri Ram Arcade, Near Bosch Office,
                Hosur Main Road, Bommanahalli, Bengaluru, Karnataka 560068.
              </p>
            </div>
            <div className="flex gap-1 py-5">
              <FontAwesomeIcon icon={faEnvelope} className="text-white pt-1" />
              <a
                href="#"
                className="hover:underline hover:text-blue-600 cursor-pointer text-white"
              >
                info@tihalt.com
              </a>
            </div>
            <div className="flex gap-1 py-5">
              <FontAwesomeIcon icon={faPhone} className="text-white pt-1" />
              <a
                href="tel:+91 96 1122 3984"
                className="hover:underline hover:text-blue-600 cursor-pointer text-white"
              >
                +91 96 1122 3984
              </a>
            </div>

            <div>
              <p className="text-white text-[13px] font-bold pb-8 pt-6">
                SOFTWARE DEVELOPMENT
              </p>
              <div>
                {SoftwareDevelopmentLinks.map((item) => (
                  <div className="mb-[15px]" key={item.id}>
                    <div className="flex items-center gap-2 pb-4">
                      <FontAwesomeIcon
                        icon={faAngleRight}
                        className="w-3 h-3 text-white"
                      />
                      <a
                        href="#"
                        className="hover:underline hover:text-blue-600 cursor-pointer text-white"
                      >
                        {item.link}
                      </a>
                    </div>
                    <div className="border-[0.1px] border-[#494949]"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="border-[0.1px] border-[#494949]"></div>
        </div>
      </footer>
      <div className="w-full">
        <p className="text-[16px] text-[#838383] py-[38px] bg-[#141414] flex flex-wrap justify-center items-center px-10 text-center">
          Copyright © 2016-2023 Tihalt Technosoft Private Limited.
        </p>
      </div>
    </>
  );
}

export default Footer;
