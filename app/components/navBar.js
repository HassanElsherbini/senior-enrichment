import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

const CAMPUSES = '/campuses';
const STUDENTS = '/students';

export default class NavBar extends Component {
  render (){
    return (

      <div className="ui three item menu">
        <NavLink to={'/'} className="item">Home</NavLink>
        <NavLink to={CAMPUSES} className="item">Campuses</NavLink>
        <NavLink to={STUDENTS} className="item">Students</NavLink>
      </div>
    )
 }
}
