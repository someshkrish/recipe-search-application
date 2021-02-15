import React from 'react';
import style from './recipe.module.css';

const Recipe = (props)=>{
    return(
        <div className={style.recipe}>
            <h1>{props.title}</h1>
            <ul>
                {props.ingredients.map((ingredient,index) => (
                    <li key={index}>{ingredient.text}</li>
                ))}
            </ul>
            <p>{props.calories}</p>
            <img className={style.image} src={props.image} alt=""/>
        </div>
    );
}

export default Recipe;