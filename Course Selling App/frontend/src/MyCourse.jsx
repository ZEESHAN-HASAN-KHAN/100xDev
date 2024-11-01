import { useEffect, useState } from "react";
import { fontLora } from "./Style";
import { CourseCard } from "./CourseCard";
export function MyCourse() {
    const [courses, setCourses] = useState([])
    const [loading, setLoading] = useState(true);

    async function fetchCourse() {
        const response = await fetch('http://localhost:3000/api/v1/user/purchases',
            {

                credentials: 'include'
            }
        )
        const data = await response.json();
        console.log('MyCourse' + JSON.stringify(data));
        setCourses(data.courseData);
        setLoading(false)
    }
    useEffect(() => {

        fetchCourse();
    }, [])
    return <div>
        <h2 className=" mt-8 text-5xl text-gray-800" style={fontLora}>
            My Course

        </h2>
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
}