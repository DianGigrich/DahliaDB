const User = require("./User");
const Dahlia = require("./Dahlia");
const Images = require("./Images");

User.hasMany(Dahlia);
Dahlia.belongsTo(User);
Dahlia.hasMany(Images);
Images.belongsTo(Dahlia);


module.exports = {
    User,
    Dahlia,
    Images
}