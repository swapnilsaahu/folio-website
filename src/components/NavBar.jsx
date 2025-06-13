import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";

const items = [
    { label: "Github", icon: <FaGithub />, href: "https://github.com/swapnilsaahu" },
    { label: "Linkedin", icon: <FaLinkedin />, href: "https://linkdein.com/swapnilsaahu" },
    { label: "X", icon: <FaXTwitter />, href: "https://x.com/swapnilsaahu" },
    { label: "Mail", icon: <MdOutlineMailOutline />, href: "mailto:swapnilvp846@gmail.com?subject=Hi&body=Let's%20connect!" },
    { label: "Resume", icon: <IoDocumentTextOutline /> },
];

const NavBar = () => {
    return (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 rounded-xl shadow-md bg-gray-200 z-50">
            <div className="flex p-3 space-x-4">
                {items.map(({ label, icon, href }, index) => (
                    <a key={index}
                        href={href} target="_blank" className="relative group">
                        <p className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 text-sm transition transform opacity-0 group-hover:-translate-y-1 group-hover:opacity-100 text-center">
                            {label}
                        </p>
                        <div className="text-4xl transition transform hover:-translate-y-3 hover:shadow-xl">
                            {icon}
                        </div>
                    </a>
                ))}
            </div >
        </div>
    );
}


export default NavBar;
