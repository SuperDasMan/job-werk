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
  onDelete: "SET NULL",
});

User.belongsToMany(Job, {
  through: Vote,
  as: "voted_jobs",

  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Job.belongsToMany(User, {
  through: Vote,
  as: "voted_jobs",
  foreignKey: "job_id",
  onDelete: "SET NULL",
});

Vote.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Vote.belongsTo(Job, {
  foreignKey: "job_id",
  onDelete: "SET NULL",
});

User.hasMany(Vote, {
  foreignKey: "user_id",
});

Job.hasMany(Vote, {
  foreignKey: "job_id",
});

Industry.hasMany(User, {
  foreignKey: "job_id",
  onDelete: "SET NULL",
});

Industry.hasMany(Job, {
  foreignKey: "industry_id",
  onDelete: "SET NULL",
});

User.hasMany(Industry, {
  foreignKey: "job_id",
  onDelete: "SET NULL",
});

Job.belongsTo(Industry, {
  foreignKey: "industry_id",
});

module.exports = { User, Job, Vote, Industry };
