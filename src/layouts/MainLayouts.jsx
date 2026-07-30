import Hero from "../components/sections/Hero";
import Navbar from "../components/sections/Navbar";

const MainLayout  = ({children}) => {
    return (
        <div className="w-full mx-auto max-w-xs">
            <header>
                <Navbar />
            </header>
            <main className="px-5">
                <Hero />
            </main>
            <footer className="px-5">
                {children}
            </footer>
        </div>
    )
}
    
export default MainLayout; 
