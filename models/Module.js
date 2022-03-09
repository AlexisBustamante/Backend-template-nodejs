import { Sequelize } from 'sequelize';
import sequelize from '../database/config';

const Module = sequelize.define('module', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false
});


export default Module;