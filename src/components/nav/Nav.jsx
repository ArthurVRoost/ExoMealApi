import { Link, NavLink } from 'react-router-dom'
import './nav.css'

export default function Nav() {
    return(
        <>
            <nav className='navDiv'>
                <NavLink className={({ isActive }) => isActive ? "link active" : "link"} to="/"><p className='navP'>Home</p></NavLink>
                <NavLink className={({ isActive }) => isActive ? "link active" : "link"} to="/about"><p className='navP'>About</p></NavLink>
                <NavLink className={({ isActive }) => isActive ? "link active" : "link"} to="/contact"><p className='navP'>Contact</p></NavLink>
                
            </nav>
        </>
    )
}