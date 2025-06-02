import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
export default function Footer() {
    return(
        <>
            <footer className='divFooter'>
                
                
                
                <div className='footerDiv1'>
                    <h3 className='footerDiv1H3'>À propos</h3>
                    <p className='footerDiv1P'>
                    Recettes Maison est un site dédié aux amoureux de la cuisine fait maison.
                    Découvrez des recettes simples, rapides et savoureuses pour tous les
                    goûts.
                    </p>
                </div>
                <div className='footerDiv2'>
                    <h3 className='footerDiv1H3'>Liens utiles</h3>
                    <div className='footerDiv2Div'>
                        <Link className='link' to="/"><p className='footerDiv2P'><span className='footerPoint'>&bull;</span>Home</p></Link>
                        <Link className='link' to="/about"><p className='footerDiv2P'><span className='footerPoint'>&bull;</span>About</p></Link>
                        <Link className='link' to="/contact"><p className='footerDiv2P'><span className='footerPoint'>&bull;</span>Contact</p></Link>
                    </div>
                    
                </div>
                <div className='footerDiv3'>
                    <h3 className='footerDiv1H3'>Suivez-nous</h3>
                    <Link className='link' to="https://www.facebook.com/"><FontAwesomeIcon className='footerDiv3I fb' icon={faFacebookF} /></Link>
                    <Link className='link' to="https://x.com/"><FontAwesomeIcon className='footerDiv3I' icon={faTwitter} /></Link>
                    <Link className='link' to="https://www.instagram.com/"><FontAwesomeIcon className='footerDiv3I' icon={faInstagram} /></Link>
                    <Link className='link' to="https://github.com/ArthurVRoost"><FontAwesomeIcon className='footerDiv3I' icon={faGithub} /></Link>
                    
                </div>
                
    

            </footer>   
            <div className='footerDiv4'>
                    <p className='footerDiv4P'>© Arthur Van Roost 2025.</p>
            </div>
        </>
    )
}