
const SocialLink = ({icon: Icon, url}) => {
    return(
        <ul className="flex">
            <li className="w-full h-full p-2 rounded-full flex items-center justify-center border border-primary-tx/50 hover:bg-primary-bg transition-all duration-200">
                <a href={url} target="_blank" rel="noopener noreferrer" ><Icon style={{color: "white",opacity: "10"}} /></a>
            </li>
        </ul>
    )
}

export default SocialLink;