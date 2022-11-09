import { Button, Navbar, Tooltip } from 'flowbite-react';
import React, { useContext } from 'react';
import './Header.css'
import logo from '../../../assets/img/food-logo.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
	const { user, logOut } = useContext(AuthContext);

	const handleSignOut = () => {
		logOut()
			.then(() => { })
			.catch(err => console.log(err))
	}

	return (
		<header className='header fixed top-0 left-0 w-full'>
			<div className="lg:container mx-auto">
				<Navbar
					fluid={true}
					rounded={true}
				>
					<Link to='/' className='flex items-center'>
						<img
							src={logo}
							className="mr-3 h-6 sm:h-9"
							alt="Food Service"
						/>
					</Link>
					<div className="flex md:order-2 gap-5">
						{
							!user?.email ?
								<Link to='/login' className='bg-secondary hover:bg-primary text-white rounded px-7 py-2 uppercase font-semibold border-0'>login</Link>
								:
								<>
									<button onClick={handleSignOut} className='bg-secondary hover:bg-primary text-white rounded px-7 py-2 uppercase font-semibold border-0'>log out</button>
									<Tooltip
										content={user?.displayName}
										placement="left"
									>
										<img className='h-10 w-10 object-cover rounded-full' src={user?.photoURL} alt="" />
									</Tooltip>
								</>
						}

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
						{
							user?.email &&
							<>
								<li>
									<Link to="/add-service" className="block py-2 pr-4 pl-3 text-white md:bg-transparent md:hover:text-primary md:p-0">Add Service</Link>
								</li>
								<li>
									<Link to="/my-reviews" className="block py-2 pr-4 pl-3 text-white md:bg-transparent md:hover:text-primary md:p-0">My Reviews</Link>
								</li>

							</>
						}
					</Navbar.Collapse>
				</Navbar>
			</div>
		</header>

	);
};

export default Header;