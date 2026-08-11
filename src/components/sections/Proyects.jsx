import Cards from "../ui/Cards"
import { ShoppingBag } from 'lucide-react';
const Projects = () => {

    const projects = [
        {
            title: "Ecommerce Premium",
            description: "Plataforma de e-commerce y gestión integrado y personalización de productos.",
            icon: ShoppingBag,
            label: "https://github.com/GSUBERO/SastreriaPremium",
               
        }
    ]
    return (
        <div className="py-10">
            <div className="pb-5">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-tx text-start">Projects</h2>
            </div>
            <section>
                {projects.map((project, id) => (
                    <Cards 
                        key={id} 
                        {...project}
                    />
                ))}
            </section>
        </div>
    )
}

export default Projects