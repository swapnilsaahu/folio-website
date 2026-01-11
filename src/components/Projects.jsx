import ProjectItem from "./ProjectItem";

const projDetails = [
    { id: 1, title: "querynote", desc: "A full-stack semantic note-taking platform that converts text and images into an AI-searchable knowledge base using embeddings, OCR, and a RAG pipeline for accurate contextual retrieval.", techstack: "React, TypeScript, Zustand, Node.js, Express, PostgreSQL, pgvector, Gemini OCR, Embedding Models, RAG, Cloudinary, JWT, REST APIs, Git", github: "https://github.com/swapnilsaahu/query-note", live: "https://query-note.website" },
    { id: 2, title: "commonroom", desc: "A real-time collaborative chat application built with WebSockets, featuring secure authentication, multi-room messaging, and production-ready deployment using Docker and AWS.", techstack: "React, Node.js, Express, MongoDB, WebSockets, JWT, bcrypt, Docker, GitHub Actions, AWS EC2, Nginx, REST APIs, Git", github: "https://github.com/swapnilsaahu/commonroom", live: "" },
    { id: 3, title: "ai inident response system", desc: "An AI-powered emergency response app that uses QR verification, GPS geofencing, and vision-language models to enhance tourist safety and enable real-time SOS alerts in high-risk zones.", techstack: "React Native, Expo, TypeScript, NativeWind, Node.js, Express, Prisma ORM, PostgreSQL, PostGIS, Gemini Vision-Language Model, QR Scanning, GPS Geofencing, Twilio, REST APIs, Git", github: "", live: "" }
]
const Projects = () => {
    return (
        <div className="overflow-auto">
            {projDetails.map((p) => (
                <div key={p.id} className="flex m-4 justify-between border-2 p-2">
                    <div>
                        <p className="text-2xl">{p.title}</p>
                        <p>{p.desc}</p>
                        <p className="mt-2 underline">Tech stack:</p>
                        <p className="font-bold">{p.techstack}</p>
                    </div>
                    <div className="flex gap-2 underline">
                        <a href={p.github} target="_blank" rel="noopener" >gtihub</a>
                        <a href={p.live} target="_blank" rel="noopener" >live</a>
                    </div>
                </div>
            ))}
        </div >
    )
}
export default Projects;
