'use strict';
module.exports = (sequelize, DataTypes) => {
  var ProjectFeatures = sequelize.define('ProjectFeatures', {
    ProjectId: DataTypes.INTEGER,
    FeatureId: DataTypes.INTEGER
  }, {});
  ProjectFeatures.associate = function(models) {
    let Project = models.Projects
    let Feature = models.Features

    // ProjectFeatures.belongsTo(Feature)
    // ProjectFeatures.belongsTo(Project)

  };
  return ProjectFeatures;
};