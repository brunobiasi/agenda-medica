

module.exports = (sequelize, DataTypes) => {
    const Scheduling = sequelize.define("Scheduling", {
        date: DataTypes.STRING,
        hour: DataTypes.STRING,
        client: DataTypes.STRING,
        health_insurance: DataTypes.STRING,
        doctor: DataTypes.STRING,
        procedure: DataTypes.STRING,
        status: DataTypes.STRING,
        phone: DataTypes.STRING,
    });

    return Scheduling;
}