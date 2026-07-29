import Hero from "../components/sections/Hero";

const MainLayout  = ({children}) => {
    return (
        <div className="px-5 py-5">
            <header>
                {children}
            </header>
            <main>
                <Hero />
            </main>
            <footer>
                {children}
            </footer>
        </div>
    )
}
    
export default MainLayout; 
