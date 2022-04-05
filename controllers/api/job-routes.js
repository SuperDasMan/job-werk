const router = require('express').Router();
const sequelize = require('../../config/connection');
const auth = require('../controllers/authroutes');

const { User, Industry, Job, Vote } = require('../../models');

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
router.get('/:id', auth, (req, res) => {
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

// post a job
router.post('/', auth, (req, res) => {
  Job.create({
    title: req.body.title,
    description: req.body.description,
    pay_rate: req.body.pay_rate,
    job_url: req.body.job_url,
    industry_id: req.body.industry_id,
    include: [
      { model: Industry, attributes: ['name'] },
      { model: User, attributes: ['username'] },
    ],
  })
    .then((dbJobData) => {
      req.session.save(() => {
        req.session.job_id = dbJobData.id;
        req.session.title = dbJobData.title;
        req.session.description = dbJobData.description;
        req.session.pay_rate = dbJobData.pay_rate;
        req.session.industry_id = dbJobData;
        req.session.loggedIn = true;
      });

      res.json({ job: dbJobData, message: 'New Job successfully posted!' });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// update a job
router.put('/:id', auth, (req, res) => {
  Job.update(
    {
      id: req.body.id,
      name: req.body.name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbJobData) => {
      if (!dbJobData) {
        res.status(404).json({ message: 'No Job found with this id' });
        return;
      }
      res.json(dbJobData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//delete job
router.delete('/:id', auth, (req, res) => {
  Job.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbJobData) => {
      if (!dbJobData) {
        res.status(404).json({ message: 'No Job found with this id!' });
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
