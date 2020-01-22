import React from 'react'

const MealSummary = ( {meal}) => {
    
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{meal.name}</span>
                <p>Type: {meal.type}</p>
                <p>Calories: {meal.calories}</p>
                <p className="grey-text">3rd September, 2am</p>
            </div>
        </div>
    )
}

export default MealSummary;