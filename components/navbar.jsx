import { useState } from "react";

const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (  
        <div>
        <nav className="xl:flex justify-between text-slate-500">
        <div className="xl:flex px-10 pt-8 xl:gap-8">
        <img className="w-20 h-7 mt-2" src="/logo.svg" />
        <div className={open ? "max-xl:hidden" : null}>
        <ul className="xl:flex max-xl:absolute z-1 right-3 max-xl:ml-20 max-xl:w-1/5 max-xl:shadow-lg bg-white w-1/4 transition-all  duration-300 gap-7 text-center">
                <li className=" hover:text-black py-2">
                    <a>Features</a>
                </li>
                <li className=" hover:text-black py-2">
                    <a>Company</a>
                </li>
                <li className=" hover:text-black py-2">
                    <a>Careers</a>
                </li>
                <li className=" hover:text-black py-2">
                    <a>About</a>
                </li>
            </ul>
        </div>
        </div>
        <img src={open ? "/icon-menu.svg" : "/icon-close-menu.svg"} onClick={() => setOpen(!open)} name="open" className="h-4 xl:hidden transition ease-in duration-300 absolute top-12 right-10" />
        <div className={open ? "max-xl:hidden" : null}>
        <div className="xl:flex px-7 max-xl:absolute max-xl:w-1/5 right-3 max-xl:shadow-lg max-xl:h-screen bg-white top-56 z-1 pb-8 xl:pt-8 xl:gap-6 text-center">
            <button className=" hover:text-black max-xl:mr-4 px-2 mt-3 mb-4">Login</button>
            <button className="border-slate-500 border-2 rounded-2xl px-5 py-1 hover:text-black hover:border-black">Register</button>
        </div>
        </div>
        </nav>
        </div>
    );
}
 
export default Navbar;