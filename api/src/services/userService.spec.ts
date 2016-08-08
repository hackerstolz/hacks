import {UserService} from './userService';
import {User} from '../models/user/user';
import chai = require('chai');

const Promise = require('bluebird'); // no working typings available
const chaiAsPromised = require('chai-as-promised'); // no working typings available
const mock = require('mock-require'); // no typings available at all


chai.use(chaiAsPromised);
chai.should();

describe('UserService', () => {
    // Test setup

    const mockUsers: User[] = [new User('mrauber', 'Manuel', 'Rauber')];
    let userService: UserService;

    mock('databaseProvider', {
        getInstance: () => {
            const instancePromise = new Promise();
            const dbPromise = new Promise();
            const db = {
                models: {
                    user: {
                        create: (user) => {
                            return dbPromise.resolve([]);
                        },
                        findAll: () => {
                            return dbPromise.resolve(mockUsers)
                        }
                    }
                }
            };

            return instancePromise.resolve(db);
        }
    });

    before(() => {
        userService = new UserService();
    });

    describe('writeUserCreate()', () => {
        it('exists', () => {
            userService.writeUserCreate.should.be.a('function');
        });

        it('returns a promise', () => {
            userService.writeUserCreate('mrauber', 'Manuel', 'Rauber').then.should.exist;
        });
    });

    describe('readUsersgetAll()', () => {
        it('exists', () => {
            userService.readUsersGetAll.should.be.a('function');
        });

        it('returns a promise', () => {
            userService.readUsersGetAll().then.should.exist;
        });

        it('returns a promise containing the users array', () => {
            userService.readUsersGetAll().then((data) => {
                console.log('read get all', data);
            });
            userService.writeUserCreate('sjahr', 'Steffen', 'Jahr').should.be.fulfilled.then(() => {
                console.log('promise fulfilled')
            })
        });
    });
});
