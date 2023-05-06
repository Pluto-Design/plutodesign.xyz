import { NavLink } from "react-router-dom";


const Alert = () => {
    return (
        <main className="h-screen w-screen flex flex-col justify-center items-center bg-darken-white">
            <p className="text-5xl font-bold text-dark-red">404 - Page not found</p>
            <NavLink to={"/"} className="text-3xl font-bold hover:scale-110 transition-all ease-in-out duration-200 my-4 rounded-xl bg-dark-red text-white px-4 py-2">Go Home</NavLink>
        </main>
    )
}

export default Alert;