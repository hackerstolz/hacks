/*
import Sequelize = require('sequelize');
import {database} from '../database';
import {AddressModel} from './address';

export const Admin = database.define('admin', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    displayName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

AdminModel.hasMany(AddressModel, { as: 'addresses' });
*/
