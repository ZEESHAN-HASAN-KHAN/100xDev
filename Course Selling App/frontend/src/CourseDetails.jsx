import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import { fontLora, fontMontserrat } from "./Style";
export function CourseDetails() {
    const navigate = useNavigate();
    const { courseId } = useParams();
    const [course, setCourse] = useState({});
    const [purchased, setPurchased] = useState(false);

    useEffect(() => {
        const fetchCourse = async () => {
            //UnAuthenticated Route
            //We get the detail of Course
            const response = await fetch('http://localhost:3000/api/v1/course/' + courseId, {
                credentials: 'include'
            })

            const data = await response.json();
            //thats how we are getting the data 
            setCourse(data.course)
        }
        fetchCourse();
        //
        const userPurchased = async () => {
            const requestBody = { courseId: courseId }
            const response = await fetch('http://localhost:3000/api/v1/course/purchases', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
                credentials: 'include'
            })
            const data = await response.json();
            if (response.status == 400) {
                setPurchased(true);
            }
        }

        userPurchased();

    }, [])
    async function buyCourse() {

        const requestBody = { courseId: courseId }
        const response = await fetch('http://localhost:3000/api/v1/course/purchases', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
            credentials: 'include'
        })
        const data = await response.json();


        //After Buying this course We set Purchased to true
        //to render Course Content
        if (response.status == 404) {
            alert('You are not Log in')
        }
        if (response.status == 200) {
            setPurchased(true)
        }
        else if (response.status == 403) {
            alert('InSufficient Balance')
        }

    }
    return <div className="max-w-3xl mx-auto p-8 bg-gray-50 shadow-md rounded-lg mt-10">
        <h1 style={fontMontserrat} className="text-5xl font-bold text-center mb-6">Course Content</h1>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <img className="w-full h-60 rounded-lg object-cover mb-4" src={course.imageUrl} alt="Course Image" />
            <div className="flex justify-between items-center mb-4">
                <div>
                    <span style={fontMontserrat} className="text-xl font-semibold text-gray-800">Price: ${course.price}</span>
                    <span style={fontMontserrat} className="text-gray-500 line-through text-sm">${(course.price + course.price * 0.25).toFixed(2)}</span>
                </div>
                <span style={fontMontserrat} className="text-green-500 font-bold text-lg">25% Off</span>
            </div>
            {
                purchased == true ? <button onClick={() => {
                    navigate('/home')
                }} className="w-full py-3 rounded-md bg-black text-white transition duration-300">
                    <p style={fontLora} className="text-xl">  View Content</p>
                </button> : <button onClick={buyCourse} className="w-full py-3 rounded-md bg-black text-white transition duration-300">
                    <p style={fontLora} className="text-xl">  Buy Course</p>
                </button>
            }
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 style={fontMontserrat} className="text-3xl font-semibold italic mb-2">Course Description</h2>
            <p style={fontLora} className="text-gray-700">{course.description}</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 style={fontMontserrat} className="text-3xl font-semibold italic mb-2">Key Features</h2>
            <ul className="list-disc pl-5 text-gray-800">
                {course && course.keyFeatures && course.keyFeatures.length > 0 ? (
                    course.keyFeatures.map((feature, index) => (
                        <li style={fontLora} key={index} className="mb-2">{feature}</li>
                    ))
                ) : (
                    <li>No key features available</li>
                )}
            </ul>
        </div>
    </div>
}