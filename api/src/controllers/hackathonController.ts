import {Route, GetRoute, PostRoute} from '../server/route';
import {Request, Response} from 'restify';
import {hackathonService} from '../services';
import {HackathonPojo} from '../models/hackathon';

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

        let mockathon: HackathonPojo = {
            title: 'Inno{Hacks}',
            host: 'Innovex AG',
            description: 'A super duper hackathon at Innovex. We will order pizza whenever TT guys are around.',
            unixStartTime: 1470830537224,
            unixEndTime: 1471780966090,
            location: 'foobar',
            published: false
        };

        hackathonService.create(mockathon);
    }

    getAllHackathons(req: Request, res: Response) {
        hackathonService.getAll()
            .then(result => res.json(200, result));
    }

    createHackathon(req: Request, res: Response) {
        hackathonService.create(req.body)
            .then(() => res.send(200), (err) => res.send(500, err));
    }
}
