import SocialLink from "../ui/SocialLinks";
import { FiGithub, FiLinkedin} from 'react-icons/fi';
import { FaRegEnvelope } from "react-icons/fa";

const Footer = () => {
    const social = [
            {id: 1, icon: FiGithub, url: "https://github.com/Greg-js1007"},
            {id: 2, icon: FiLinkedin, url: "https://www.linkedin.com/in/gregorysubero"},
            {id: 3, icon: FaRegEnvelope, url: "mailto:gsuberodev@gmail.com"},
        ]
    return (
        <footer>
            <div>
                <span className="text-secundary-tx text-3xl">.</span><p>Gregory S.</p>
                <p className="w-full lg:w-1/2 text-primary-tx/50 text-sm font-mono">
                    FullStack Developer, construyendo experiencias digitales limpias, rápidas y con carácter desde Carrizal, Venezuela.
                </p>
            </div>
            <div>
                <h2>Redes</h2>
                {social.map((item) => (
                    <SocialLink key={item.id} icon={item.icon} url={item.url} />
                ))}
            </div>
            <div>
                <h2>Legal</h2>
                <a href="">Terminos y condiciones</a>
                <a href="">Politica de privacidad</a>
            </div>
            <div>Portfolio © v2026. Todos los derechos reservados. Hecho a mano con React, Tailwind Css.</div>
        </footer>
    )
}

export default Footer;