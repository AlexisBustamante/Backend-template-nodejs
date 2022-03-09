import { Sequelize } from 'sequelize';
import sequelize from '../database/config';

const Method = sequelize.define('method', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    contenthtml: {
        type: Sequelize.STRING
    },
    datecreate: {
        type: Sequelize.DATE
    },
    dateupdate: {
        type: Sequelize.DATE
    },
    id_user: {
        type: Sequelize.INTEGER
    },
}, {
    timestamps: false
});


export default Method;