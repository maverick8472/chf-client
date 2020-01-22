import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import {connect} from 'react-redux';


import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import MealDetails from './components/meals/MealDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';
import CreateMeal from './components/meals/CreateMeal';

import { loadUser } from './store/actions/authActions';


class App extends Component {

  componentDidMount () {
    this.props.loadUser();
  }

 

  render () {

    return (
      <div className="App">
          <Navbar></Navbar>
          <Switch>
            <Route exact path='/' component={Dashboard}></Route>
            <Route path='/project/:id' component={ProjectDetails}></Route>
            <Route path='/meal/:id' component={MealDetails}></Route>
            <Route path='/signin' component={SignIn}></Route>
            <Route path='/signup' component={SignUp}></Route>
            <Route path='/create' component={CreateProject}></Route>
            <Route path='/createmeal' component={CreateMeal}></Route>
          </Switch>
        </div>
      
    );
  }
}

const mapDispatchToProps = dispatch => {
  return{
    loadUser: () => dispatch(loadUser())
  };
};
export default withRouter(connect(null, mapDispatchToProps)(App));
