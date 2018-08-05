'use strict';
module.exports = (sequelize, DataTypes) => {
  var ProjectFeature = sequelize.define('ProjectFeature', {
    ProjectId: DataTypes.INTEGER,
    FeatureId: DataTypes.INTEGER
  }, {});
  ProjectFeature.associate = function(models) {
    ProjectFeature.belongsTo(models.Project);
    ProjectFeature.belongsTo(models.Feature)
  };
  return ProjectFeature;
};