import DownloadBtn from "../components/DownloadBtn";
import LearnBtn from "../components/LearnBtn";

export default function Hero() {
  return (
    <section
      id="home"
      className="bgImg w-full flex xl:flex-row flex-col justify-center min-h-screen"
    >
      <div className="md:pt-[380px] max-sm:pt-[250px] justify-center items-start w-full md:px-[120px] px-16 md:h-[1384px] max-sm: bg-no-repeat">
        <h1 className="md:text-[104px] text-white font-montserrat max-sm:text-[40px] font-bold">
          Tihalt
        </h1>
        <p className="text-[18px] pb-16 text-white">
          <span>
            Tihalt Technologies is one of Bangalore’s most experienced and
          </span>
          <br />
          <span>trusted website design and digital marketing company.</span>
        </p>
        <div className="flex max-sm:flex-col gap-2">
          <LearnBtn />
          <DownloadBtn />
        </div>
        <div className="pt-[105px]">
          <h1 className="md:text-[52px] text-white font-montserrat max-sm:text-[36px] font-bold flex flex-col justify-center items-center text-center">
            <span>Welcome to Tihalt – Web Design Company in</span>
            <span>Bangalore</span>
          </h1>
          <div className="md:grid md:grid-cols-2 pt-12">
            <h1 className="md:text-[41px] max-sm:text-[28px] pb-5 text-white font-montserrat font-bold flex flex-col justify-center items-center">
              DECENTRALIZED PLATFORM THAT RUNS SMART CONTRACTS!
            </h1>

            <div className="md:pt-[69px] md:pl-[50px]">
              <p className="text-[#9DB0D9] text-[20px] pb-5 font-semibold">
                Tihalt is the best web design company in Bangalore besides the
                top digital marketing and SEO Agency in Bangalore. We provide
                web development & design services, SEO & digital marketing
                consultancy services to bring your products and services to a
                wider public. Join with our branding and user-centered design,
                Clients are engaged & brand value grows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
