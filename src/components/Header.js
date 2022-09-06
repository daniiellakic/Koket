import React from 'react'
import { getMainRecipes, getOtherRecipes } from '../services/recipes.service';

function Header() {
  const mainRecipes = getMainRecipes();
  const otherRecipes = getOtherRecipes();

  return (
    <section className="header__wrapper">

      <div className="header__item__large">
      {
          mainRecipes.map((recipe) => (
            <a href={"https://www.koket.se"+ recipe.url} key={recipe.id}>
              <div className="header__item">
                <img src={recipe.image.url} alt="Köket recepter" />
                <h3 className="item__text">{recipe.image.name}</h3>
              </div>
            </a>
          ))
      }
      </div>

      <div className="header__item__small">
        {
          otherRecipes.map((recipe) => (
            <a href={"https://www.koket.se"+ recipe.url} key={recipe.id}>
              <div className="header__item">
                <img src={recipe.image.url} alt="Köket recepter" />
                <h3 className="item__text">{recipe.image.name}</h3>
                {recipe.sponsored && <div className='item__sponsor'>Sponsored</div>}
              </div>
            </a>
          ))
        }
      </div>

    </section>
  );
}

export default Header