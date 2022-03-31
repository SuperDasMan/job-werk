const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our Job model
class Job extends Model {
  static upvote(body, models) {
    return models.Vote.create({
      user_id: body.user_id,
      job_id: body.job_id,
    }).then(() => {
      return Job.findOne({
        where: {
          id: body.job_id,
        },
        attributes: [
          "id",
          "job_url",
          "title",
          "created_at",
          [
            sequelize.literal(
              "(SELECT COUNT(*) FROM job WHERE job.id = vote.job_id)"
            ),
            "job_count",
          ],
        ],
        include: [
          {
            model: models.Industry,
            attributes: [
              "id",
              "industry_text",
              "job_id",
              "user_id",
              "created_at",
            ],
            include: {
              model: models.User,
              attributes: ["username"],
            },
          },
        ],
      });
    });
  }
}

// create fields/columns for Job model
Job.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pay_rate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // give job post a page to view
    job_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isURL: true,
      },
    },
    // user id of creator
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        modelName: "user",
        key: "id",
      },
    },
    industry_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "job",
  }
);

module.exports = Job;
