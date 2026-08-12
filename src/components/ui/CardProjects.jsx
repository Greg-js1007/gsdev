import { ArrowUpRight} from "lucide-react";
import Cards from "./Cards";
import Chip from "./Chip";
const CardProjects = ({ date, title, description, skills, link }) => {
  return (
    <Cards>
      <div className="w-full">
        <div className="flex justify-between ">
          <p className="text-xs">{date}</p>
          <a href={link}>
            <ArrowUpRight className="text-primary-tx/50" />
          </a>
        </div>
        <h2 className="text-3xl lg:text-4xl text-primary-tx font-primary font-bold py-2">{title}</h2>
        <p className="py-2.5 text-sm">{description}</p>
        <div className="flex gap-2 py-2.5">
          {skills.map((skill, id) => (
            <Chip text={skill} key={id} />
          ))}
        </div>
      </div>
    </Cards>
  );
};

export default CardProjects;
