import Cards from "./Cards";
const CardSkill = ({ title, description, icon: Icon, color, label }) => {
  return (
      <Cards>
        <div className="w-full flex gap-2 justify-between items-center">
          <Icon className={`w-8 h-8 ${color}`} />
          <span className="text-xs text-secondary font-secondary">{label}</span>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-primary-tx text-lg font-semibold font-primary">
            {title}
          </h3>
          <p className="text-secondary text-sm font-primary">{description}</p>
        </div>
      </Cards>
  );
};

export default CardSkill;
