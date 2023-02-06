const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Dahlia extends Model {}

Dahlia.init({
    name: {
         type: DataTypes.STRING,
         allowNull:false
    },
    primaryColor: {
         type: DataTypes.STRING,
         allowNull:false
    },
    secondaryColor: {
        type: DataTypes.STRING,
        allowNull:false
   },
   size: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isNumeric: true
          }
   },
    have: {
         type: DataTypes.BOOLEAN,
         defaultValue:false
    },
    want: {
        type: DataTypes.BOOLEAN,
        defaultValue:false
    }
}, {
    sequelize,
    timestamps: false,
    underscored: true
  });

module.exports=Dahlia