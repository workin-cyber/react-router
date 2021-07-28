import { NavLink } from 'react-router-dom'

export default function Menu() {
    return <nav>
        <NavLink activeClassName='active' to='/' exact >Home </NavLink>
        <NavLink activeClassName='active' to='/about' >About </NavLink>
        <NavLink activeClassName='active' to='/users' >Users </NavLink>
        <NavLink activeClassName='active' to='/aaa' >Blog </NavLink>
    </nav>
}