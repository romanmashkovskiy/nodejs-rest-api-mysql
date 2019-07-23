const Sequelize = require('sequelize');

const sequelize = new Sequelize('usersdb', 'root', '1987', {
    dialect: 'mysql',
    host: 'localhost',
    define: {
        timestamps: false
    }
});

module.exports = sequelize;



