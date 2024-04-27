


import { Link, NavLink } from "react-router-dom";


const Navbar = () => {

    const navLinks = <>
        <li><NavLink data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1000" className="mr-3" to="/">Home</NavLink></li>
        <li><NavLink data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1000" className="mr-3" to="/allList">All Tourists Spot</NavLink></li>
        <li><NavLink data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1000" className="mr-3" to="/addList">Add Tourists Spot</NavLink></li>
        <li><NavLink data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1000" className="mr-3" to="/myList">My List</NavLink></li>
        <li><NavLink data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1000" className="mr-3" to="/login">Login</NavLink></li>
        <li><NavLink data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1000" className="mr-3" to="/register">Register</NavLink></li>
    </>

    return (
        <div className="container mx-auto h-24 lg:h-20">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul data-aos="zoom-in" tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <div data-aos="fade-right" data-aos-duration="1000">
                    <a className="btn btn-ghost text-lg lg:text-2xl font-permanentMarker text-[tomato]">Explore <span className="text-xl">World</span></a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link>Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;