import Hero from "../components/sections/Hero";
import Navbar from "../components/sections/Navbar";
import TechStack from "../components/sections/TechStack";
import Projects from "../components/sections/Proyects";
import Contact from "../components/sections/Contact";

const MainLayout  = ({children}) => {
    return (
        <div className="w-full mx-auto min-w-xs lg:max-w-full">
            <main className="flex flex-col px-5 lg:flex lg:flex-row gap-20 lg:px-20">
                <Hero />
                <div className="flex flex-col">
                    <TechStack />
                    <Projects />
                    <Contact />
                </div>
            </main>
            <footer className="px-5">
            </footer>
        </div>
    )
}
    
export default MainLayout; 
