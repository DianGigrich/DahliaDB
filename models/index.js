const User = require("./User");

User.hasMany(Dahlia);
Dahlia.belongsTo(User);

module.exports = {
    User,
    Dahlia
}