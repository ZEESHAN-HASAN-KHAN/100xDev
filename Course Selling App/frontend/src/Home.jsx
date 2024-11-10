import { useEffect, useState } from "react";
import { CourseCard } from "./CourseCard";
import { fontLora, fontMontserrat } from "./Style";
import l1 from './assets/l1.svg'
import { useRecoilValue } from 'recoil';
import { userAtom } from './store/atom/userAtom';
import { useNavigate } from 'react-router-dom'
import { About } from "./About";
import { Contact } from "./Contact";
export function Home() {
    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const user = useRecoilValue(userAtom);
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
        <div className=" container bg-gray-950 mx-auto p-4 ">
            <div className="bg-gray-950 mb-10 flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8">
                <div className="text-center sm:text-left max-w-lg">
                    <p style={fontLora} className="text-4xl text-gray-50 font-semibold leading-tight mb-4">
                        Unlock Your Potential with Next-Gen Learning – Where Education Meets Innovation.
                    </p>


                    {user && user.role == 'admin' ?
                        <>
                            <p style={fontLora} className="text-xl text-gray-50 mb-6 italic">
                                Start Teaching Today
                            </p>
                            <button onClick={() =>
                                navigate('/addCourse')
                            } className="bg-black text-gray-50 bg-gray-600 py-3 px-5 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                                <span style={fontLora}>Add Course</span></button></>
                        : <>
                            <p style={fontLora} className="text-xl text-gray-50 mb-6 italic">
                                Start Learning Today
                            </p>
                            {/* We need to check wheather user is loged in or not */}
                            {user && user.firstName ? <button onClick={() => {
                                navigate('/myCourses')
                            }} className="bg-black text-gray-50 bg-gray-600 py-3 px-5 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                                <span style={fontLora}>View Course</span>
                            </button> :
                                <button onClick={() => {
                                    navigate('/login')
                                }} className="bg-black text-gray-50 bg-gray-600 py-3 px-5 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                                    <span style={fontLora}>Join Now</span>
                                </button>
                            }
                        </>
                    }
                </div>
                <div>
                    <img className="w-full max-w-xs sm:max-w-sm  rounded-lg " src={l1} alt="EdTech Image" />
                </div>
            </div>
            <h2 style={fontLora} className="text-5xl text-gray-100">Our Courses</h2>
            <div className="grid grid-cols-1 mt-8 md:grid-cols-2 lg:grid-cols-3 gap-6 p-7">
                {loading == false ? (
                    courses.map((course) => (
                        <CourseCard key={course._id} id={course._id} title={course.title} price={course.price} imageUrl={course.imageUrl} description={course.description} />
                    ))
                ) : (
                    <p className="text-white">Loading courses...</p>
                )}
            </div>
            <About />
            <Contact />
        </div>
    );
}
