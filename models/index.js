const User = require("./User");
const Dahlia = require("./Dahlia");

User.hasMany(Dahlia);
Dahlia.belongsTo(User);

module.exports = {
    User,
    Dahlia
}