import { useEffect, useState } from "react";
import { CourseCard } from "./CourseCard";

export function Home() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/v1/course/all/preview', {
                    credentials: 'include'
                });

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
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
