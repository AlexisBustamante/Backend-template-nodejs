import { Sequelize } from 'sequelize';
import sequelize from '../database/config';

const Role = sequelize.define('role', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    description: {
        type: Sequelize.STRING
    },
    role: {
        type: Sequelize.STRING
    },
    state: {
        type: Sequelize.BOOLEAN
    }
}, {
    timestamps: false
});


export default Role;