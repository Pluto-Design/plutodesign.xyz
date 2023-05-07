import { onClickScroll } from "../../../utils/functions/onClickScroll";


const NavButton = ({ text, to }: { text: string, to: string }) => {
    return (
        <a onClick={() => onClickScroll(to)} className="font-montserrat py-1 md:py-0 brightness-125 cursor-pointer px-2 text-2xl hover:text-dark-red transition-all ease-in-out duration-150">{text}</a>
    )
}

export default NavButton;