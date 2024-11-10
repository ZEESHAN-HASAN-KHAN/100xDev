// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import logo from './assets/logo.svg'
// import { fontLora, fontMontserrat } from './Style';
// import { useRecoilValue } from 'recoil';
// import { userAtom } from './Login';
// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const user = useRecoilValue(userAtom)

//     return (
//         <nav style={fontMontserrat} className="bg-white shadow-md">
//             <div className="container mx-auto px-6 py-4 flex justify-between items-center">
//                 <div className="flex items-center">
//                     {/* Logo */}
//                     <Link to="/" className=" flex flex-row gap-2 text-2xl font-bold text-gray-300 hover:text-gray-600">
//                         <img style={{ borderRadius: 50 }} className='w-8  ' src={logo}></img>
//                         EdTech
//                     </Link>
//                 </div>

//                 {/* Links - hidden on small screens */}
//                 <div className="hidden md:flex items-center space-x-8">
//                     <Link to="/" className="text-gray-300 hover:text-white">
//                         Home
//                     </Link>
//                     <Link to="/courses" className="text-gray-300 hover:text-white">
//                         Courses
//                     </Link>
//                     <Link to="/about" className="text-gray-300 hover:text-white">
//                         About
//                     </Link>
//                     <Link to="/contact" className="text-gray-300 hover:text-white">
//                         Contact
//                     </Link>
//                 </div>

//                 {/* Button - hidden on small screens */}
//                 <div className="hidden md:flex gap-2" >
//                     {user && user.name ? <div>{JSON.stringify(user)}</div> : <><Link to="/signup">
//                         <button className="w-fit bg-gray-800 hover:bg-black transition ease-linear text-gray-300 rounded-md p-2 text-sm">
//                             SignUp
//                         </button>
//                     </Link>
//                         <Link to="/login">
//                             <button className="w-fit bg-gray-800 hover:bg-black transition ease-linear text-gray-300 rounded-md p-2 text-sm">
//                                 LogIn
//                             </button>
//                         </Link>
//                     </>
//                     }
//                 </div>

//                 {/* Mobile Menu Button */}
//                 <div className="md:hidden flex items-center">
//                     <button
//                         onClick={() => setIsOpen(!isOpen)}
//                         className="text-gray-300 hover:text-gray-600 focus:outline-none"
//                     >
//                         <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
//                         </svg>
//                     </button>
//                 </div>
//             </div>

//             {/* Mobile Menu - shown only when `isOpen` is true */}
//             {isOpen && (
//                 <div className="md:hidden">
//                     <div className="px-6 py-4 space-y-2">
//                         <Link to="/" className="block text-gray-300 hover:text-gray-700" onClick={() => setIsOpen(false)}>
//                             Home
//                         </Link>
//                         <Link to="/courses" className="block text-gray-300 hover:text-gray-700" onClick={() => setIsOpen(false)}>
//                             Courses
//                         </Link>
//                         <Link to="/about" className="block text-gray-300 hover:text-gray-700" onClick={() => setIsOpen(false)}>
//                             About
//                         </Link>
//                         <Link to="/contact" className="block text-gray-300 hover:text-gray-700" onClick={() => setIsOpen(false)}>
//                             Contact
//                         </Link>
//                         <Link to="/signup" className="block" onClick={() => setIsOpen(false)}>
//                             <button className="  w-fit bg-gray-800 hover:bg-black transition ease-linear text-gray-300 rounded-md p-2">
//                                 SignUp
//                             </button>
//                         </Link>
//                         <Link to="/login" className='block' onClick={() => setIsOpen(false)}>
//                             <button className="w-fit bg-gray-800 hover:bg-black transition ease-linear text-gray-300 rounded-md p-2 ">
//                                 LogIn
//                             </button>
//                         </Link>
//                     </div>
//                 </div>
//             )}
//         </nav>
//     );
// };

// export default Navbar;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.svg';
import { fontLora, fontMontserrat } from './Style';
import { useRecoilValue } from 'recoil';
import { userAtom } from './store/atom/userAtom';
import avatar from './assets/avatar.png'
import UserMenuDropdown from './UserMenuDropdown';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const user = useRecoilValue(userAtom);
    // console.log('Data coming from Navbar' + JSON.stringify(user));
    return (
        <nav style={fontMontserrat} className="bg-gray-950 shadow-md">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center">
                    {/* Logo */}
                    <Link to="/home" className="relative flex items-center text-2xl font-bold text-gray-50 hover:text-white">
                        Classify
                        <span className="absolute top-0 right-0 translate-x-2 -translate-y-1 w-2 h-2 rounded-full" style={{ backgroundColor: '#6C63FF' }}></span>
                    </Link>
                </div>

                {/* Links - hidden on small screens */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link to="/home" className="text-gray-300 hover:text-white">Home</Link>
                    <Link to="/courses" className="text-gray-300 hover:text-white">Courses</Link>
                    <Link to="/about" className="text-gray-300 hover:text-white">About</Link>
                    <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>

                </div>

                {/* Button or Username - hidden on small screens */}
                <div className="hidden md:flex gap-2">
                    {user && user.firstName ? (
                        // <div className="text-gray-300" style={fontLora}>Welcome, {user.firstName}</div>
                        <div>
                            <UserMenuDropdown name={user.firstName} />

                        </div>

                    ) : (
                        <>
                            <Link to="/signup">
                                <button className="w-fit bg-gray-800 hover:text-white transition ease-linear text-gray-300 rounded-md p-2 text-sm">
                                    SignUp
                                </button>
                            </Link>
                            <Link to="/login">
                                <button className="w-fit bg-gray-800  hover:text-white transition ease-linear text-gray-300 rounded-md p-2 text-sm">
                                    LogIn
                                </button>
                            </Link>
                        </>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-300 hover:text-gray-600 focus:outline-none"
                    >
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu - shown only when `isOpen` is true */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-6 py-4 space-y-2">
                        <Link to="/home" className="block text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>
                            Home
                        </Link>
                        <Link to="/courses" className="block text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>
                            Courses
                        </Link>
                        <Link to="/about" className="block text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>
                            About
                        </Link>
                        <Link to="/contact" className="block text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>
                            Contact
                        </Link>
                        {user && user.firstName ? (
                            <UserMenuDropdown name={user.firstName} />

                        ) : (
                            <>
                                <Link to="/signup" className="block" onClick={() => setIsOpen(false)}>
                                    <button className="w-fit bg-gray-800  hover:text-white transition ease-linear text-gray-300 rounded-md p-2">
                                        SignUp
                                    </button>
                                </Link>
                                <Link to="/login" className="block" onClick={() => setIsOpen(false)}>
                                    <button className="w-fit bg-gray-800  hover:text-white transition ease-linear text-gray-300 rounded-md p-2">
                                        LogIn
                                    </button>
                                </Link>
                            </>
                        )
                        }
                    </div >
                </div >
            )}
        </nav >
    );
};

export default Navbar;
