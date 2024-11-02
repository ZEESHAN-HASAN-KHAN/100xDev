import { fontLora } from "./Style"
import { userAtom } from "./store/atom/userAtom"
import { useRecoilValue } from "recoil";
import { useState } from "react";
export function Profile() {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const user = useRecoilValue(userAtom);
    return <form
        style={fontLora}

        className=" max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg"
    >

        <div className="mb-6">
            <label
                htmlFor="fname"
                className="block text-gray-700 font-medium mb-2"
            >
                First Name:
            </label>
            <input
                type="text"
                id="fname"
                value={fname}
                onChange={(e) => setFname(e.target.value)}

                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>

        <div className="mb-6">
            <label
                htmlFor="lname"
                className="block text-gray-700 font-medium mb-2"
            >
                Last Name:
            </label>
            <input
                type="text"
                id="lname"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>

        <div className="mb-6">
            <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
            >
                Email:
            </label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>

        <div className="mb-6">
            <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb-2"
            >
                Password:
            </label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>

        <button

            type="submit"
            className="w-full  bg-gray-800 hover:bg-black   text-white py-2 rounded-lg transition duration-300"
        >
            <span style={fontLora}>Create Account</span>
        </button>
    </form>
}