/*
import Sequelize = require('sequelize');
import {database} from '../database';

import {Address, AddressModel} from './Address';
import {Hackathon, HackathonModel} from './Hackathon';
import {Orga, OrgaModel} from './Orga';

export const Hackathon = database.define('hackathon', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    topic: {
        type: Sequelize.STRING,
        allowNull: false
    },
    begins: {
        type: Sequelize.DATE,
        allowNull: false
    },
    ends: {
        type: Sequelize.DATE,
        allowNull: false
    }
});


export const LinkModel = database.define('hackathon-link', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    href: {
        type: Sequelize.STRING,
        allowNull: false
    }
});


HackathonModel.hasMany(AddressModel, { as: 'addresses' });
HackathonModel.hasMany(UserModel, { as: 'members' });
HackathonModel.hasMany(OrgaModel, { as: 'orgas' });
HackathonModel.hasMany(LinkModel, { as: 'links' });

*/
import Sequelize = require('sequelize');

export interface HackathonPojo {
    id?: number
}

export function hackathonInitialize(sequelize) {
    const Hackathon = sequelize.define('Hackathon', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        topic: {
            type: Sequelize.STRING,
            allowNull: false
        },
        begins: {
            type: Sequelize.DATE,
            allowNull: false
        },
        ends: {
            type: Sequelize.DATE,
            allowNull: false
        }
    });

    return Hackathon;
}

export interface HackathonInstance extends Sequelize.Instance<HackathonPojo>, HackathonPojo {
}

export interface HackathonModel extends Sequelize.Model<HackathonInstance, HackathonPojo>, HackathonPojo {
}


//HackathonModel.hasMany(AddressModel, { as: 'addresses' });
