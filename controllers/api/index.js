const router = require("express").Router();

const jobRoutes = require("./job-routes");
const industryRoutes = require("./industry-routes");
const voteRoutes = require("./vote-routes");

router.use("/jobs", jobRoutes);
router.use("/industry", industryRoutes);
router.use("/vote", voteRoutes);


module.exports = router;