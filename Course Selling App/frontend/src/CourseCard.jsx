import { useNavigate } from "react-router-dom"
import { fontLora, fontMontserrat } from "./Style";
export function CourseCard({ id, title, price, imageUrl, description }) {
    const navigate = useNavigate();

    return <>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <img
                src={imageUrl}
                alt={title}
                className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-6">
                <h3 style={fontMontserrat} className="text-2xl font-bold mb-2 ">{title}</h3>
                <p style={fontLora} className=" text-xs text-gray-600 mb-4">{description}</p>
                <span style={fontMontserrat} className="text-lg font-semibold text-gray-800">Price: ${price}</span>
                <br />
                <button onClick={() => {
                    navigate('/courseDetails/' + id);
                }}
                    className="bg-black text-white py-3 px-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
                    <p style={fontLora} className="text-xl"> View Course</p>
                </button>
            </div>
        </div>

        {/* <div

            className="bg-white shadow-md rounded-lg overflow-hidden"
        >
            <img
                src={imageUrl}
                alt={title}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-700 mb-4">{description}</p>
                <span>Price ${price}</span>
                <br />
                <button onClick={() => {
                    navigate('/courseDetails/' + id);
                }}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
                    View Course</button>

            </div>
        </div> */}
    </>
}