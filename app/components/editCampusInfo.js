import React from 'react';
import { connect } from 'react-redux';
//import {postCampus} from '../store';

const EditCampusInfo = function(props){

  const {handleSubmit} = props;

  return (
    <form onSubmit = {handleSubmit}>
      <div>
        <label> Campus Name: </label>
        <input
          name="campusName"
          placeholder="Enter campus name"
          type="text"
        />
        <label> Description: </label>
        <input
          name="description"
          placeholder="Enter campus descrption"
          type="text"
        />
      </div>
      <div className="form-group">
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

const mapStateToProps = function(storeState, ownProps){
  const campusId = Number(ownProps.match.params.campusId);
  return {
    campus: storeState.compuses.find(campus => campus.id === campusId),
    enrolled: storeState.students.filter(student => student.campusId === campusId),
    unenrolled: storeState.students.filter(student => student.campusId !== campusId)
  }
}
const mapDispatchToProps = function(dispatch, ownProps){
  return {
    handleSubmit(event) {
      event.preventDefault();

      const campusName = event.target.campusName.value;
      const description = event.target.description.value;


      dispatch(postCampus({
        name: campusName,
        description
      }, ownProps.history));

    }
  }
}

export default connect(null, mapDispatchToProps)(NewCampusEntry);
