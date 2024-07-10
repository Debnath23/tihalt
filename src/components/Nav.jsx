import { navLinks } from "../constants/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  return (
    <>
      <header className="flex fixed h-[125px] top-0 left-0 w-full z-[100]">
        <div className="w-full">
          <div className="md:flex justify-between items-center w-full py-4 px-4 bg-[#222222] text-white">
            <div className="flex max-sm:justify-center items-center gap-1">
              <FontAwesomeIcon icon={faPhone} className="w-[12px] h-[15px]" />
              <p>+91 96 1122 3984</p>
            </div>
            <div className="md:flex items-center gap-4">
              <div className="flex max-sm:justify-center items-center gap-1">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="w-[12px] h-[16px]"
                />
                <p>info@tihalt.com</p>
              </div>
              <div className="flex max-sm:justify-center items-center gap-2">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="w-[12px] h-[16px]"
                />
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="w-[12px] h-[16px]"
                />
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="w-[12px] h-[16px]"
                />
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="w-[12px] h-[16px]"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center md:px-[124px] max-sm:px-4 py-[32px] bg-black text-white">
            <div>
              <img
                src="https://i0.wp.com/tihalt.com/wp-content/uploads/2019/04/logo.png?fit=106%2C25&ssl=1"
                width={106}
                height={25}
              />
            </div>
            <div className="flex gap-4">
              <ul className="flex-1 flex justify-center items-center gap-8 max-lg:hidden">
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="font-montserrat leading-normal text-lg text-slate-100 hover:underline underline-offset-8"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex items-center md:gap-4 max-sm:gap-2">
                <FontAwesomeIcon icon={faSearch} width={14} height={13} />
                <div className="border-2 border-white px-2 md:hidden">
                  <FontAwesomeIcon icon={faBars} width={13} height={16} />
                </div>
                <div className="border-[1px] border-[#ffffff] h-4 max-sm:hidden"></div>
                <div className="text-white text-[11px] px-[15px] py-2 bg-[#EEAE20] mx-2 rounded-sm max-sm:hidden">
                  <p>
                    <a href="#">REQUEST QUOTE</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Nav;
