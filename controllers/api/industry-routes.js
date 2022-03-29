const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Industry } = require("../../models");

// get all industries
router.get("/", (req, res) => {
    console.log("======================");
    Industry.findAll({

    
    })
      .then((dbPostData) => res.json(dbPostData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  // get one industry
  router.get("/:id", (req, res) => {
    Industry.findOne({


     
    })
      .then((dbPostData) => {
        if (!dbPostData) {
          res.status(404).json({ message: "No Industry found with this id" });
          return;
        }
        res.json(dbPostData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;