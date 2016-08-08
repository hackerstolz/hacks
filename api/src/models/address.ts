import Sequelize = require('sequelize');

// TODO: AddressModel should have longitude and latitude wrapper object

export interface AddressPojo {
    id?: number,
    firstName: string,
    lastName: string
}

export function initialize(sequelize) {
    return sequelize.define('Address', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        zip: {
            type: Sequelize.STRING,
            allowNull: false
        },
        city: {
            type: Sequelize.STRING,
            allowNull: false
        },
        street: {
            type: Sequelize.STRING,
            allowNull: false
        },
        house: {
            type: Sequelize.STRING,
            allowNull: false
        },
        country: {
            type: Sequelize.STRING,
            allowNull: false
        },
        coordinates: {
            type: Sequelize.STRING,
            allowNull: true
        }
    });
}

export interface AddressInstance extends Sequelize.Instance<AddressInstance, AddressPojo>, AddressPojo {
}

export interface AddressModel extends Sequelize.Model<AddressInstance, AddressPojo>, AddressPojo {
}
