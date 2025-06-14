import { FaExclamationCircle } from "react-icons/fa"
import HeroSection from "./components/HeroSection"
import NavBar from "./components/NavBar"
import TechStack from "./components/TechStack"
import FeaturedProjects from "./components/FeaturedProjects"

function App() {

    return (
        <>
            <div className="bg-gray-300 ">
                <HeroSection />
                <NavBar />
                <TechStack />
                <FeaturedProjects />

            </div>

        </>

    )
}

export default App
