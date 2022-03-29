const router = require("express").Router();

const userRoutes = require("./user-routes");
const jobRoutes = require("./job-routes");
const industryRoutes = require("./industry-routes");
const voteRoutes = require("./vote-routes");

router.use("/users", userRoutes);
router.use("/jobs", jobRoutes);
router.use("/industry", industryRoutes);
router.use("/vote", voteRoutes);


module.exports = router;