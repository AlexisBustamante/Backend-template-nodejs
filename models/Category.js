import { Sequelize } from 'sequelize';
import sequelize from '../database/config';

const Category = sequelize.define('category', {
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
    }
}, {
    timestamps: false
});


export default Category;