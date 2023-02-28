const { Model, DataTypes } = require('sequelize');

class Images extends Model { }

Dahlia.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    image: {
        type: DataTypes.BLOB('long'), // <- type for image ( database :postgresql )
        allowNull: true
    },
},
    {
        sequelize,
        timestamps: false,
        schema: 'imageSchema'
    }
)

module.exports = Images