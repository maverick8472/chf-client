import React from 'react'


import MealSummary from './MealSummary';
import { Link } from 'react-router-dom';

const MealsList = ( { meals }) => {
    
    return (
        
        <div className="project-list section">
            {meals && meals.map(meal =>{
                // console.log(meal)
                return (
                    <Link to={'/meal/' + meal._id} key={meal._id}>
                        <MealSummary meal={meal}></MealSummary>
                    </Link>
                    
                )
            })}
            
        </div>
    )
}

export default MealsList;