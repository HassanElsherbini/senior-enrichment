import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './home';
import CampusList from './campusList';
import SingleCampus from './singleCampus';
import StudentList from './studentList';
import SingleStudent from './singleStudent';
import NewStudentEntry from './newStudentEntry';
import EditStudentInfo from './editStudentInfo';
import NewCampusEntry from './newCampusEntry';
//import EditCampusInfo from './editCampusInfo';
import NavBar from './navBar';

import {store, fetchStudents, fetchCampuses} from '../store';

export default class Main extends Component{
  componentDidMount(){
    store.dispatch(fetchStudents());
    store.dispatch(fetchCampuses());
  }
  render(){
    return (
      <div>
        <NavBar />

        <Switch>
          <Route exact path='/' component={Home}></Route>

          <Route exact path='/campuses' component={CampusList}></Route>
          <Route exact path= '/campuses/add' component={NewCampusEntry}></Route>
          <Route exact path= '/campuses/:campusId' component={SingleCampus}></Route>
          {/* <Route exact path= '/campuses/:campusId/edit' component={EditCampusInfo}></Route> */}


          <Route exact path='/students' component={StudentList}></Route>
          <Route exact path= '/students/add' component={NewStudentEntry}></Route>
          <Route exact path= '/students/:studentId' component={SingleStudent}></Route>
          <Route exact path= '/students/:studentId/edit' component={EditStudentInfo}></Route>

        </Switch>
      </div>
    )
  }

}
