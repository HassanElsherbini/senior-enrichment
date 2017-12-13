import React from 'react';
import { connect } from 'react-redux';
import {postStudent, updateStudent} from '../store';

const EditStudentInfo = function(props){
  const {handleSubmit, student, studentCampus} = props;
  console.log(studentCampus.name);
  return (

    <form onSubmit = {handleSubmit}>
      <div>
        <label> First Name: </label>
        <input
          name="firstName"
          type="text"
          defaultValue= {student.firstName}
        />
        <label> Last Name: </label>
        <input
          name="lastName"
          defaultValue= {student.lastName}
          type="text"
        />
        <label> Email: </label>
        <input
          name="email"
          defaultValue= {student.email}
          type="email"
        />
        <label> Gpa: </label>
        <input
          name="gpa"
          defaultValue= {student.gpa}
          type="number"
          step="0.01"
          min="0"
          max="4"
        />
        <label> Campus: </label>
        <select defaultValue={studentCampus.id} name="campus" >
          {props.campusList.map(campus => {
            return <option key={campus.id} value={campus.id} >
                   {campus.name} </option>;
          })
          }
        </select>
      </div>
      <div className="form-group">
        <button type="submit">submit</button>
      </div>
    </form>
  );
}

const mapStateToprops = function(storeState, ownProps){
  const studentId = Number(ownProps.match.params.studentId);
  const selectedStudent = storeState.students.find(
    student => student.id === studentId);

  const studentCampus = storeState.campuses.find(
                campus => campus.id === selectedStudent.campusId);
  return {
    campusList: storeState.campuses,
    student: selectedStudent,
    studentCampus
  }
};

const mapDispatchToProps = function(dispatch, ownProps){
  return {
    handleSubmit(event) {
      event.preventDefault();

      const firstName = event.target.firstName.value;
      const lastName = event.target.lastName.value;
      const email = event.target.email.value;
      const gpa = event.target.gpa.value;
      const campusId = Number(event.target.campus.value);

      dispatch(updateStudent({
        id: Number(ownProps.match.params.studentId),
        firstName,
        lastName,
        email,
        gpa,
        campusId,
        fullName: firstName + ' ' + lastName
      }, ownProps.history));


    }
  }
}

export default connect(mapStateToprops, mapDispatchToProps)(EditStudentInfo);
