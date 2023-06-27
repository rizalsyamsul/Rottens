"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Movie.hasMany(models.Cast, { foreignKey: "movieId" });
      Movie.belongsTo(models.User, { foreignKey: "authorId" });
      Movie.belongsTo(models.Genre, { foreignKey: "genreId" });
    }

    static async createMovie(body) {
      const t = await sequelize.transaction();
      let { casts } = body;
      if (casts.length < 2) throw { name: "Above2" };
      delete body.casts;
      try {
        let data = await Movie.create(body, { transaction: t });
        casts.forEach((el) => {
          el.movieId = data.id;
        });

        let cast = await sequelize.models.Cast.bulkCreate(casts, {
          transaction: t,
        });
        await t.commit();
        return cast;
      } catch (error) {
        await t.rollback();
        console.log(error);
        return error;
      }
    }
  }
  Movie.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "title is required",
          },
          notNull: {
            msg: "title is required",
          },
        },
      },
      slug: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "slug is required",
          },
          notNull: {
            msg: "slug is required",
          },
        },
      },
      synopsis: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "synopsis is required",
          },
          notNull: {
            msg: "synopsis is required",
          },
        },
      },
      trailerUrl: DataTypes.STRING,
      imgUrl: DataTypes.STRING,
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "rating is required",
          },
          notNull: {
            msg: "rating is required",
          },
          min: {
            args: 1,
            msg: "rating must be more than 1",
          },
        },
      },
      genreId: DataTypes.INTEGER,
      authorId: DataTypes.INTEGER,
      userMongoId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Movie",
    }
  );
  Movie.addHook("beforeCreate", (instance) => {
    instance.slug = instance.slug.replace(/\s+/g, "").toLowerCase() + "-6661";
    instance.trailerUrl = instance.trailerUrl.replace("https://youtu.be/", "");
  });
  return Movie;
};
