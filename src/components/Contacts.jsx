import github from "../assets/icons/github.svg"
const socials = [
    { id: 1, name: "github", link: "https://github.com/swapnilsaahu", img: { github } },
    { id: 2, name: "linkedin", link: "https://linkedin.com/in/swapnilsaahu", img: {} },
    { id: 3, name: "swapnilvp846@gmail.com", link: "mailto:swapnilvp846@gmail.com", img: {}, meta: "" },
    { id: 4, name: "resume", link: "https://drive.google.com/file/d/1Dc9r8n-Zpf3bvQAifFW62I69M3sdb4EO/view?usp=sharing", img: {}, meta: "" }


]
const Contacts = () => {
    return (
        <div className="flex flex-col m-4 justify-center items-center gap-2">
            {socials.map((x) => (
                <div key={x.id} className="" >
                    <a href={x.link} target="_blank" rel="noopener" className="text-4xl hover:underline">{x.name}</a>
                </div>
            ))}
        </div>
    )
}
export default Contacts;
