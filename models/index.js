// import all models
const Job = require("./Job");
const User = require("./User");
const Vote = require("./Vote");
const Industry = require("./Industry");

// create associations
User.hasMany(Job, {
  foreignKey: "user_id",
});

Job.belongsTo(User, {
  foreignKey: "user_id",
});

User.belongsToMany(Job, {
  through: Vote,
  as: "voted_jobs",
  foreignKey: "user_id",
});

Job.belongsToMany(User, {
  through: Vote,
  as: "voted_jobs",
  foreignKey: "user_id",
});

Vote.belongsTo(User, {
  foreignKey: "user_id",
});

Vote.belongsTo(Job, {
  foreignKey: "job_id",
});

User.hasMany(Vote, {
  foreignKey: "user_id",
});

Job.hasMany(Vote, {
  foreignKey: "job_id",
});

Industry.belongsToMany(User, {
  through: Job,
  as: "created_jobs",
  foreignKey: "job_id",
});

// Industry.hasMany(Job, {
//   foreignKey: "industry_id",
// });

User.belongsToMany(Industry, {
  through: Job,
  as: "created jobs",
  foreignKey: "user_id",
});

// Job.belongsTo(Industry, {
//   foreignKey: "industry_id",
// });

module.exports = { User, Industry, Job, Vote };
