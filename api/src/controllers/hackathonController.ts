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
        res.json([{
            id: 1,
            name: 'Inno{Hacks}',
            type: '3-day hackathon',
            host: 'Innovex AG',
            address: 'Ludwig-Erhard-Allee 6, 76131 Karlsruhe',
            town: 'Karlsruhe, DE',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
            date: new Date().toISOString()
        }, {
            id: 2,
            name: 'HackNation',
            type: '2-day hackathon',
            host: 'Thinktecture AG',
            address: 'Ludwig-Erhard-Allee 12, 76131 Karlsruhe',
            town: 'Karlsruhe, DE',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
            date: new Date().toISOString()
        }, {
            id: 3,
            name: 'Bio{Hacks}',
            type: '1-day hackathon',
            host: 'Thinktecture AG',
            address: 'Ludwig-Erhard-Allee 12, 76131 Karlsruhe',
            town: 'Karlsruhe, DE',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
            date: new Date().toISOString()
        }]);
    }

    createHackathon(req: Request, res: Response) {
        hackathonService.create(req.body);
        res.send(200);
    }
}
