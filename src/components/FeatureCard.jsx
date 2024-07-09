import React from "react";

function FeatureCard({ img, title, content }) {
  return (
    <section className="w-[320px] h-auto">
      <div className="pl-4 pb-[30px]">
        <img src={img} alt="img" width={280} height={187.5} />
      </div>
      <h2 className="text-[15px] text-[#383838] text-center font-medium px-[18px] pb-[20px]">
        {title}
      </h2>
      <div className="px-8 pb-[10px]">
        <p className="text-[16px] pb-5 text-[#666666] text-justify">{content}</p>
      </div>
      <button className="border-2 w-[121px] h-[44px] mb-[30px] mx-5 rounded-full border-yellow-500 font-medium text-[#091F52] text-[13px] cursor-pointer">
        Read More
      </button>
    </section>
  );
}

export default FeatureCard;
