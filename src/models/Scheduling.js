

module.exports = (sequelize, DataTypes) => {
    const Scheduling = sequelize.define("Scheduling", {
        date: DataTypes.STRING,
        hour: DataTypes.STRING,
        client: DataTypes.STRING,
        health_insurance: DataTypes.STRING,
        type: DataTypes.INTEGER,
        phone: DataTypes.STRING,
    });

    return Scheduling;
}