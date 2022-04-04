const router = require('express').Router();
const {Job} = require('../../models');

// get all jobs
router.get('/', (req, res) => {
  Job.findAll({
    attributes: [
      'title',
      'description', 
      'pay_rate',  
      'industry_id',
    ]
  })
    .then((dbJobData) => res.json(dbJobData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get one job
router.get('/:id', (req, res) => {
  Job.findOne({
    attributes: [
      'title',
      'description', 
      'pay_rate', 
      'industry_id',],
    where: { id: req.params.id },
  })
    .then((dbJobData) => {
      if (!dbJobData) {
        res.status(404).json({ message: 'No job found with this id' });
        return;
      }
      res.json(dbJobData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
