import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Footer from '../../components/footer/Footer'
import Nav from '../../components/nav/Nav'
import './beef.css'

export default function Beef() {
    const [meals, setMeals] = useState([]);
    const [filteredMeals, setFilteredMeals] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef')
            .then(response => {
                setMeals(response.data.meals);
                setFilteredMeals(response.data.meals);
                setLoading(false);
            })
            .catch(err => {
                setError('Erreur lors du chargement des plats');
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        const filtered = meals.filter(meal =>
            meal.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredMeals(filtered);
    }, [searchTerm, meals]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    if (loading) return <div>Chargement...</div>;
    if (error) return <div>{error}</div>;

    return(
        <>
            <Nav/>
            <div className="divContent">
                <h1 className='contentH1'>Plats de Beef</h1>
                
                
                <div className="searchContainer">
                    <input
                        type="text"
                        placeholder="Rechercher un plat..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="searchInput"
                    />
                </div>

                <div className="contentDiv1">
                    {filteredMeals.length > 0 ? (
                        filteredMeals.map((meal) => (
                            <div key={meal.idMeal} className="cardContent">
                                <img src={meal.strMealThumb} alt={meal.strMeal} className="imgContent"/>
                                <div className="contentDiv2">
                                    <h3 className='contentH3'>{meal.strMeal}</h3>
                                    <Link to={`/recipe/${meal.idMeal}`}>
                                        <button className="btnContent">Voir la recette</button>
                                    </Link>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="noResults">
                            <p>Aucun plat trouvé pour "{searchTerm}"</p>
                        </div>
                    )}
                </div>
            </div>
            <Footer className='footerContent'/>
        </>
    )
}