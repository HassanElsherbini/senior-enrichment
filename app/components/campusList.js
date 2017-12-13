import React, { Component } from 'react';
import {connect} from 'react-redux';
import {removeCampus} from '../store';
import {NavLink} from 'react-router-dom';


class CampusList extends Component{

  componentDidMount(){
    // console.log(this.props)
    // this.props.loadCampuses();
  }
  render(){
      const {handleClick} = this.props;
    return (
      <div>
        <ul>
        {this.props.campuses.map( (campus) => {
          return <li key={campus.id}> <NavLink to={`/campuses/${campus.id}`} >
          {campus.name} </NavLink>

          <button onClick={() => handleClick(campus)}><span>-</span></button>
          </li>;
        })}
        </ul>

        <NavLink to={'/campuses/add'}> <button>ADD</button> </NavLink>
      </div>
    );
  }
}

function mapStateToProps (storeState){
  return {
    campuses: storeState.campuses
  };
}

function mapDispatchToProps (dispatch){
  return {
    handleClick: function(campus){
      dispatch(removeCampus(campus));
    }
  };
}

const CampusListContainer = connect(mapStateToProps, mapDispatchToProps)(CampusList);

export default CampusListContainer;
