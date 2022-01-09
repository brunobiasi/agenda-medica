const { User } = require('../models');
const jwt = require('jsonwebtoken');
const secret = "mysecret";

module.exports = {
    async index(req, res) {
        const user = await User.findAll();
        res.json(user);
    },
    async create(req, res) {
        const { name, email, type, password } = req.body;
        let data = {};
        let user = await User.findOne({ where: { email } });

        if (!user) {
            data = { name, email, type, password };

            user = await User.create(data);
            return res.status(200).json(user);
        } else {
            return res.status(500).json(user);
        }
    },
    async details(req, res) {
        const { id } = req.params;
        const user = await User.findByPk(id);
        res.json(user);
    },
    async delete(req, res) {
        const { id } = req.params;
        const user = await User.destroy({ where: { id } });
        return res.json(user);
    },
    async update(req, res) {
        const { id, name, email, type, password } = req.body;
        const data = { name, email, type, password };
        const user = await User.findByPk(id);
        user.set(data);
        await user.save();
        res.json(user);
    },
    async login(req, res) {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(200).json({ status: 2, error: "E-mail não encontrado no banco de dados" });
        }

        if (!(await user.checkPassword(password))) {
            return res.status(200).json({ status: 2, error: "A senha não confere" });
        } else {
            const payload = { email };
            const token = jwt.sign(payload, secret, {
                expiresIn: '24h'
            });
            res.cookie('token', token, { httpOnly: true });
            res.status(200).json({ status: 1, auth: true, token: token, id_client: user.id, user_name: user.name, user_type: user.type });
        }
    },
    async checkToken(req, res) {
        const token = req.body.token || req.query.token || req.cookies.token || req.headers['x-access-token'];
        if (!token) {
            res.json({ status: 401, msg: "Não autorizado: Token inexistente!" });
        } else {
            jwt.verify(token, secret, function (err, decoded) {
                if (err) {
                    res.json({ status: 401, msg: "Não autorizado: Token inválido!" });
                } else {
                    res.json({ status: 200 });
                }
            });
        }
    },
    async destroyToken(req, res) {
        const token = req.headers.token;
        if (token) {
            res.cookie('token', null, { httpOnly: true });
        } else {
            res.status(401).send("Logout não autorizado!");
        }
        res.send("Sessão finalizada com sucesso!");
    }
}