import { useEffect, useState } from "react";

export function Home() {
    const [courses, setCourses] = useState([]);

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
            } catch (error) {
                console.error('Error fetching course data:', error);
            }
        };

        fetchCourses();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.length > 0 ? (
                    courses.map((course) => (
                        <div
                            key={course._id}
                            className="bg-white shadow-md rounded-lg overflow-hidden"
                        >
                            <img
                                src={course.imageUrl}
                                alt={course.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                                <p className="text-gray-700 mb-4">{course.description}</p>
                                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
                                    Price</button>

                            </div>
                        </div>
                    ))
                ) : (
                    <p>Loading courses...</p>
                )}
            </div>
        </div>
    );
}
