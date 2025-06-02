import { Link } from 'react-router-dom'
import './nav.css'

export default function Nav() {
    return(
        <>
            <nav className='navDiv'>
                <Link className="link" to="/"><p className='navP'>Home</p></Link>
                <Link className="link" to="/about"><p className='navP'>About</p></Link>
                <Link className="link" to="/contact"><p className='navP'>Contact</p></Link>
                
            </nav>
        </>
    )
}