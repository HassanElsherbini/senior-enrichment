import axios from 'axios';
import {fetchStudents} from '../store';

const GOT_CAMPUSES = 'GOT_CAMPUSES';
const GOT_CAMPUS = 'GOT_CAMPUS';
const DELETE_CAMPUS = 'DELETE_CAMPUS';

const gotCampuses = (campuses) => {
  const action = {
    type: GOT_CAMPUSES,
    campuses
  };
  return action;
};

export const gotCampus = function(newCampus){
  const action = {
    type: GOT_CAMPUS,
    newCampus
  };
  return action;
}

export const deleteCampus = function(campus){
  const action = {
    type: DELETE_CAMPUS,
    campus
  };
  return action;
}

export const fetchCampuses = () => {
  return function (dispatch){
    axios.get('/api/campuses')
    .then(res => {
      dispatch(gotCampuses(res.data));

    })
    .catch(console.error);
  };
};

export const postCampus = function(newCampus, history){
  return function(dispatch){
    axios.post('api/campuses', newCampus)
    .then(res => res.data)
    .then(addedCampus => {
      dispatch(gotCampus(addedCampus));
      history.push('/campuses');
    })
    .catch(console.error);
  }
}

export const removeCampus = function(campus){
  return function(dispatch){
    axios.delete(`api/campuses/${campus.id}`)
    .then(() => {
      dispatch(deleteCampus(campus));
      dispatch(fetchStudents());
    })
    .catch(console.error);
  }
}

const reducer = (state = [], action) => {
   switch (action.type){
     case GOT_CAMPUSES:
      return action.campuses;
     case GOT_CAMPUS:
      return [...state, action.newCampus];
     case DELETE_CAMPUS:
      return state.filter(campus => campus.id !== action.campus.id);
     default:
      return state;
   }
};

export default reducer;
