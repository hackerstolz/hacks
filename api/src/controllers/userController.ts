import {Route, GetRoute, PostRoute} from '../server/route';
import {Request, Response} from 'restify';
import {userService} from '../services';
import {UserPojo} from '../models/user';

export class UserController {
    public _routes: Route[];

    constructor() {
        this._routes = [
            new GetRoute('/users', this.getAllUsers),
            new PostRoute('/users', this.createUser)
        ];
    }

    init(server) {
        this._routes.forEach((route) => {
            server.addRoute(route);
        });
    }

    getAllUsers(req: Request, res: Response) {
        userService.getAll()
            .then((users) => res.json(users));
    }

    createUser(req: Request, res: Response) {
        userService.create(<UserPojo>req.params)
            .then(() => res.send(200, 'Successfully created user'));
    }
}
