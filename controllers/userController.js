const User = require('../models/User');

const userController = {
    list: async (req, res) => {
        try {
            const users = await User.findAll({raw: true});
            res.send(users);
        } catch (error) {
            console.log(error);
        }
    },
    get: async (req, res) => {
        const id = req.params.id;

        try {
            const user = await User.findOne({where: {id: id}});
            res.send(user);
        } catch (error) {
            console.log(error);
        }
    },
    create: async (req, res) => {
        if (!req.body.name || !req.body.age) return res.sendStatus(400);

        const name = req.body.name;
        const age = req.body.age;

        try {
            const user = await User.create({
                name,
                age
            });
            res.send(user);
        } catch (error) {
            console.log(error);
        }
    },
    delete: async (req, res) => {
        const id = req.params.id;

        try {
            const user = await User.destroy({
                where: {
                    id
                }
            });
            res.send({id: +id});
        } catch (error) {
            console.log(error);
        }
    },
    update: async (req, res) => {
        if (!req.body.name || !req.body.age) return res.sendStatus(400);

        const id = req.body.id;
        const name = req.body.name;
        const age = req.body.age;

        try {
            const user = await User.update({name, age}, {
                where: {
                    id
                }
            });
            res.send(user);
        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = userController;