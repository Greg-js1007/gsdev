const CardStack = ({title, description, icon, label}) => {
    const Icon = icon;
    return (
        <div className="flex flex-col items-start gap-4 bg-bg-darks/30 rounded-2xl p-6 border border-secondary ">
            <div className="w-full flex gap-2 justify-between items-center">
                <Icon className="w-8 h-8 text-secundary-tx" />
                <span className="text-xs text-secondary font-secondary">{label}</span>
            </div>
            <div className="flex flex-col gap-2">
                <h3 className="text-primary-tx text-lg font-semibold font-primary">{title}</h3>
                <p className="text-secondary text-sm font-primary">{description}</p>
            </div>
        </div>
    )
}
    
export default CardStack;