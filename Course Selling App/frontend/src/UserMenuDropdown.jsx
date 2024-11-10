import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import avatar from './assets/avatar.png'
import { fontMontserrat } from './Style';
import { useSetRecoilState } from 'recoil';
import { userAtom } from './store/atom/userAtom';
function UserMenuDropdown({ name }) {
    const [userMenu, setUserMenu] = useState(false);
    const setUser = useSetRecoilState(userAtom);
    const navigate = useNavigate();
    const toggleDropdown = () => {
        setUserMenu(!userMenu);
    };
    async function logout() {
        const response = await fetch('http://localhost:3000/api/v1/user/logout', {
            method: 'GET',
            credentials: 'include',
        });

        setUser({});
        navigate('/login')
    }
    return (
        <div className="relative inline-block ">
            <button onClick={toggleDropdown} className="flex items-center focus:outline-none">
                <img style={{ borderRadius: '50%' }} className="w-8 text-white" src={avatar} alt="User" />
            </button>
            {userMenu && (
                <ul style={fontMontserrat} className="absolute right-0 mt-2 w-48 bg-black text-white border border-gray-700 rounded-md shadow-lg z-10">
                    <li className="px-4 py-2 hover:bg-gray-900">
                        Hi, {name}
                    </li>
                    <li>
                        <Link to="/myProfile" className="block px-4 py-2 hover:bg-gray-900 ">Profile</Link>
                    </li>
                    <li>
                        <Link to="/myCourses" className="block px-4 py-2  hover:bg-gray-900">My Courses</Link>
                    </li>
                    <li>
                        <span onClick={logout} className="block px-4 py-2 text-red-500 hover:bg-gray-900">
                            Log Out
                        </span>
                    </li>


                </ul>
            )}
        </div>

    );
}

export default UserMenuDropdown;
