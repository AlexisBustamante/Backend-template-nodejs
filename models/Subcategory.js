import { Sequelize } from 'sequelize';
import sequelize from '../database/config';

const Subcategory = sequelize.define('subcategory', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING
    },
    state: {
        type: Sequelize.BOOLEAN
    },
    id_category: {
        type: Sequelize.INTEGER
    },
}, {
    timestamps: false
});


export default Subcategory;