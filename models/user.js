'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    address: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    let Feature = models.Feature
    User.hasMany(Feature)
  };
  return User;
};