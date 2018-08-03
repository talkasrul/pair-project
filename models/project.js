'use strict';
module.exports = (sequelize, DataTypes) => {
  var Project = sequelize.define('Project', {
    name: {type: DataTypes.STRING, validate: {notEmpty:{
      args: true,
      msg: 'Not Empty'
    }}},
    startAt: {type: DataTypes.DATE, validate: {
      notEmpty: {
        args: true,
        msg: 'Not Empty'
    }}},
    description: {type: DataTypes.STRING, validate: {notEmpty:{
      args: true,
      msg: 'Not Empty'
    }}},
    deadLine: {type: DataTypes.DATE, validate: {
      notEmpty: {
        args: true,
        msg: 'Not Empty'
    }}},
  }, {});
  Project.associate = function(models) {
    let Feature = models.Feature
    let ProjectFeature = models.ProjectFeatures
    // Project.belongsToMany(Feature, {through:ProjectFeature, foreignKey: 'ProjectId'})
  };
  return Project;
};