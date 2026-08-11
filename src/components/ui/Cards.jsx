const Cards = ({ children}) => {
    return (
        <div className={`flex flex-col items-start gap-4 bg-bg-darks/30 rounded-2xl p-5 border border-secondary ${borderHover}`}>
            {children}
        </div>
    )
}
    
export default Cards;