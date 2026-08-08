import Hero from "../components/sections/Hero";
import Navbar from "../components/sections/Navbar";
import TechStack from "../components/sections/TechStack";

const MainLayout  = ({children}) => {
    return (
        <div className="w-full mx-auto min-w-xs lg:max-w-full">
            <header>
                <Navbar />
            </header>
            <main className="px-5 lg:flex gap-10">
                <Hero />
                <TechStack />
            </main>
            <footer className="px-5">
                {children}
            </footer>
        </div>
    )
}
    
export default MainLayout; 
