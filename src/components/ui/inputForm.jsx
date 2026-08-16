import { cn } from "../../lib/utils";

const inputForm = ({name, label, type, placeholder, className}) => {
    const isFullWidth = name === "asunto" || name === "mensaje"
    return (
        <div className={`${isFullWidth ? "col-span-full grid" : ""}` + "flex flex-col gap-2"}>
            <label htmlFor={name} className={`capitalize font-primary text-primary-tx/50 `}>{label}</label>
            <input type={type} id={name} name={name} placeholder={placeholder} className={cn("w-full h-10 p-2.5 text-primary-tx/50 border border-white/10 bg-slate-900/40 backdrop-blur-sm rounded-lg focus:border-secundary-tx transition-all duration-300 ease-in-out outline-none", className)} />
        </div>
    )
}

export default inputForm;