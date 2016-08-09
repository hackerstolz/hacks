import {Route, GetRoute, PostRoute} from '../server/route';
import {Request, Response} from 'restify';
import {hackathonService} from '../services';

export class HackathonController {
    public _routes: Route[];

    constructor() {
        this._routes = [
            new GetRoute('/hackathons', this.getAllHackathons),
            new PostRoute('/hackathon', this.createHackathon)
        ];
    }

    init(server) {
        this._routes.forEach((route) => {
            server.addRoute(route);
        });
    }

    getAllHackathons(req: Request, res: Response) {
        hackathonService.getAll()
            .then(result => res.json(200, result));
    }

    createHackathon(req: Request, res: Response) {
        hackathonService.create(req.body);
        res.send(200);
    }
}
