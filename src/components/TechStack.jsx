import {
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaReact,
    FaNodeJs,
    FaLinux,
} from "react-icons/fa";
import {
    SiTailwindcss,
    SiMongodb,
    SiExpress,
    SiRedis,
    SiCplusplus,
    SiTypescript,
    SiC,
} from "react-icons/si";

const TechStack = () => {
    const items = [
        { label: "HTML", icon: <FaHtml5 /> },
        { label: "CSS", icon: <FaCss3Alt /> },
        { label: "JavaScript", icon: <FaJsSquare /> },
        { label: "Tailwind CSS", icon: <SiTailwindcss /> },
        { label: "ReactJS", icon: <FaReact /> },
        { label: "MongoDB", icon: <SiMongodb /> },
        { label: "Node.js", icon: <FaNodeJs /> },
        { label: "Express", icon: <SiExpress /> },
        { label: "Redis", icon: <SiRedis /> },
        { label: "Linux", icon: <FaLinux /> },
        { label: "C++", icon: <SiCplusplus /> },
        { label: "TypeScript", icon: <SiTypescript /> },
        { label: "C", icon: <SiC /> },
    ];
    return (
        <div className="overflow-hidden">
            <h3 className="text-5xl font-bold w-screen text-center">Tech Stack:</h3>
            <div className="flex flex-wrap m-10 md:mx-100 p-1 md:p-5 ">
                {items.map(({ label, icon }, index) => (
                    <div key={index} className="flex m-2 p-1 md:p-3 bg-gray-200 rounded-2xl transition transform hover:-translate-y-2 hover:shadow-2xs">
                        <div className="text-2xl md:text-4xl mt-1 md:mt-0">
                            {icon}
                        </div>
                        <p className="text-xl md:text-3xl font-semibold mt-1 ml-1 mr-1">{label}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default TechStack;
