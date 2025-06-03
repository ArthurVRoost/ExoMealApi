import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './details.css'
import Footer from '../../components/footer/Footer';
import Nav from '../../components/nav/Nav';
export default function Details() {
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(response => {
        setMeal(response.data.meals[0]);
        setLoading(false);
      })
      .catch(err => {
        setError('Erreur lors du chargement de la recette');
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>{error}</div>;
  if (!meal) return <div>Recette non trouvée</div>;

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients.push(`${measure} ${ingredient}`);
    }
  }

  return (
    <>
    <Nav/>
    <div className="divDetails">
      <Link to="/">
        <button className="btnBack">&larr;</button>
      </Link>
      
      <div className="detailsDiv1">
        <h1 className="detailsDiv1H1">{meal.strMeal}</h1>
        <img src={meal.strMealThumb} alt={meal.strMeal} className="detailsDiv1Img"/>
      </div>

      <div className="detailsDiv2">
        <p className="detailsDiv2P"><b className='detailsB'>Catégorie:</b> {meal.strCategory}</p>
        <p className="detailsDiv2P"><b className='detailsB'>Origine:</b> {meal.strArea}</p>
        {meal.strTags && <p className="detailsDiv2P" ><b className='detailsB'>Tags:</b> {meal.strTags}</p>}
      </div>

      <div className="detailsDiv3">
        <h2 className="detailsDiv3H2">Ingrédients</h2>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li className="detailsDiv3Li" key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      <div className="detailsDiv4">
        <h2 className="detailsDiv4H2">Instructions</h2>
        <p className="detailsDiv4P">{meal.strInstructions}</p>
      </div>

      {meal.strYoutube && (
        <div className="detailsDiv5">
          <h2 className="detailsDiv5H2">Vidéo</h2>
          <a className="detailsDiv5A" href={meal.strYoutube} target="_blank" >Clique ici pour la vidéo YouTube</a>
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
}