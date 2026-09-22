import { useState, useEffect } from 'react';
import CardProjects from "../ui/CardProjects";
import { ShoppingBag } from 'lucide-react';

const Projects = () => {
  const [urlHotel, setUrlHotel] = useState("https://www.hotelgatuno.com/");

  useEffect(() => {
    const urlPrincipal = "https://www.hotelgatuno.com/";
    const urlBackup = "https://hotelgatuno.vercel.app/";

    // Verificamos si la web principal está activa
    fetch(urlPrincipal, { method: "HEAD", mode: "no-cors" })
      .catch(() => {
        // Si hay error de red o el hosting está caído, cambiamos a Vercel
        setUrlHotel(urlBackup);
      });
  }, []);

  const projects = [
    {
      id: 1, 
      date: '2025-01',
      title: "Ecommerce Premium",
      description: "Plataforma de e-commerce y gestión integrado y personalización de productos.",
      icon: ShoppingBag,
      link: "https://github.com/GSUBERO/SastreriaPremium",
      skills: ['React.js', 'Tailwind', 'Framer']
    }, 
    {
      id: 2, 
      date: '2025-10',
      title: "Hotel Gatuno",
      description: "Pagina web para presentar los servicios de un hotel para gatos",
      icon: ShoppingBag,
      link: urlHotel,
      skills: ['Astro', 'Tailwind', 'React.js']
    },
  ];

  return (
    <div className="py-10">
      <div className="pb-5">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-tx text-start">Projects</h2>
      </div>
      <section className="flex flex-col gap-7 w-full">
        {projects.map((project) => (
          <CardProjects 
            key={project.id} 
            {...project}
          />
        ))}
      </section>
    </div>
  );
};

export default Projects;