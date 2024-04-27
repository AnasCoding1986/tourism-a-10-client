import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    if (user) {
        console.log(user.displayName);
        console.log(user);
        console.log(user.photoURL);
    } else {
        console.log("User not Exixts");
    }

    const navLinks = <>
        <li><NavLink data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1000" className="mr-3" to="/">Home</NavLink></li>
        <li><NavLink data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1000" className="mr-3" to="/about">About Us</NavLink></li>
        <li><NavLink data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1000" className="mr-3" to="/login">Login</NavLink></li>
        <li><NavLink data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1000" className="mr-3" to="/register">Register</NavLink></li>
        {
            user ?
                <div className="flex">
                    <li><NavLink data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500" className="mr-3" to="/contact">Contact Us</NavLink></li>
                    <li><NavLink data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1000" className="mr-3" to="/updateUser">Update User</NavLink></li>
                </div> :
                ""
        }
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
                    <a className="btn btn-ghost text-lg lg:text-2xl font-permanentMarker text-[tomato]">Anas <span className="text-xl">Properties</span></a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <div className="flex items-center">
                                <div className="w-10 rounded-full mr-4 tooltip tooltip-bottom" data-tip={user.displayName}>
                                    <img  data-aos="fade-left" data-aos-duration="1000" data-aos-delay="2000" className="rounded-full" alt="User Pic" src={user.photoURL} />
                                </div>
                                <button  data-aos="fade-left" data-aos-duration="1000" data-aos-delay="2000" onClick={logOut} className="btn">Logout</button>
                            </div> :
                            <div  data-aos="fade-left" data-aos-duration="1000" data-aos-delay="2000">
                                <Link to="/login"><button onClick={logOut} className="btn">Login</button></Link>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;