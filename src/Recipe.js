import React from 'react';
import style from './recipe.module.css';

const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className={style.recipe}>
            <h1 className={style.title}>{title}</h1>
            <p className={style.calories}>Calories: {calories}</p>
            <img src={image} alt={title} className={style.image} />
            <ul className={style.list}>
                {
                    ingredients.map((ingredient) => {
                        return (
                            <li className={style.listitems}>{ingredient.text}</li>
                        );
                    })
                }
            </ul>
        </div>
    )
}

export default Recipe
