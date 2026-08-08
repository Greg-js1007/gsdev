import CardStack from "../ui/CardStack";
import { Boxes } from 'lucide-react';

const TechStack = () => {
    const Stacks = [
        { title: "React / Next.js", description: "Interfaces declarativas, escalables y de alto rendimiento.", icon: Boxes, label: "Frontend Core" },
        {title: "TypeScript", description: "Tipado seguro que reduce bugs y mejora el desarrollo", icon: Boxes, label: "Code Safe"},
        {title: "Node.js / Bun", description: "Construye APIs rápidas y escalables con entornos robustos.", icon: Boxes, label: "Runtime Core"},
        {title: "Tailwind", description: "Diseño rápido y responsivo con un sistema de clases consistente.", icon: Boxes, label: "Styling System"}
        
    ]
    return (
        <div className="pt-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary text-start"><span className="text-primary-tx">Un stack afilado</span> <br />  para proyectos con carácter.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
                {Stacks.map((stack, index) => (
                    <CardStack key={index} {...stack} />
                ))}
            </div>
        </div>
    )
}

export default TechStack