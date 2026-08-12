const Cards = ({ children}) => {
    return (
        <div className={`flex flex-col items-start gap-5 border border-white/10 bg-slate-900/40 backdrop-blur-sm rounded-2xl p-5 lg:max-w-3xl`}>
            {children}
        </div>
    )
}
    
export default Cards;