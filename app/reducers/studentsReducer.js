import axios from 'axios';

const GOT_STUDENTS = 'GOT_STUDENTS';
const GOT_STUDENT  = 'GOT_STUDENT';
const DELETE_STUDENT = 'DELETE_STUDENT';
const UPDATE_STUDENT =  'UPDATE_STUDENT';

const gotStudents = (students) => {
  const action = {
    type: GOT_STUDENTS,
    students
  };
  return action;
};

const gotStudent = (student) => {
  const action = {
    type: GOT_STUDENT,
    newStudent: student
  };
  return action;
};

const deleteStudent = (student) => {
  const action = {
    type: DELETE_STUDENT,
    student
  }
  return action;
};

const updateInfo = (studentInfo) => {
  const action = {
    type: UPDATE_STUDENT,
    studentInfo
  }
  return action;
};

export const fetchStudents = () => {
  return function (dispatch){
    axios.get('/api/students')
    .then(res => {
      dispatch(gotStudents(res.data));
    })
    .catch(console.error);
  };
};

export const postStudent = (student, history) => {
  return function (dispatch){

    axios.post('api/students', student)
    .then(res => res.data)
    .then(newStudent => {
      dispatch(gotStudent(newStudent));
      history.push(`/students`);
    });
  };
}

export const removeStudent = (student) => {
  return function(dispatch){
    axios.delete(`api/students/${student.id}`)
    .then(() => {
      // console.log('sdaffaf', stuff);
      dispatch(deleteStudent(student));
    });
  };
};


export const updateStudent = (studentInfo, history) => {
  return function(dispatch){
    axios.put(`api/students/${studentInfo.id}`, studentInfo)
    .then(() => {
      // console.log('sdaffaf', stuff);
      dispatch(updateInfo(studentInfo));
      history.push(`/students`);
    });
  };
};


const reducer = (state = [], action) => {
  // console.log(action)
   switch (action.type){
     case GOT_STUDENTS:
      return action.students;
     case GOT_STUDENT:
      return [...state, action.newStudent];
     case DELETE_STUDENT:
      return state.filter(student => student.id !== action.student.id);
     case UPDATE_STUDENT:
        const newState = state.filter(student => student.id !== action.studentInfo.id);
        return [...newState, action.studentInfo];
     default:
      return state;
   }
};


export default reducer;
