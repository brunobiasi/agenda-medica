const { Scheduling } = require('../models');

module.exports = {
    async index(req, res) {
        const { date, doctor } = req.body;
        const scheduling = await Scheduling.findAll({ where: { date, doctor } });
        res.json(scheduling);
    },
    async create(req, res) {
        const { date, hour, client, health_insurance, doctor, type, phone } = req.body;
        let data = { date, doctor, hour, client, health_insurance, type, phone };

        let scheduling = await Scheduling.create(data);
        return res.status(200).json(scheduling);
    },
    async details(req, res) {
        const { id } = req.params;
        const scheduling = await Scheduling.findByPk(id);
        res.json(scheduling);
    },
    async delete(req, res) {
        const { id } = req.params;
        const scheduling = await Scheduling.destroy({ where: { id } });
        return res.json(scheduling);
    },
    async update(req, res) {
        const { id, date, hour, client, health_insurance, doctor, type, phone } = req.body;
        const data = { date, doctor, hour, client, health_insurance, type, phone };
        const scheduling = await Scheduling.findByPk(id);
        scheduling.set(data);
        await scheduling.save();
        res.json(scheduling);
    },
}