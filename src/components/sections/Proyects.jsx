import CardProjects from "../ui/CardProjects";
import { ShoppingBag } from 'lucide-react';
const Projects = () => {

    const projects = [
        {
            id: 1, 
            date: '2025-01',
            title: "Ecommerce Premium",
            description: "Plataforma de e-commerce y gestión integrado y personalización de productos.",
            icon: ShoppingBag,
            link: "https://github.com/GSUBERO/SastreriaPremium",
            skills: ['React.js', 'Taiwlind', 'Framer']
               
        }, 
        {
            id: 2, 
            date: '2025-10',
            title: "Hotel Gatuno",
            description: "Pagina web para presentar los servicios de un hotel para gatos",
            icon: ShoppingBag,
            link: "https://www.hotelgatuno.com/m",
            skills: ['Astro', 'Taiwlind', 'React.js']
               
        },

    ]
    return (
        <div className="py-10">
            <div className="pb-5">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-tx text-start">Projects</h2>
            </div>
            <section className="flex flex-col gap-7 w-full">
                {projects.map((project, id) => (
                    <CardProjects 
                        key={id} 
                        {...project}
                    />
                ))}
            </section>
        </div>
    )
}

export default Projects