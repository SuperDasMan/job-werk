const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Industry, Job, Vote } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
  console.log('======================');
  Job.findAll({
    attributes: [
      'id',
      // "job_url",
      'title',
      'created_at',
      [
        sequelize.literal(
          '(SELECT COUNT(*) FROM vote WHERE job.id = vote.job_id)'
        ),
        'vote_count',
      ],
    ],
    include: [
      {
        model: User,
        attributes: ['username'],
      },
    ],
  })
    .then((dbJobData) => {
      // pass a single Job object into the homepage template
      console.log(dbJobData[0]);
      const jobs = dbJobData.map((job) => job.get({ plain: true }));
      res.render('homepage', {
        jobs,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// router.get('/login', (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect('/');
//     return;
//   }
//   res.render('login');
// });

router.get('/dashboard', withAuth, (req, res) => {
  console.log('======================');
  Job.findAll({
    attributes: [
      'id',
      // "job_url",
      'title',
      'created_at',
      [
        sequelize.literal(
          '(SELECT COUNT(*) FROM vote WHERE job.id = vote.job_id)'
        ),
        'vote_count',
      ],
    ],
    include: [
      {
        model: User,
        attributes: ['username'],
      },
    ],
  })
    .then((dbJobData) => {
      // pass a single Job object into the homepage template
      console.log(dbJobData[0]);
      const jobs = dbJobData.map((job) => job.get({ plain: true }));
      res.render('dashboard', {
        jobs,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

router.get('/job/:id', (req, res) => {
  Job.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      'id',
      // 'job_url',
      'title',
      'created_at',
      [
        sequelize.literal(
          '(SELECT COUNT(*) FROM vote WHERE job.id = vote.job_id)'
        ),
        'vote_count',
      ],
    ],
    include: [
      {
        model: User,
        attributes: ['username'],
      },
    ],
  })
    .then((dbJobData) => {
      if (!dbJobData) {
        res.status(404).json({ message: 'No job found with this id' });
        return;
      }

      // serialize the data
      const job = dbJobData.get({ plain: true });

      // pass data to template
      res.render('single-job', {
        job,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
