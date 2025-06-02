import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Footer from '../../components/footer/Footer'
import Nav from '../../components/nav/Nav'
import './content.css'

export default function Content() {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
      .then(response => {
        setMeals(response.data.meals);
        setLoading(false);
      })
      .catch(err => {
        setError('Erreur lors du chargement des plats');
        setLoading(false);
      });
  }, []);

    if (loading) return <div>Chargement...</div>;
    if (error) return <div>{error}</div>;
    return(
        <>
        <Nav/>
            <div className="content">
                <h1>Plats de fruits de mer</h1>
                <div className="meals-grid">
                    {meals.map((meal) => (
                    <div key={meal.idMeal} className="meal-card">
                        <img src={meal.strMealThumb} alt={meal.strMeal} className="meal-image"/>
                        <div className="meal-info">
                        <h3>{meal.strMeal}</h3>
                        <Link to={`/recipe/${meal.idMeal}`}>
                            <button className="details-btn">Voir la recette</button>
                        </Link>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
           <Footer/>
        </>
    )
}