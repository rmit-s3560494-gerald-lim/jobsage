import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import {ProtectedAdminRoute} from './Protected.Admin.route';
import {ProtectedEmployerRoute} from './Protected.Employer.route';
import {ProtectedEmployeeRoute} from './Protected.Employee.route';
import {ProtectedSharedRoute} from './Protected.Shared.route';

import EmployerHome from './EmployerHome';
import EmployeeHome from './EmployeeHome';
import AdminLogin from './AdminLogin';
import JobsList from './JobsList';
import CreateJobs from './CreateJobs';
import EditJobs from './EditJobs';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import JobSeekerProfile from './JobSeekerProfile';
import AdminHomePage from './AdminHomePage';
import AdminRemoveUsers from './AdminRemoveUsers';
import DBQuery from './DBQuery';
import KNNTest from './KNNTest'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <ProtectedAdminRoute path='/adminremoveusers' component={AdminRemoveUsers} />
          <ProtectedAdminRoute exact path='/adminhomepage' component={AdminHomePage}/>

          <ProtectedEmployerRoute path='/add' component={CreateJobs} />
          <ProtectedEmployerRoute exact path='/employerhome' component={EmployerHome} />
          <ProtectedEmployerRoute path="/edit/:id" component={EditJobs} />

          <ProtectedEmployeeRoute path='/jobseekerprofile' component={JobSeekerProfile}/>
          <ProtectedEmployeeRoute exact path='/employeehome' component={EmployeeHome} />

          <ProtectedSharedRoute path='/jobs' component={JobsList} />

          <Route path='/adminlogin' component={AdminLogin}/>
          <Route path='/signup' component={SignUpPage} />
<<<<<<< HEAD
          <Route exact path='/login' component={LoginPage} />
          <Route path='/signup' component={SignUpPage} />
          <Route path='/jobseekerprofile' component={JobSeekerProfile}/>
          <Route path='/adminhomepage' component={AdminHomePage}/>
          <Route path='/dbtest' component={DBQuery}/>
          <Route path='/knn' component={KNNTest}/>

          {/* <Route path='/profile' component={ProfilePage} /> */}
=======
          <Route path='/' component={LoginPage} />
          <Route path='/login' component={LoginPage} />
>>>>>>> 5ad5de3fb0893fed25603aea47bbc411d39d7b84
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
