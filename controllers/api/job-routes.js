const router = require('express').Router();
const { Industry, Job, Vote } = require('../../models');

// get all jobs
router.get('/', (req, res) => {
  Job.findAll({
    include: [{ model: Industry }, { model: Job }],
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
    where: { id: req.params.id },
    include: [{ model: Industry }, { model: Job }],
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
