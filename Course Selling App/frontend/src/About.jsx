import about from "./assets/about.svg"
import mission from "./assets/mission.svg"
import { fontLora, fontMontserrat } from "./Style"
export function About() {
    return <div className=" p-5  ">
        <div className="flex flex-col md:flex-row md:items-start">
            {/* Text Section */}
            <div className="md:w-1/2 md:pr-10 p-5" >
                <h1 className="text-5xl text-white font-bold" style={fontMontserrat}>About Us</h1>
                <p className="text-xl text-white mt-6" style={fontLora}>
                    At Classify, we believe that learning should be accessible, affordable, and convenient. We connect you with passionate educators from around the globe, offering a wide range of courses across various fields. Whether you're here to acquire new skills or to share your knowledge, Classify is the perfect place to start your journey
                </p>
            </div>

            {/* Image Section */}
            <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
                <img className="w-full max-w-sm rounded-lg shadow-lg" src={about} alt="About Us Image" />
            </div>
        </div>

        <div className=" p-8 md:p-16 rounded-lg mt-10" >
            <div className="flex flex-col-reverse md:flex-row md:items-start">

                {/* Image Section */}
                <div className="md:w-1/2 flex justify-center md:justify-start md:pr-10 ">
                    <img className="w-full max-w-sm rounded-lg shadow-lg " src={mission} alt="About Us Image" />
                </div>

                {/* Text Section */}
                <div className=" mb-10 md:w-1/2 mt-10 md:mt-0">
                    <h1 className="text-5xl text-white font-bold" style={fontMontserrat}>Our Mission</h1>
                    <p className="text-xl text-white mt-6" style={fontLora}>
                        At Classify, our mission is to bridge the gap between knowledge seekers and expert educators. We aim to create a thriving community where high-quality, affordable education is accessible to everyone, empowering learners to pursue their passions, build new skills, and achieve their goals.
                    </p>
                </div>
            </div>
        </div>


    </div>


}