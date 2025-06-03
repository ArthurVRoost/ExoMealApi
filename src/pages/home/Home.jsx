import { Link } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import Nav from '../../components/nav/Nav'
import'./home.css'
import Mer from '/src/assets/img/mer.jpg'
import Pasta from '/src/assets/img/pasta.webp'
import Beef from '/src/assets/img/beef.jpeg'
export default function Home() {
    return(
        <>
            <Nav/>
            <h1 className='homeH1'>Choisis quel type de plat tu veux manger</h1>
            <div className='divHome '>
                <div className='cardContent'>   
                    <img className='imgHome' src={Mer} alt="" />
                    <div className='contentDiv2'>
                        <h3>Fruits de mer</h3>
                        <Link to="/content"><button className='btnContent btn'>MER</button></Link>
                    </div>
                </div>
                <div className='cardContent'>
                    <img className='imgHome' src={Pasta} alt="" />
                    <div className='contentDiv2'>
                        <h3>Pâtes</h3>
                        <Link to="/pasta"><button className='btnContent btn'>PASTA</button></Link>
                    </div>
                </div>
                <div className='cardContent'>
                    <img className='imgHome' src={Beef} alt="" />
                    <div className='contentDiv2'>
                        <h3>Beef</h3>
                        <Link to="/beef"><button className='btnContent btn'>BEEF</button></Link>
                    </div>
                </div>
            </div>
            
            
            <Footer/>
        </>
    )
}