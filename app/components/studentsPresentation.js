import React from 'react';
import {NavLink} from 'react-router-dom';

const StudentsPresentation = function(props){

  const {students, handleClick, displayDelete} = props;

  return (
    <div>
      <ul>
        {students.map( (student) => {
          return <li key={student.id}>
            <NavLink to={`/students/${student.id}`} >
            {student.fullName}
            </NavLink>
            {displayDelete && <button onClick={() => handleClick(student)}><span>-</span></button>}
          </li>;
        })}
      </ul>

    </div>
  )
}


export default StudentsPresentation;
