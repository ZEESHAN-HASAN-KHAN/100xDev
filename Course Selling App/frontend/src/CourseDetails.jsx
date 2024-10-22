import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export function CourseDetails() {
    const { courseId } = useParams();
    const [course, setCourse] = useState({});
    useEffect(() => {
        const fetchCourse = async () => {
            const response = await fetch('http://localhost:3000/api/v1/course/' + courseId, {
                credentials: 'include'
            })
            const data = await response.json();
            console.log(`Testing ` + JSON.stringify(data.course));
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

        console.log("Data is here" + data);
    }
    return <div>
        <div className="bg-blue-100">
            <h2>{course.title}</h2>
            <button onClick={buyCourse}>{course.price}</button>
        </div>
    </div>
}