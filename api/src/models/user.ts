import Sequelize = require('sequelize');
import {Models} from './index';

export interface UserPojo {
    id?: number,
    firstName: string,
    lastName: string
}

export function userInitialize(sequelize) {
    const User = sequelize.define('User', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        firstName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: false
        }

    }, {
        classMethods: {
            associate: (models: Models) => User.hasOne(models.Addresses)
        }
    });

    return User;
}

export interface UserInstance extends Sequelize.Instance<UserPojo>, UserPojo {
}

export interface UserModel extends Sequelize.Model<UserInstance, UserPojo>, UserPojo {
}


//UserModel.hasMany(AddressModel, { as: 'addresses' });
