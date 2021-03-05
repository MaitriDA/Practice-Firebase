import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Signin from './Components/auth/Signin';
import Signup from './Components/auth/Signup';
import Dashboard from './Components/dashboard/Dashboard';
import Navbar from './Components/layout/Navbar';
import CreateProject from './Components/projects/createProject';
import ProjectDetails from './Components/projects/projectDetails';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route path='/project/:id' component={ProjectDetails}/>
            <Route path='/signin' component={Signin}/>
            <Route path='/signup' component={Signup}/>
            <Route path='/Create' component={CreateProject}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
