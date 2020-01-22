import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import MealsList from '../meals/MealsList';

import { connect } from 'react-redux'
import { getMeals } from '../../store/actions/mealActions';

class Dashboard extends Component {

    componentDidMount() {
        this.props.getMeals();
    }


    render () {
        // console.log(this.props);
        const { projects, meals } = this.props;
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects}></ProjectList>
                    </div>
                    <div className="col s12 m6">
                        <MealsList meals={meals} ></MealsList>
                    </div>
                    {/* <div className="col s12 m5 offset-m1">
                        <Notifications></Notifications>
                    </div> */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.project.projects,
        meals: state.meal.meals
    }
}

export default connect(mapStateToProps,{getMeals})(Dashboard);