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
            <div className="divContent">
                <h1 className='contentH1'>Plats de fruits de mer</h1>
                <div className="contentDiv1">
                    {meals.map((meal) => (
                    <div key={meal.idMeal} className="cardContent">
                        <img src={meal.strMealThumb} alt={meal.strMeal} className="imgContent"/>
                        <div className="contentDiv2">
                        <h3 className='contentH3'>{meal.strMeal}</h3>
                        <Link to={`/recipe/${meal.idMeal}`}>
                            <button className="btnContent">Voir la recette</button>
                        </Link>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
           <Footer className='footerContent'/>
        </>
    )
}