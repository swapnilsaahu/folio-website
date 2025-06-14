import HeroSection from "./components/HeroSection"
import NavBar from "./components/NavBar"
import TechStack from "./components/TechStack"
import FeaturedProjects from "./components/FeaturedProjects"
import FooterComponent from "./components/FooterComponent"

function App() {

    return (
        <>
            <div className="bg-gray-300 scroll-smooth">
                <HeroSection />
                <NavBar />
                <TechStack />
                <FeaturedProjects />
                <FooterComponent />
            </div>

        </>

    )
}

export default App
