import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchStudents, removeStudent} from '../store';

import {NavLink} from 'react-router-dom';
import StudentsPresentation from './studentsPresentation';

class StudentList extends Component{

  componentDidMount(){

  }
  render(){
    const {students, handleClick} = this.props;

    return (
      <div>
        <StudentsPresentation students = {students} handleClick={handleClick} displayDelete={true}/>

        <NavLink to={'/students/add'}> <button>ADD</button> </NavLink>
     </div>
    );
  }
}

function mapStateToProps (storeState){
  return {
    students: storeState.students
  };
}

function mapDispatchToProps (dispatch){
  return {
    loadStudents: function(){
      dispatch(fetchStudents());
    },
    handleClick: function(student){
      // console.log('deletestudent', student);
      dispatch(removeStudent(student));
    }
  };
}


const StudentListContainer = connect(mapStateToProps, mapDispatchToProps)(StudentList);

export default StudentListContainer;
