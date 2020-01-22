import React from 'react'
import { connect } from 'react-redux';


function MealDetails(props) {
    console.log(props);
    const { meal } = props;

    if( meal ) {
        return (
            <div className="cotainer section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">Meal - {meal.name} Type - {meal.type} Calories - {meal.calories} </span>
                        <p>Step 1 Heat the butter in a large saucepan and add the leeks and bay leaf. Cook over a low heat for 8-10 mins or 
                            until the leek is really soft, then stir through the broccoli.
                        </p>
                        <p>Step 2 Pour over the stock and buttermilk and bring to the simmer, then gently bubble 
                            for 10-15 minutes until the broccoli is really tender.
                        </p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by: Maverick</div>
                        <div>2nd September, 2am</div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container center">
                <p>Loading project...</p>
            </div>
        )
    }
    
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id;
    const meals = state.meal.meals
    const meal = meals.find(meal => meal._id === id);
    console.log(meal);
    return {
        // meals: state.meal.meals.id
        meal: meal
    }
}

export default connect(mapStateToProps)(MealDetails);
