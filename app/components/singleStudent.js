import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

class SingleStudent extends Component{
  componentDidMount(){}

  render(){

    const {firstName, lastName, email, gpa, id} = this.props.selectedStudent;
    const {campus} = this.props;

    return (
      <div>
        {/* <div> <h1> {name} </h1> </div> */}
        <div> <label>First Name: </label> {firstName}</div>
        <div> <label>Last Name: </label> {lastName}</div>
        <div> <label>Email: </label> {email}</div>
        <div> <label>GPA: </label> {gpa}</div>
        <div> <label>Campus: </label>
            { campus && <NavLink to={`/campuses/${campus.id}`}>
            {campus.name} </NavLink> }
        </div>
        <NavLink to={`/students/${id}/edit`}> <button> <span>EDIT</span></button></NavLink>
      </div>
    )
  }

}

function mapStateToProps (storeState, ownProps){
  const studentId = Number(ownProps.match.params.studentId);
  const selectedStudent = storeState.students.find(
    student => student.id === studentId);

  const studentCampus = storeState.campuses.find(
                campus => campus.id === selectedStudent.campusId);

  return {
    selectedStudent,
    campus: studentCampus
  };
}



const SingleStudentContainer = connect(mapStateToProps)(SingleStudent);

export default SingleStudentContainer;
