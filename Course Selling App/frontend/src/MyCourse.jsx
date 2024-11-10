import { useEffect, useState } from "react";
import { fontLora } from "./Style";
import { CourseCard } from "./CourseCard";
import { useRecoilValue } from 'recoil';
import { userAtom } from './store/atom/userAtom';
export function MyCourse() {
    const user = useRecoilValue(userAtom);
    const [courses, setCourses] = useState([])
    const [loading, setLoading] = useState(true);

    async function fetchUserCourse() {
        const response = await fetch('http://localhost:3000/api/v1/user/purchases',
            {

                credentials: 'include'
            }
        )
        const data = await response.json();

        setCourses(data.courseData);
        setLoading(false)
    }
    async function fetchAdminCourse() {
        const response = await fetch('http://localhost:3000/api/v1/admin/course/bulk',
            {

                credentials: 'include'
            }
        )
        const data = await response.json();

        setCourses(data.courseData);
        setLoading(false)
    }
    useEffect(() => {
        if (user && user.role == "admin") {
            fetchAdminCourse();
        }
        else {


            fetchUserCourse();
        }
    }, [])
    return <div>
        <h2 className=" mt-8 text-5xl text-white" style={fontLora}>
            My Course

        </h2>
        <div className="grid grid-cols-1 mt-8 md:grid-cols-2 lg:grid-cols-3 gap-6 p-9">
            {loading == false ? (courses.length == 0) ? <>No Courses</> : <>{courses.map((course) => (
                <CourseCard key={course._id} id={course._id} title={course.title} price={course.price} imageUrl={course.imageUrl} description={course.description} buy={true} />
            ))}</>


                : (
                    <p>Loading courses...</p>
                )}
        </div>
    </div>
}