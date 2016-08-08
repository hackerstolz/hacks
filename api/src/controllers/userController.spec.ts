import chai = require('chai');
import {UserController} from './userController';
import {Request, Response} from 'restify';

const chaiAsPromised = require('chai-as-promised'); // no working typings available

chai.use(chaiAsPromised);
chai.should();

describe('UserController', () => {
    const server = {
        addRoute: (route) => {
        }
    };
    const userController: UserController = new UserController();
    userController.init(server);

    const req = () => {
        },
        res = {
            json: () => {
            }
        };


    it('should contain the initial routes', () => {
        userController._routes.should.exist;
        userController._routes.length.should.be.at.least(2);
    });

    describe('getAllUsers', () => {
        it('should return a promise', () => {
            userController.getAllUsers(<Request>req, <Response>res).should.be.a('promise');
        });
    });
});
