export default function KeyFeatureCard({img, title, content}) {
  return (
    <div className="px-5 pb-[30px] flex md:w-[620px] md:h-[127px] max-sm:w-[384px] max-sm:h-[274px]">
      <div className="w-[72px] h-[72px] mr-4">
        <img src={img} alt="key-feature-img" />
        </div>
      <div className="md:w-[503px] max-sm:w-[245px]">
        <h1 className="text-[16px] font-montserrat font-semibold text-white">{title}</h1>
        <p className="text-[15px] text-[#BABDFF] mb-5 text-left pt-4">{content}</p>
      </div>
    </div>
  )
}