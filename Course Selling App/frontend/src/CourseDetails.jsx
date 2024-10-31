import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import { fontLora, fontMontserrat } from "./Style";
export function CourseDetails() {

    const { courseId } = useParams();
    const [course, setCourse] = useState({});

    useEffect(() => {
        const fetchCourse = async () => {
            const response = await fetch('http://localhost:3000/api/v1/course/' + courseId, {
                credentials: 'include'
            })

            const data = await response.json();

            setCourse(data.course)
            console.log(course)
        }
        fetchCourse()
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


        // If you already purchase the course show that you have purchased the course
        //other wise redirect it to the courseContent
        console.log('Response ' + JSON.stringify(response.status))
        console.log("Data is here" + JSON.stringify(data));
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
            <button onClick={buyCourse} className="w-full py-3 rounded-md bg-black text-white transition duration-300">
                <p style={fontLora} className="text-xl">  Buy Course</p>
            </button>
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

    // return <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
    //     <div className="flex flex-col">
    //         <h1 className="text-4xl font-bold italic text-center mb-5 text-violet-600">Course Content</h1>

    //         <div className="flex flex-col items-center">
    //             <img className="w-full h-64 rounded-xl shadow-md mb-4 object-cover" src={course.imageUrl} alt="Course Image" />
    //             <div className="flex flex-row justify-between items-center w-full mb-4">
    //                 <div className="flex flex-col">
    //                     <span className="text-lg font-semibold text-gray-800">Price: ${course.price}</span>
    //                     <s className="text-gray-500 text-sm">${(course.price + course.price * 0.25).toFixed(2)}</s>
    //                 </div>
    //                 <span className="text-green-500 font-bold">25% off</span>
    //             </div>
    //             <button className="mt-2 rounded-md py-2 px-4 bg-violet-500 text-white hover:bg-violet-600 transition duration-300 shadow-md">
    //                 Buy Course
    //             </button>
    //         </div>

    //         <div className="border border-violet-300 rounded-lg p-4 mt-5 bg-violet-50">
    //             <h1 className="font-semibold text-2xl italic">Course Description</h1>
    //             <span className="text-gray-700">{course.description}</span>
    //         </div>

    //         <div className="mt-5">
    //             <h2 className="text-2xl italic text-violet-600">Key Features</h2>
    //             <ul className="list-disc pl-5 italic text-gray-800">
    //                 {course && course.keyFeatures && course.keyFeatures.length > 0 ? (
    //                     course.keyFeatures.map((feature, index) => (
    //                         <li key={index}>{feature}</li>
    //                     ))
    //                 ) : (
    //                     <li>No key features available</li>
    //                 )}
    //             </ul>
    //         </div>
    //     </div>
    // </div>

    // return <div>
    //     <div className="flex flex-col">
    //         <h1 className="text-3xl italic mb-5 ">Course Content</h1>
    //         <div className="flex flex-col ">
    //             <img className="w-90 h-80 rounded-xl" src={course.imageUrl}></img>
    //             <div className="flex flex-row justify-between">
    //                 <div>
    //                     <span className="font-bold">Price ${course.price} </span>
    //                     <s className="text-gray-600">${(course.price) + (course.price) * 0.25}</s>
    //                 </div>
    //                 <span className="text-green-500">25% off</span>
    //             </div>
    //             <button className="rounded-sm p-2 bg-violet-400 w-fit text-white hover:bg-violet-600" onClick={buyCourse}>Buy Course</button>
    //         </div>
    //         <div className="border border-violet-300 rounded mt-5">

    //             <h1 className="italic font-sans text-2xl">Course Description</h1>
    //             <span>{course.description}</span>
    //         </div>
    //         <div>
    //             <h2 className="text-2xl italic">Key Features</h2>
    //             <ul className="list-disc pl-4 italic">
    //                 {course && course.keyFeatures && course.keyFeatures.length > 0 ? (
    //                     course.keyFeatures.map((topic, index) => (
    //                         <li key={index}>{topic}</li>
    //                     ))
    //                 ) : (
    //                     <li>No key features available</li> // Fallback message if no key features
    //                 )}
    //             </ul>
    //         </div>
    //         {/* {JSON.stringify(course.keyFeatures)} */}

    //     </div>
    // </div>
}