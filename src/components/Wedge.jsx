import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faCommentDots, faMessage } from "@fortawesome/free-regular-svg-icons";

export default function Wedge() {
  return (
    <section>
      <div className="z-10 flex flex-col bottom-4 left-4 fixed">
        <div className="w-14 h-14 bg-green-500 rounded-full flex justify-center items-center mx-2">
          <FontAwesomeIcon icon={faWhatsapp} className="w-10 h-10 text-white" />
        </div>
        <a
          href="#"
          className="flex gap-1 items-center text-slate-400 hover:text-slate-600 hover:underline mt-1"
        >
          <FontAwesomeIcon icon={faCommentDots} className="w-3 h-3" />
          <p className="text-[12px]">GetButton</p>
        </a>
      </div>
      <div className="z-10 bottom-4 right-4 fixed">
        <div className="w-14 h-14 bg-yellow-500 rounded-full flex justify-center items-center mx-2">
          <FontAwesomeIcon icon={faMessage} className="w-8 h-8 text-white" />
        </div>
      </div>
    </section>
  );
}
