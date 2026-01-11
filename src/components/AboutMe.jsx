import character from "../assets/Gemini_Generated_Image_k009p8k009p8k009-Photoroom(1).png"
const AboutMe = () => {
    return (
        <div className="flex items-center m-6 text-2xl">
            <div>
                <p>Hi, I'm</p>
                <div className="flex">
                    <h3 className="text-8xl">Swapnil Sahu</h3>
                    <img src={character} className="h-50 hover:bg-blue-400" />
                </div>
                <h3>Full Stack Developer</h3>
                <p className="text-lg mt-2">I’m a full-stack dev into building products that actually work. I like working across the whole stack—designing APIs, building interfaces, and making sure everything connects smoothly. I’m always learning something new, usually by diving head-first into a project to see how far I can take an idea.</p>
            </div>
        </div>
    )
}
export default AboutMe;
