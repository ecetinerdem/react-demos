import React from 'react'
import '../style/styleMeals.css'
import axios from 'axios'
import { useState, useEffect } from 'react'

export const Meals = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        axios
            .get('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then((response) => {
                console.log(response.data.categories);
                setMeals(response.data.categories);
            }).catch((error) => {
                console.log(error);
            })
    }, [])

    const displayMeals = meals.map(({idCategory, strCategory,strCategoryThumb}) => {
        return (
            <section className='card'>
                <img src={strCategoryThumb} alt={strCategory} />
                <section className='content'>
                    <p>{strCategory}</p>
                    <p>Category ID: #{idCategory}</p>
                </section>
            </section>
        )
    })
  return (
    <div className='items-container'>
        {displayMeals}
    </div>
  )
}
