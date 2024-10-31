import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { fontLora, fontMontserrat } from "./Style";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userAtom } from "./store/atom/userAtom";
export function Login() {
    const user = useRecoilValue(userAtom);
    const setUser = useSetRecoilState(userAtom);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    useEffect(() => {
        console.log("Updated User in Recoil:", JSON.stringify(user));
    }, [user]);
    // console.log(`User Data ` + JSON.stringify(user));
    async function handleSubmit(e) {
        e.preventDefault();
        const requestBody = {
            email: email,
            password: password
        }

        try {
            const response = await fetch('http://localhost:3000/api/v1/user/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
                credentials: 'include'
            })
            console.log('Response status:', response.status);

            if (response.ok) {
                const data = await response.json();
                console.log('User Signed Successfully:', data);
                setUser(data.data)
                navigate('/home'); // Navigate to the login page upon successful signup
            } else {

                console.log('Error:', data.message);
            }
        } catch (error) {
            console.log('Network Error')
        }
    }
    return <div className="mt-8">

        <h2 style={fontMontserrat} className="text-gray-700 text-5xl">Login</h2>
        <form
            style={fontLora}
            onSubmit={handleSubmit}
            className="max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg"
        >
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
                className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 transition duration-300"
            >
                Log In
            </button>
        </form>

    </div>
}