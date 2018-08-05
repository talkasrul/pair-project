'use strict';
module.exports = (sequelize, DataTypes) => {
  var Feature = sequelize.define('Feature', {
    name: {type: DataTypes.STRING, validate: {
      notEmpty: {
        args: true,
        msg:'Please entry name of feature'
      }
    }},
    status: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {});
  Feature.associate = function(models) {
    Feature.belongsTo(models.User)

    Feature.belongsToMany(models.Project, {through:models.ProjectFeature})
    

  };
  return Feature;
};