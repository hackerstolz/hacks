/*
import Sequelize = require('sequelize');
import {database} from '../database';

import {Address, AddressModel} from './Address';
import {User, UserModel} from './User';
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
