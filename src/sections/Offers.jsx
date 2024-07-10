import OffersCard from "../components/OffersCard";

import { offers } from "../constants";

export default function Offers() {
  return (
    <section className="py-8 md:px-[199.6px] max-sm:px-4">
      <div className="pb-[30px]">
        <div className="flex justify-center items-center text-[#383838] font-bold pb-5 px-[196]">
          <h1 className="md:text-[48px] max-sm:text-[40px] text-center">
            Tihalt Offers Affordable SEO Services in Bangalore
          </h1>
        </div>

        <p className="text-[16px] pb-5 text-[#666666] text-center max-sm:px-4">
          Our SEO services offer a visible and effective search presence leading
          to a considerable increase in sales, profitability, and cost
          efficiency for our clients.
        </p>
      </div>
      <div className="md:grid md:grid-cols-4 py-8 max-sm:px-6">
        {offers.map((item) => (
          <OffersCard
            key={item.id}
            icons={item.icons}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </section>
  );
}
