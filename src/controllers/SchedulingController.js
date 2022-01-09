// const { update } = require('../models/usuario.model');
// const Agendamento = require('../models/agendamento.model')

module.exports = {
    async index(req, res){
        const scheduling = await Agendamento.find();
        res.json(scheduling);
    },
    async create(req, res){
        const {hora, cliente, convenio, tipo, telefone} = req.body;
        let data = {};
        let scheduling = await Agendamento.findOne({cliente});
        
        if(!scheduling){
            data = {hora, cliente, convenio, tipo, telefone};
            
            scheduling = await Agendamento.create(data);
            return res.status(200).json(scheduling);
        } else {
            return res.status(500).json(scheduling);
        }
    },
    async details(req, res){
        const {_id} = req.params;
        const scheduling = await Agendamento.findOne({_id});
        res.json(scheduling);
    },
    async delete(req, res){
        const {_id} = req.params;
        const scheduling = await Agendamento.findByIdAndDelete({_id});
        return res.json(scheduling);
    },
    async update(req, res){
        const {_id, hora, cliente, convenio, tipo, telefone} = req.body;
        const data = {hora, cliente, convenio, tipo, telefone};
        const scheduling = await Agendamento.findOneAndUpdate({_id}, data, {new: true});
        res.json(scheduling);
    }
}