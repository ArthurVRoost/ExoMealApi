import Footer from '../../components/footer/Footer'
import Nav from '../../components/nav/Nav'
import './about.css'

export default function About() {
    return(
        <>
            <Nav/>
             <div className="about-container">
                <h1 className="about-title">About</h1>
                <p className="about-paragraph">
                    Bienvenue sur <strong>Chez Arthur</strong>, un site dédié à la cuisine maritime.
                </p>
                <p className="about-paragraph">
                    Je m'appelle Arthur, passionné par la mer, la pêche et les bons petits plats. J'ai créé ce site pour partager mes recettes préférées à base de poissons, fruits de mer et autres délices marins.
                </p>
                <p className="about-paragraph">
                    Mon objectif est simple : faire découvrir ou redécouvrir les saveurs de l'océan, avec des recettes accessibles à tous, inspirées de la tradition comme de la créativité.
                </p>
                <p className="about-paragraph">
                    Merci de votre visite et bon appétit !
                </p>
            </div>
            <Footer/>
        </>
    )
}