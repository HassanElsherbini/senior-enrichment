import React from 'react';
import { connect } from 'react-redux';
import {postCampus} from '../store';

const NewCampusEntry = function(props){

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
