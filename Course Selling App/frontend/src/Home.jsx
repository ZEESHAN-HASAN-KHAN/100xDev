import { useEffect, useState } from "react";
import { CourseCard } from "./CourseCard";
import { fontLora, fontMontserrat } from "./Style";
import l1 from './assets/l1.svg'
export function Home() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/v1/course/all/preview');

                if (!response.ok) {
                    throw new Error('Failed to fetch courses');
                }
                const data = await response.json();

                setCourses(data.courses || []);
                setLoading(false)
            } catch (error) {
                console.error('Error fetching course data:', error);
            }
        };

        fetchCourses();
    }, []);

    return (
        <div className=" container mx-auto p-4 ">
            <div className="mb-10 flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8">
                <div className="text-center sm:text-left max-w-lg">
                    <p style={fontLora} className="text-4xl text-gray-700 font-semibold leading-tight mb-4">
                        Unlock Your Potential with Next-Gen Learning – Where Education Meets Innovation.
                    </p>
                    <p style={fontLora} className="text-xl text-gray-500 mb-6 italic">
                        Let’s get Started
                    </p>
                    <button className="bg-black text-white py-3 px-5 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                        <span style={fontLora}>Get Started</span>
                    </button>
                </div>
                <div>
                    <img className="w-full max-w-xs sm:max-w-sm  rounded-lg " src={l1} alt="EdTech Image" />
                </div>
            </div>
            <h2 style={fontLora} className="text-5xl text-gray-800">Our Courses</h2>
            <div className="grid grid-cols-1 mt-8 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {loading == false ? (
                    courses.map((course) => (
                        <CourseCard key={course._id} id={course._id} title={course.title} price={course.price} imageUrl={course.imageUrl} description={course.description} />
                    ))
                ) : (
                    <p>Loading courses...</p>
                )}
            </div>
        </div>
    );
}
