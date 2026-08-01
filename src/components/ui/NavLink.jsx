

const NavLink = ({href, children, number}) => {
    return(
        <ul>
            <li className="border-b border-primary-tx/50 flex items-center gap-2.5">
                <span className="text-gray-300 text-sm">
                    {number}
                </span>
                <a href={href} className="capitalize text-2xl py-2.5 font-semibold text-primary-tx transition-all ease-in-out duration-300 hover:text-secundary-tx focus:text-secundary-tx">{children}</a>
            </li>
        </ul>
    )
}

export default NavLink;