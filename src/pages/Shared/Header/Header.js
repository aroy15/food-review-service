import { Button, Navbar } from 'flowbite-react';
import React from 'react';
import './Header.css'
import logo from '../../../assets/img/food-logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header fixed top-0 left-0 w-full'>
            <div className="lg:container mx-auto">
                <Navbar
                    fluid={true}
                    rounded={true}
                >
                    <Navbar.Brand href="https://flowbite.com/">
                        <img
                            src={logo}
                            className="mr-3 h-6 sm:h-9"
                            alt="Food Service"
                        />
                    </Navbar.Brand>
                    <div className="flex md:order-2">
                        <button className='bg-secondary hover:bg-primary text-white rounded px-7 py-3 uppercase font-semibold border-0'>login</button>

                        <Navbar.Toggle />
                    </div>
                    <Navbar.Collapse className='menu_item'>
                        <li>
                            <Link to="" className="block py-2 pr-4 pl-3 text-white md:bg-transparent md:hover:text-primary md:p-0">Home</Link>
                        </li>
                        <li>
                            <Link to="/services" className="block py-2 pr-4 pl-3 text-white md:bg-transparent md:hover:text-primary md:p-0">Services</Link>
                        </li>
                        <li>
                            <Link to="/blogs" className="block py-2 pr-4 pl-3 text-white md:bg-transparent md:hover:text-primary md:p-0">Blogs</Link>
                        </li>
                        <li>
                            <Link to="/my-reviews" className="block py-2 pr-4 pl-3 text-white md:bg-transparent md:hover:text-primary md:p-0">My Reviews</Link>
                        </li>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </header>

    );
};

export default Header;