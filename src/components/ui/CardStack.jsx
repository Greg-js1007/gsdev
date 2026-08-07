const CardStack = ({title, description, icon, label}) => {
    return (
        <div className="flex items-between gap-4 bg-bg-darks rounded-2xl p-6">
            <div className="bg-primary-tx/20 p-2 rounded-full">
                <img src={icon} alt={title} className="w-8 h-8" />
                <span className="text-xs text-secondary">{label}</span>
            </div>
            <div className="flex flex-col">
                <h3 className="text-primary-tx text-lg font-bold">{title}</h3>
                <p className="text-secondary text-sm">{description}</p>
            </div>
        </div>
    )
}
    
export default CardStack;