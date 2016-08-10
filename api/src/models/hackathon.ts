import Sequelize = require('sequelize');

export interface HackathonPojo {
    id?: number;
    title: string;
    host: string;
    description: string;
    unixStartTime: number;
    unixEndTime: number;
    location: string;
    published: boolean;
}

export function hackathonInitialize(sequelize) {
    return sequelize.define('Hackathon', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        host: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        unixStartTime: {
            type: Sequelize.BIGINT,
            allowNull: false
        },
        unixEndTime: {
            type: Sequelize.BIGINT,
            allowNull: false
        },
        location: {
            type: Sequelize.STRING,
            allowNull: false
        },
        published: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        }
    });
}

export interface HackathonInstance extends Sequelize.Instance<HackathonPojo>, HackathonPojo {
}

export interface HackathonModel extends Sequelize.Model<HackathonInstance, HackathonPojo>, HackathonPojo {
}


//HackathonModel.hasMany(AddressModel, { as: 'addresses' });
