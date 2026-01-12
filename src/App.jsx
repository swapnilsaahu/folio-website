import { Route, Router, Routes } from "react-router-dom"
import HomePage from "./components/HomePage"
import Projects from "./components/Projects"
import HomePageLayout from "./components/HomePage"
import AboutMe from "./components/AboutMe"
import Contacts from "./components/Contacts"
import { useEffect, useState } from "react"
import { BarLoader, SyncLoader } from "react-spinners"

function App() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000)
    }, [])


    return (
        <>
            {loading ? <div className="flex h-screen items-center justify-center">
                <BarLoader />
            </div>
                :
                <Routes>
                    <Route element={<HomePageLayout />}>
                        <Route path="/" element={<AboutMe />}></Route>
                        <Route path="projects" element={<Projects />}></Route>
                        <Route path="contacts" element={<Contacts />}></Route>
                    </Route>
                </Routes>
            }
        </>
    )
}

export default App
