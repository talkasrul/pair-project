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
    let User = models.User
    Feature.belongsTo(User)

    let Project = models.Project
    let ProjectFeature = models.ProjectFeatures
    // Project.belongsToMany(Feature, {through:ProjectFeature, foreignKey: 'FeatureId'})
    

  };
  return Feature;
};