import { ArrowBigDown } from "lucide-react";

const Link = ({toRef}) => {
    return (
        <div>
            <a href={toRef} className="text-primary-tx">
                <ArrowBigDown />
            </a>
        </div>
    )
}

export default Link;