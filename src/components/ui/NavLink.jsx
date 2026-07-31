

const NavLink = ({href, children, number}) => {
    return(
        <ul>
            <li className="border-b border-primary-tx/50">
                <span>
                    {number}
                </span>
                <a href={href} className="capitalize text-2xl py-2.5 font-semibold">{children}</a>
            </li>
        </ul>
    )
}

export default NavLink;