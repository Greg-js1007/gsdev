const Cards = ({ children, borderHover}) => {
    return (
        <div className={`flex flex-col items-start gap-5 border border-white/10 bg-slate-900/40 backdrop-blur-sm rounded-2xl p-5 lg:max-w-3xl 
        ${borderHover ? borderHover : "hover:border-secundary-tx"} transition-all duration-300 ease-in-out`}>
            {children}
        </div>
    )
}
    
export default Cards;