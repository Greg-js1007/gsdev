
const Chip = ({number, text}) => {
    return (
        <section>
            <div className="rounded-lg flex gap-2">
                <h2 className="text-lg text-primary-tx/80">{number}</h2>
                <p className="text-sm text-primary-tx/80">{text}</p>
            </div>
        </section>
    )
}

export default Chip;