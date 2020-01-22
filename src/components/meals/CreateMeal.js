import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMeal } from '../../store/actions/mealActions';

class CreateMeal extends Component {

    state = {
        name: '',
        type: '',
        calories: ''
    }

    

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.addMeal(this.state)
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create new Meal</h5>
                    <div className="input-field">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="type">Type</label>
                        <input type="text" id="type" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="calories">Calories</label>
                        <input type="number" id="calories" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMeal: (meal) => dispatch(addMeal(meal))
    }
}

export default connect(null, mapDispatchToProps)(CreateMeal);
