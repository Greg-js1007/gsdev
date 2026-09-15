import SocialLink from "../ui/SocialLinks";
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaRegEnvelope } from "react-icons/fa";

const Footer = () => {
    const social = [
        { id: 1, icon: FiGithub, url: "https://github.com/Greg-js1007" },
        { id: 2, icon: FiLinkedin, url: "https://www.linkedin.com/in/gregorysubero" },
        { id: 3, icon: FaRegEnvelope, url: "mailto:gsuberodev@gmail.com" },
    ]
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 justify-center">
            <div className="py-5">
                <div className="flex items-center gap-2">
                    <a href="" className="inline-flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-secundary-tx"></span>
                        Gregory Subero
                    </a>
                </div>
                <p className="w-full  text-primary-tx/50 text-sm font-mono">
                    FullStack Developer, construyendo experiencias digitales limpias, rápidas y con carácter desde Carrizal, Venezuela.
                </p>
            </div>
            <div className="gap-2 py-5 flex flex-col items-center">
                <h2 className="text-primary-tx">Redes</h2>
                <div className="lg:max-w-10 lg:flex lg:inline-flex gap-2 max-w-10 flex flex-col py-2">
                    {social.map((item) => (
                    <SocialLink key={item.id} icon={item.icon} url={item.url} />
                ))}
                </div>
                
            </div>
            <div className="inline-flex  py-5 flex flex-col gap-2">
                <h2 className="text-primary-tx">Legal</h2>
                <p className="lg:w-2/3 text-justify">Este sitio no utiliza cookies de rastreo. Los datos recopilados en el formulario de contacto se usan exclusivamente para responder mensajes y no se comparten con terceros.</p>
            </div>
            <div className="py-5">
                <h2 className="text-primary-tx">Seguridad</h2>
                <p className="lg:w-2/3 text-justify">Conexiones HTTPS/TLS en todo el sitio.</p>
                <p className="lg:w-2/3 text-justify">Sin trackers de terceros ni analytics invasivos.</p>
                <p className="lg:w-2/3 text-justify">Reporta vulnerabilidades: suberog010@gmail.com</p>
            </div>
            <div className="text-primary-tx py-5 col-span-full">Portfolio © v2026. Todos los derechos reservados. Hecho a mano con React, Tailwind Css.</div>
        </div>
    )
}

export default Footer;