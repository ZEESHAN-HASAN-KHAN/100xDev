import { useEffect, useState } from "react"
import { CourseCard } from "./CourseCard";
import { fontLora } from "./Style";
export function Courses() {
    const [course, setCourse] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/v1/course/all/preview');

                if (!response.ok) {
                    throw new Error('Failed to fetch courses');
                }
                const data = await response.json();

                setCourse(data.courses || []);
                setLoading(false)
            } catch (error) {
                console.error('Error fetching course data:', error);
            }
        };

        fetchCourses();
    }, [])
    return <div className="container bg-gray-950 mx-auto p-10  "> <h2 style={fontLora} className="text-5xl text-gray-100">Our Courses</h2>
        <div className="grid grid-cols-1 mt-8 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {loading == false ? (
                course.map((course) => (
                    <CourseCard key={course._id} id={course._id} title={course.title} price={course.price} imageUrl={course.imageUrl} description={course.description} />
                ))
            ) : (
                <p className="text-white">Loading courses...</p>
            )}
        </div></div>
}