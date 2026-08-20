import { cn } from "../../lib/utils";

const inputForm = ({ name, label, type, placeholder, className, register, error }) => {
    const isFullWidth = name === "asunto" || name === "mensaje";
    return (
        <div
            className={
                `${isFullWidth ? "col-span-full grid" : ""}` + " flex flex-col gap-2"
            }
        >
            <label
                htmlFor={name}
                className={`uppercase font-secondary text-xs text-primary-tx/50 pt-2.5`}
            >
                {label}
            </label>
            {type === "textarea" ? (
                <textarea
                    name={name}
                    id={name}
                    placeholder={placeholder}
                    {...register(name)}
                    className={cn(
                        "w-full h-10 p-2.5 text-primary-tx font-mono text-sm border border-white/10 bg-slate-950 backdrop-blur-sm rounded-lg focus:border-secundary-tx transition-all duration-300 ease-in-out outline-none min-h-28 max-h-28 min-w-full max-w-full  resize-none",
                        className,
                    )}
                />
            ) : (
                <input
                    type={type}
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    {...register(name)}
                    className={cn(
                        "w-full h-10 p-2.5 text-primary-tx font-mono text-sm border border-white/10 bg-slate-950 backdrop-blur-sm rounded-lg focus:border-secundary-tx transition-all duration-300 ease-in-out outline-none",
                        className,
                    )}
                />
            )}
            {error && (
                <span className="text-xs text-red-400 font-mono">
                    {error.message}
                </span>
            )}
        </div>
    );
};

export default inputForm;
