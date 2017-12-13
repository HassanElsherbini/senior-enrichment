import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import StudentsPresentation from './studentsPresentation';


class SingleCampus extends Component{

  componentDidMount(){}

  render(){

    const {campusStudents} = this.props;
    const {name, description, id} = this.props.selectedCampus;
    return (
      <div>
        <div> <h1> {name} </h1> </div>
        <div> <label>Description: </label> {description}</div>
        <div>
        <StudentsPresentation students={campusStudents} displayDelete={false}/>
        </div>
        <NavLink to={`/campuses/${id}/edit`}> <button> <span>EDIT</span></button></NavLink>
      </div>
    )
  }

}

function mapStateToProps (storeState, ownProps){
  let campusId = Number(ownProps.match.params.campusId);
  //console.log(campusId, storeState.campuses);
  const selectedCampus = storeState.campuses.find(campus => campusId === campus.id);

  const campusStudents = storeState.students
                         .filter(student => student.campusId === selectedCampus.id);

  return {
    selectedCampus,
    campusStudents
  };
}


const SingleCampusContainer = connect(mapStateToProps)(SingleCampus);

export default SingleCampusContainer;
