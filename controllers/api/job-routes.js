const router = require('express').Router();
const { User, Industry, Job, Vote } = require('../../models');

// get all jobs
router.get('/', (req, res) => {
  Job.findAll({
    attributes: [
      'id',
      'job_url',
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
      { model: Industry, attributes: ['name'] },
      { model: User, attributes: ['username'] },
    ],
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

    attributes: [
      'id',
      'post_url',
      'title',
      'created_at',
      [
        sequelize.literal(
          '(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'
        ),
        'vote_count',
      ],
    ],
    include: [
      { model: Industry, attributes: ['name'] },
      { model: User, attributes: ['username'] },
    ],
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
router.post('/', (req, res) => {
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

module.exports = router;
