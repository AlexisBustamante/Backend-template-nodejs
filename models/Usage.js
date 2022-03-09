import { Sequelize } from 'sequelize';
import sequelize from '../database/config';

const Usage = sequelize.define('usage', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_module: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    id_method: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
}, {
    timestamps: false
});

export default Usage;