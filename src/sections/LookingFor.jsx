import { lookingForText } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function LookingFor() {
  return (
    <section className="bgLookingFor md:px-[120px] pt-12">
      <div className="md:w-[50%] max-sm:w-full">
        <h1 className="text-[38px] font-montserrat px-5 pb-[30px] text-white">
          ARE YOU LOOKING FOR A <br /> BEST WEB DESIGN <br /> COMPANY IN
          BANGALORE?
        </h1>
        <div className="px-5 pb-[15px]">
          <p className="text-[17px] text-[#BABDFF] mb-5">
            Tihalt is one of the best web design company in Bangalore. We are
            taken web design solutions as an art of our professional web design
            team and we have a belief which is everything in first impressions
            so crafted similar websites. We not only develop attractive websites
            but also we develop them in some of the ways that engage and
            encourages them to reach out you or your businesses so You develop
            professional, powerful, attractive and user-friendly websites for
            all businesses and NGO through web design company in Bangalore. At
            Tihalt, we build all types of websites, web portals, landing pages,
            static websites, dynamic websites, eCommerce websites and other
            website related services.
          </p>
        </div>
        <div className="px-5">
          {lookingForText.map((item) => (
            <div key={item.id} className="flex items-center mb-3 gap-1">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="w-[15px] h-[15.2px] text-yellow-600"
              />
              <p className="text-[16px] text-white">{item.content}</p>
            </div>
          ))}
        </div>
        <div className="px-5 py-[30px]">
          <button
            className={
              "border-2 w-[121px] h-[44px] mb-[30px] mx-5 rounded-full border-yellow-500 font-medium text-white text-[13px] cursor-pointer"
            }
          >
            Read More
          </button>
        </div>
      </div>
      <div className="md:flex md:flex-row-reverse">
        <div className="md:w-[50%] max-sm:w-full">
        <h1 className="md:text-[38px] max-sm:text-[30px] font-montserrat px-5 pb-[30px] text-white">
          WE DRIVE YOUR BUSINESS <br /> THROUGH OUR RESULT <br /> ORIENTED SEO & BEST <br /> DIGITAL
          MARKETING <br /> SERVICES
        </h1>
        <div className="px-5 pb-[15px]">
          <p className="text-[17px] text-[#BABDFF] mb-5">
            Tihalt is providing the full range of digital marketing services in
            Bangalore. Nowadays the whole world is connected very well through
            the internet without the internet it does not possible besides
            internet users is being grown trend and smartphone users also. So
            our best way of digital marketing services gives you sufficient
            routes to boost your brand and products. When the business needs to
            reach all over the world it should be doing digital marketing,
            without SEO and digital marketing we can’t able to boost the
            business in Bangalore, India, and global. We are one of the best SEO
            company in Bangalore which one providing all kinds of solutions for
            your businesses with the following benefits that are increase leads,
            generate the best sales and retail customers.
          </p>
        </div>
        <div className="px-5">
          <button
            className={
              "border-2 w-[121px] h-[44px] mb-[30px] mx-5 rounded-full border-yellow-500 font-medium text-white text-[13px] cursor-pointer"
            }
          >
            Read More
          </button>
        </div>
      </div>
      </div>
    </section>
  );
}

export default LookingFor;
