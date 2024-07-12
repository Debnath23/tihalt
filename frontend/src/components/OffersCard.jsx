import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function OffersCard({icons, title, content}) {
  return (
    <div className='w-[320px] h-[276.7px] px-5 pb-[15px] flex flex-col items-center'>
        <div className='bg-[#1C4389] rounded-full w-[64px] h-[64px] mb-7'>
            <FontAwesomeIcon icon={icons} className='w-[30px] h-[30.4px] p-[17px] text-white' />
        </div>
        <h2 className='text-[14px] text-[#383838] font-bold pb-5'>{title}</h2>
        <p className='text-[15px] text-[#666666] text-center'>{content}</p>
    </div>
  )
}

export default OffersCard