'use strict';
module.exports = (sequelize, DataTypes) => {
  const grant = sequelize.define('grant', {
    idGrant: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    number: DataTypes.STRING,
    title: DataTypes.STRING,
    agency: DataTypes.STRING,
    status: DataTypes.STRING,
    javascript: DataTypes.STRING,
    postedDate: {
      type: DataTypes.DATE,
      defaultValue: null,
      isDate: true,
      allowNull: true
    },
    closeDate: {
      type: DataTypes.DATE,
      defaultValue: null,
      isDate: true,
      allowNull: true
    },
  }, {});
  grant.associate = function(models) {
    // associations can be defined here
  };

  return grant;
};