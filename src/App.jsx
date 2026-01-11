import { Route, Router, Routes } from "react-router-dom"
import HomePage from "./components/HomePage"
import Projects from "./components/Projects"
import HomePageLayout from "./components/HomePage"
import AboutMe from "./components/AboutMe"
import Contacts from "./components/Contacts"

function App() {

    return (
        <>
            <Routes>
                <Route element={<HomePageLayout />}>
                    <Route path="/" element={<AboutMe />}></Route>
                    <Route path="projects" element={<Projects />}></Route>
                    <Route path="contacts" element={<Contacts />}></Route>
                </Route>
            </Routes>
        </>
    )
}

export default App
