export function Navbar() {
    return <>
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-white text-2xl font-bold">
                    Logo
                </div>

                {/* Menu items */}
                <ul className="hidden md:flex space-x-6 text-white">
                    <li>
                        <a href="#" className="hover:text-blue-200 transition">Home</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-blue-200 transition">About</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-blue-200 transition">Services</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-blue-200 transition">Contact</a>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>

    </>
}