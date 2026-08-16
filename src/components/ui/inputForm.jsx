import { cn } from "../../lib/utils";

const inputForm = ({name, label, type, placeholder, className}) => {
    const isFullWidth = name === "asunto" || name === "mensaje"
    return (
        <div className={`${isFullWidth ? "col-span-full grid" : ""}` + " flex flex-col gap-2"}>
            <label htmlFor={name} className={`uppercase font-secondary text-xs text-primary-tx/50 pt-2.5`}>{label}</label>
            <input type={type} id={name} name={name} placeholder={placeholder} className={cn("w-full h-10 p-2.5 text-primary-tx font-mono text-sm border border-white/10 bg-slate-950 backdrop-blur-sm rounded-lg focus:border-secundary-tx transition-all duration-300 ease-in-out outline-none", className)} />
        </div>
    )
}

export default inputForm;