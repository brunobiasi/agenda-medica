const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        type: DataTypes.INTEGER,
        password: DataTypes.VIRTUAL,
        password_hash: DataTypes.STRING,
    },
        {
            hooks: {
                beforeSave: async user => {
                    if (user.password.length < 50) {
                        user.password_hash = await bcrypt.hash(user.password, 8)
                    }
                }
            }
        })

        User.prototype.checkPassword = function(password) {
            return bcrypt.compare(password, this.password_hash);
        }

    return User
}