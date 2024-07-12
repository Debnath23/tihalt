import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faCommentDots, faMessage } from "@fortawesome/free-regular-svg-icons";

export default function Wedge() {
  return (
    <section className="z-10 fixed">
      <div className="flex flex-col bottom-4 left-4 fixed">
        <div className="w-14 h-14 bg-green-500 rounded-full flex justify-center items-center mx-2">
          <FontAwesomeIcon icon={faWhatsapp} className="w-10 h-10 text-white" />
        </div>
        <a
          href="#"
          className="flex gap-1 items-center text-slate-200 hover:text-slate-400 hover:underline mt-1"
        >
          <FontAwesomeIcon icon={faCommentDots} className="w-3 h-3" />
          <p className="text-[12px]">GetButton</p>
        </a>
      </div>
      <div className="bottom-4 right-4 fixed">
        <div className="w-14 h-14 bg-yellow-500 rounded-full flex justify-center items-center mx-2">
          <FontAwesomeIcon icon={faMessage} className="w-8 h-8 text-white" />
        </div>
      </div>
      <div className="fixed bottom-12 bg-slate-100 py-[7px] px-[10px] rounded-md ml-2 text-[14px] text-slate-600 left-20">Message Us
      </div>
    </section>
  );
}
