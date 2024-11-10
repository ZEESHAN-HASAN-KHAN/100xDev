import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fontLora, fontMontserrat } from './Style';
export function SignUp() {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [toggle, setToggle] = useState('');
    async function handleSubmit(e) {
        e.preventDefault();
        const requestBody = {
            firstName: fname,
            lastName: lname,
            email: email,
            password: password,
        };

        try {
            const response = await fetch('http://localhost:3000/api/v1/user/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
                credentials: 'include'
            });

            const data = await response.json();
            if (response.ok) {
                console.log('User Created Successfully:', data);
                localStorage.setItem('token', data.token);
                navigate('/login'); // Navigate to the login page upon successful signup
            } else {
                console.log('Error:', data.message);
            }
        } catch (e) {
            console.log('Error Submitting the form:', e);
        }
    }
    async function handleSubmitTeacher(e) {
        e.preventDefault();
        const requestBody = {
            firstName: fname,
            lastName: lname,
            email: email,
            password: password,
        };

        try {
            const response = await fetch('http://localhost:3000/api/v1/admin/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
                credentials: 'include'
            });

            const data = await response.json();
            if (response.ok) {
                console.log('User Created Successfully:', data);
                localStorage.setItem('token', data.token);
                navigate('/login'); // Navigate to the login page upon successful signup
            } else {
                console.log('Error:', data.message);
            }
        } catch (e) {
            console.log('Error Submitting the form:', e);
        }
    }

    return (
        <div className='bg-black'>
            <h2 style={fontMontserrat} className='pt-10 pb-2 text-5xl text-white '>Sign Up</h2>

            {toggle == 'Student' ? <form
                style={fontLora}
                onSubmit={handleSubmit}
                className=" max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg"
            >
                <div className='flex flex-row  justify-end gap-4 mb-4'>
                    <button onClick={() => { setToggle('Student'); }}
                        className={`${toggle == 'Student' ? 'underline ' : ''}`}
                    >Student</button>
                    <button onClick={() => { setToggle('Teacher'); }}
                        className={`${toggle == 'Teacher' ? 'underline ' : ''}`}
                    >Teacher</button>
                </div>
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
                        required
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
                :
                //Teacher
                <form
                    style={fontLora}
                    onSubmit={handleSubmitTeacher}
                    className=" max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg"
                >
                    <div className='flex flex-row  justify-end gap-4 mb-4'>
                        <button onClick={() => { setToggle('Student'); }}
                            className={`${toggle == 'Student' ? 'underline ' : ''}`}
                        >Student</button>
                        <button onClick={() => { setToggle('Teacher'); }}
                            className={`${toggle == 'Teacher' ? 'underline ' : ''}`}
                        >Teacher</button>
                    </div>
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
                            required
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

        </div>
    );
}

