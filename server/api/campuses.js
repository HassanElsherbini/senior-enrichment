const router = require('express').Router();
const {Campuses, Students} = require('../db/models');
module.exports = router;

router.get('/', (req, res, next) => {
  //get all campuses
  Campuses.findAll()
  .then(campuses => res.send(campuses))
  .catch(next);
});

router.get('/:campusId', (req, res, next) => {
  Campuses.find({where: {id: req.params.campusId}, include: [Students]})
  .then(campus => {
    res.send(campus)
  })
  .catch(next);
});

router.post('/', (req, res, next) => {
  Campuses.create(req.body)
  .then((newCampus) => res.send(newCampus))
  .catch(next);
});

router.put('/:campusId', (req, res, next) => {

});

router.delete('/:campusId', (req, res, next) => {

  Students.destroy({where: {
    campusId: req.params.campusId
  }})
  .then(() => {
    return Campuses.destroy({where: {
      id: req.params.campusId
    }});
  })
  .then(() => {
    res.send('campus removed');
  })
  .catch(next);
});
