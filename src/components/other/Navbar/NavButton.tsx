import { onClickScroll } from "../../../utils/functions/onClickScroll";


const NavButton = ({ text, to }: { text: string, to: string }) => {
    return (
        <a onClick={() => onClickScroll(to)} className="font-montserrat brightness-125 cursor-pointer px-2 font-black text-3xl hover:text-dark-red transition-all ease-in-out duration-150">{text}</a>
    )
}

export default NavButton;