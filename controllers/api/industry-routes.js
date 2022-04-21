const router = require('express').Router();
const sequelize = require('../../config/connection');
// const auth = require('../authroutes');
const withAuth = require('../../utils/auth');

const { Industry, Job } = require('../../models');

// get all industries
router.get('/', (req, res) => {
  Industry.findAll({
    attributes: ['id', 'name'],

    include: [
      {
        model: Job,
        attributes: ['id', 'title', 'job_url', 'created_at'],
      },
    ],
  })
    .then((dbIndustryData) => res.json(dbIndustryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
// get one industry
router.get('/:id', (req, res) => {
  Industry.findOne({
    attributes: ['id', 'name'],
    where: {
      id: req.params.id,
    },

    include: [
      {
        model: Job,
        attributes: ['id', 'title', 'job_url', 'created_at'],
      },
    ],
  })
    .then((dbIndustryData) => {
      if (!dbIndustryData) {
        res.status(404).json({ message: 'No Industry found with this id' });
        return;
      }
      res.json(dbIndustryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Post
router.post('/', withAuth, (req, res) => {
  Industry.create({
    id: req.body.id,
    name: req.body.name,
    include: [{ model: User, attributes: ['username'] }],
  })
    .then((dbIndustryData) => {
      req.session.save(() => {
        req.session.id = dbIndustryData.id;
        req.session.name = dbIndustryData.name;
        req.session.loggedIn = true;
      });

      res.json({
        job: dbIndustryData,
        message: 'New Industry successfully posted!',
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', withAuth, (req, res) => {
  Industry.update(
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
    .then((dbIndustryData) => {
      if (!dbIndustryData) {
        res.status(404).json({ message: 'No Industry found with this id' });
        return;
      }
      res.json(dbIndustryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//delete industry
router.delete('/:id', withAuth, (req, res) => {
  Industry.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbIndustryData) => {
      if (!dbIndustryData) {
        res.status(404).json({ message: 'No Industry found with this id!' });
        return;
      }
      res.json(dbIndustryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
