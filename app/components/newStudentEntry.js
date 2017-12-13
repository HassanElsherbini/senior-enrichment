import React from 'react';
import { connect } from 'react-redux';
import {postStudent} from '../store';
const NewStudentEntry = function(props){

  const {handleSubmit} = props;

  return (
    <form onSubmit = {handleSubmit}>
      <div>
        <label> First Name: </label>
        <input
          name="firstName"
          placeholder="Enter student first name"
          type="text"
        />
        <label> Last Name: </label>
        <input
          name="lastName"
          placeholder="Enter student last name"
          type="text"
        />
        <label> Email: </label>
        <input
          name="email"
          placeholder="Enter student email"
          type="email"
        />
        <label> Gpa: </label>
        <input
          name="gpa"
          placeholder="Enter student gpa"
          type="number"
          step="0.01"
          min="0"
          max="4"
        />
        <label> Campus: </label>
        <select name="campus">
          {props.campusList.map(campus => {
            return <option key={campus.id} value={campus.id}>
                   {campus.name} </option>;
          })
          }
        </select>
      </div>
      <div className="form-group">
        <button type="submit">Add</button>
      </div>
    </form>
  );
}

const mapStateToprops = function(storeState){
  return {
    campusList: storeState.campuses
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

      dispatch(postStudent({
        firstName,
        lastName,
        email,
        gpa,
        campusId
      }, ownProps.history));


    }
  }
}

export default connect(mapStateToprops, mapDispatchToProps)(NewStudentEntry);
