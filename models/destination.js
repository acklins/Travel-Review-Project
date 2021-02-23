'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class destination extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.destination.hasMany(models.review)
      models.destination.belongsToMany(models.user, {through: "usersDestinations"})
    }
  };
  destination.init({
    city: DataTypes.STRING,
    country: DataTypes.STRING,
    apiId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'destination',
  });
  return destination;
};