const router = require('express').Router();
const {Campuses, Students} = require('../db/models');
module.exports = router;

router.get('/', (req, res, next) => {
  //get all campuses
  Students.findAll()
  .then(students => res.send(students))
  .catch(next);
});

router.get('/:studentId', (req, res, next) => {
  Campuses.find({where: {id: req.params.studentId}, include: [Campuses]})
  .then(student => {
    res.send(student);
  })
  .catch(next);
});

router.post('/', (req, res, next) => {
  const {firstName, lastName, email, gpa, campusId} = req.body;

  Students.create({firstName, lastName, email, gpa})
  .then(newStudent => newStudent.setCampus(campusId))
  .then(updatedStudent => res.json(updatedStudent))
  .catch(next);
});

router.put('/:studentId', (req, res, next) => {

    Students.findById(req.params.studentId)
    .then(student => {
      student.update(req.body);
    })
    .then(() => { res.send('updated')})
    .catch(next);
});

router.delete('/:studentId', (req, res, next) => {
  Students.destroy({
    where: {
      id: req.params.studentId
    }
  })
  .then(() => {
    res.send('removed');
  })
  .catch(next);
});

