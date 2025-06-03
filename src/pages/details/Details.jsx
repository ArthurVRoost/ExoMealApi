import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

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
    <div className="recipe-details">
      <Link to="/">
        <button className="back-btn">
          Retour à l'accueil
        </button>
      </Link>
      
      <div className="recipe-header">
        <h1>{meal.strMeal}</h1>
        <img 
          src={meal.strMealThumb} 
          alt={meal.strMeal}
          className="recipe-image"
        />
      </div>

      <div className="recipe-info">
        <p><strong>Catégorie:</strong> {meal.strCategory}</p>
        <p><strong>Origine:</strong> {meal.strArea}</p>
        {meal.strTags && <p><strong>Tags:</strong> {meal.strTags}</p>}
      </div>

      <div className="ingredients-section">
        <h2>Ingrédients</h2>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      <div className="instructions-section">
        <h2>Instructions</h2>
        <p>{meal.strInstructions}</p>
      </div>

      {meal.strYoutube && (
        <div className="video-section">
          <h2>Vidéo</h2>
          <a href={meal.strYoutube} target="_blank" >
            Voir la vidéo sur YouTube
          </a>
        </div>
      )}
    </div>
  );
}