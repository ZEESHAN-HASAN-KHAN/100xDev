import { useNavigate } from "react-router-dom"
import { fontLora, fontMontserrat } from "./Style";
export function CourseCard({ id, title, price, imageUrl, description }) {
    const navigate = useNavigate();

    return <>
        <div className="bg-gray-50  rounded-sm  ">
            <img
                src={imageUrl}
                alt={title}
                className="w-full h-48  "
            />
            <div className="p-6">
                <h3 style={fontMontserrat} className="text-md font-semibold mb-1 ">{title}</h3>
                {/* <p style={fontLora} className=" text-xs text-gray-600 mb-2">{description}</p> */}
                <div className="flex justify-between items-center m-1">
                    <div>
                        <span style={fontMontserrat} className="text-sm font-semibold text-gray-800">Price: ${price}</span>
                        <span style={fontMontserrat} className="text-gray-500 line-through text-[12px]">${(price + price * 0.25).toFixed(2)}</span>
                    </div>
                    <span style={fontMontserrat} className="text-green-500 font-semibold text-sm">25% Off</span>
                </div>

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