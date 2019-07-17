const pool = require('../db');

const userController = {
    list: async (req, res) => {
        try {
            const [rows] = await pool.query("SELECT * FROM users");
            res.send(rows);
        } catch (error) {
            console.log(error);
        }
    },
    get: async (req, res) => {
        const id = req.params.id;

        try {
            const [rows] = await pool.query("SELECT * FROM users WHERE id=?", [id]);
            res.send(rows[0]);
        } catch (error) {
            console.log(error);
        }
    },
    create: async (req, res) => {
        if (!req.body.name || !req.body.age) return res.sendStatus(400);

        const name = req.body.name;
        const age = req.body.age;

        try {
            const [data] = await pool.query("INSERT INTO users (name, age) VALUES (?,?)", [name, age]);
            const [user] = await pool.query("SELECT * FROM users WHERE id=?", [data.insertId]);
            res.send(user[0]);
        } catch (error) {
            console.log(error);
        }
    },
    delete: async (req, res) => {
        const id = req.params.id;

        try {
            await pool.query("DELETE FROM users WHERE id=?", [id]);
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
            await pool.query("UPDATE users SET name=?, age=? WHERE id=?", [name, age, id]);
            const [user] = await pool.query("SELECT * FROM users WHERE id=?", [id]);
            res.send(user[0]);
        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = userController;