import { onClickScroll } from "../../../../utils/functions/onClickScroll";


const LandingButton = ({ text, to }: { text: string, to: string }) => {
    return (
        <a onClick={() => onClickScroll(to)} className="px-4 w-full md:w-auto text-center cursor-pointer hover:scale-105 transition-all ease-in-out duration-125 py-2 text-2xl rounded-xl bg-dark-red mr-4 mt-4 text-white font-bold">{text}</a>
    )
}

export default LandingButton;