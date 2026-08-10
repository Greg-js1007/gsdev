import Cards from "../ui/Cards";
import { Boxes, Palette, CodeXml, Sparkles, Database } from 'lucide-react';

const TechStack = () => {
    const Stacks = [
        { title: "React / Next.js", description: "Interfaces declarativas, escalables y de alto rendimiento.", icon: Boxes, label: "Frontend Core",color: "text-icon-card-1", borderHover: "hover:border-secundary-tx" },
        {title: "TypeScript", description: "Tipado seguro que reduce bugs y mejora el desarrollo", icon: CodeXml, label: "Code Safe",color: "text-icon-card-2", borderHover: "hover:border-icon-card-2"},
        {title: "Node.js / Express", description: "Construye APIs rápidas y escalables con entornos robustos.", icon: Database, label: "Backend - APIs", color: "text-icon-card-1", borderHover: "hover:border-secundary-tx"},
        {title: "Tailwind", description: "Diseño rápido y responsivo con un sistema de clases consistente.", icon: Palette, label: "Styling System", color: "text-icon-card-2", borderHover: "hover:border-icon-card-2"}, 
        {title: "Performance", description: "Optimización para experiencias rápidas y fluidas.", icon: Sparkles, label: "Web Vitals", color: "text-icon-card-1", borderHover: "hover:border-secundary-tx"}
    ]
    return (
        <div className="py-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary text-start"><span className="text-primary-tx">Un stack afilado</span> <br />  para proyectos con carácter.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
                {Stacks.map((stack, index) => (
                    <Cards key={index} {...stack} />
                ))}
            </div>
        </div>
    )
}

export default TechStack