import { Sequelize } from 'sequelize';
import sequelize from '../database/config';

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    state: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    },
    id_role: {
        type: Sequelize.INTEGER,
        defaultValue: 1
    },
}, {
    timestamps: false
}, {
    defaultScope: {
        attributes: {
            exclude: ['password']
        }
    }
});


export default User;