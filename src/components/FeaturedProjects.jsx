import commonroom from "../assets/commonroomprojectgif.gif";
const FeaturedProjects = () => {
    const items = [
        { title: "commonroom", desc: "chatroom were people can create their own private rooms,and users can join private rooms by room key", techStack: ["reactjs", "mongodb", "nodejs", "expressjs", "tailwindcss", "websockets", "redis"], liveLink: "", github: "https://github.com/swapnilsaahu/commonroom", img: `${commonroom}` },
        {
            title: "commonroom", desc: "chatroom were people can create their own private rooms,and users can join private rooms by room key", techStack: ["reactjs", "mongodb", "nodejs", "expressjs", "tailwindcss", "websockets", "redis"], liveLink: "", github: "https://github.com/swapnilsaahu/commonroom", img: ""
        }

    ]
    return (
        <div>
            <h3 className="text-5xl font-bold text-center my-5">Projects: </h3>
            <div className="flex justify-center items-center flex-wrap md:flex-nowrap mx-10 md:mx-20 lg:mx-30 "> {items.map(({ title, desc, techStack, liveLink, github, img }, index) => (
                <div key={index} className="py-5 px-5 bg-gray-200 m-2 gap-2">
                    <img src={img} className="h-30 md:60 lg:h-100 border-e-red-400  rounded-xl " />
                    <p className="font-bold text-balance text-xl my-2">{title}</p>
                    <div className="max-w-3/4">
                        <p>{desc}</p>
                        <div className="flex flex-wrap my-4">
                            {techStack.map((tech, idx) => (
                                <span key={idx} className="bg-black text-white p-1 m-1">{tech}</span>
                            ))}
                        </div>

                        <a key={index} href={github} className="bg-black text-white p-2 mr-2" > github</a>
                        <a href="">livelink</a>
                    </div>
                </div>


            ))}
            </div>
        </div >
    )
}
export default FeaturedProjects;
