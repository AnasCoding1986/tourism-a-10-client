

import { FaFacebookSquare,FaTwitter,FaInstagramSquare,FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div data-aos="zoom-in-up" data-aos-duration="1500">
            <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
                <nav className="grid grid-flow-col gap-4">
                    <a className="link link-hover">All Tourist Spot</a>
                    <a className="link link-hover">Our Services</a>
                    <a className="link link-hover">Client Review</a>
                    <a className="link link-hover">Contact Us</a>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4 text-[tomato]">
                        <div className="text-xl font-black"><FaFacebookSquare /></div>
                        <div className="text-xl font-black"><FaTwitter /></div>
                        <div className="text-xl font-black"><FaInstagramSquare /></div>
                        <div className="text-xl font-black"><FaYoutube /></div>
                    </div>
                </nav>
                <aside className="">
                    <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;