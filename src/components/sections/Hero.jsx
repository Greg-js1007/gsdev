import Chip from "../ui/Chip";


const Hero = () => {

    const chips = [
        {id: 1, number: "5+", text: "Proyectos" },
        {id: 2, number: "3+", text: "años de experiencia" },
    ]
    return(
        <section className="w-full md:w-3/5 pt-20">
            <div>
              Logo     
            </div>
            <div className="w-auto">
                <h2 className="text-4xl font-bold text-primary-tx">
                    Gregory <br /> Subero <span>.</span>
                </h2>
                <h1 className="text-lg text-primary-tx/80">
                    Software Developer 
                </h1>
            </div>
            <section className="w-auto pt-2.5">
                <div className="text-justify ">
                    <p className="text-sm leading-relaxed">Creando Experiencias Digitales, experiencias y soluciones from Caracas, Venezuela</p>
                    <br />
                    <p className="text-sm leading-relaxed">
                        Me apasiona convertir problemas en soluciones innovadoras a travez¡s de la tecnología. Soy T.S.U en informatica y llevo mas de 2 años trabajando como Desarrollador Web, donde he tenido la oportunidad de trabajar en diferentes tipos de proyectos, desde paginas web hasta aplicaciones web.
                    </p>
                </div>
            </section>
            <section className="flex flex-wrap gap-2 py-5">
                {chips.map((chip) => (
                    <Chip key={chip.id} number={chip.number} text={chip.text} />
                ))}
            </section>
                
        </section>
    )
}

export default Hero