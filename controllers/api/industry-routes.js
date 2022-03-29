const router = require("express").Router();
const { Industry, Job } = require("../../models");

// get all industries
router.get('/', (req, res) => {
  Industry.findAll({
    attributes: [
      'id',
      'name'
    ],
    include: [
      {
        model: Job,
        attributes: [
          "id",
          "job_url",
          "title",
          "created_at"
        ],
      },
    ]
  })
    .then(dbIndustryData => res.json(dbIndustryData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
  // get one industry
  router.get('/:id', (req, res) => {
    Industry.findOne({
      attributes: [
        'id',
        'name'
      ],
      where: {
        id: req.params.id
      },
      include: [
        {
          model: Job,
          attributes: [
            "id",
          "job_url",
          "title",
          "created_at"
          ],
        },
      ]
    })
      .then(dbIndustryData => {
        if (!dbIndustryData) {
          res.status(404).json({ message: 'No Industry found with this id' });
          return;
        }
        res.json(dbIndustryData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;