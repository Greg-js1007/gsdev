import Cards from "./Cards"
import Chip from "./Chip";
import { ArrowBigDown } from "lucide-react";
const CardProjects = ({date, title, description, skills, link}) => {
    return( 
        <Cards>
            <div className="flex justify-between">
                <p>{date}</p>
                <a href={link}>
                    <ArrowBigDown className="text-primary-tx/50" />
                </a>
            </div>
            <h2>
                {title}
            </h2>
            <p>
                {description}
            </p>
            {skills.map((skill, id) => (
                <Chip text={skill} key={id} />
            ))}
        </Cards>
    )
}

export default CardProjects; 