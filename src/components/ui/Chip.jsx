
const Chip = ({number = "", text}) => {
    return (
        <div className="rounded-2xl gap-2 items-center border inline-flex px-2 py-1.5 border-secundary-tx bg-blue-900/50">
            <h2 className="text-[10px] text-secundary-tx">{number}</h2>
            <p className="text-[10px] text-secundary-tx text-center">{text}</p>
        </div>
    )
}

export default Chip;