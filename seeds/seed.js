const sequelize = require('../config/connection');
const { User, Dahlia } = require("../models")
const seed = async () => {
    await sequelize.sync({ force: true })
    const users = [
        {
            username: "Dian",
            email: "dian@dian.dian",
            password: "password"
        }
    ]
    const dahlias = [
        {
            name: "Super",
            primaryColor: "blue",
            secondaryColor: "red",
            size: 8,
            have: yes,
            want: no
        }
    ]
    try {

        await User.bulkCreate(users, {
            individualHooks: true
        })
        await Dahlia.bulkCreate(dahlias)
    } catch (err) {
        throw err
    }
    process.exit(0);
}
seed()