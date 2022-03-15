import { Sequelize } from 'sequelize';
import sequelize from '../database/config';

const Document = sequelize.define('document', {
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
    state: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    },
    id_user: {
        type: Sequelize.INTEGER
    },
    id_subcategory: {
        type: Sequelize.INTEGER
    },
}, {
    timestamps: false
});


export default Document;