
const SocialLink = ({icon: Icon, url}) => {
    return(
        <ul className="flex">
            <li className="w-full h-full p-2 rounded-full flex items-center justify-center border border-primary-tx/50 hover:border-secundary-tx transition-all duration-300 ease-out hover:translate-x-1 hover:translate-y-1">
                <a href={url} target="_blank" rel="noopener noreferrer" className="cursor-pointer text-primary-tx/50  hover:text-primary-tx" >
                    <Icon />
                </a>
            </li>
        </ul>
    )
}

export default SocialLink;