const Button = ({icon, text}) => {
    return (
        <div className="pt-2.5">
            <button type="submit" className="flex justify-center items-center gap-2 border border-secundary-tx bg-secundary-tx/30  backdrop-blur-sm py-2 px-3 rounded-3xl w-full text-secundary-tx hover:border-secundary-tx/50 transition-all duration-300 ease-in-out cursor-pointer lg:w-auto lg:px-5 hover:scale-105 hover:bg-secundary-tx hover:text-stone-900">
                {icon}
                {text}
            </button>
        </div>
    )
}

export default Button;