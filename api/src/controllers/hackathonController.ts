import {Route, GetRoute, PostRoute, PutRoute} from '../server/route';
import {Request, Response} from 'restify';
import {hackathonService} from '../services';
import {HackathonPojo} from '../models/hackathon';

export class HackathonController {
    public _routes: Route[];

    constructor() {
        this._routes = [
            new GetRoute('/hackathons', this.getAllHackathons),
            new GetRoute('/hackathon/:id', this.getHackathon),
            new PostRoute('/hackathon', this.createHackathon),
            new PutRoute('/hackathon/:id', this.updateHackathon)
        ];
    }

    init(server) {
        this._routes.forEach((route) => {
            server.addRoute(route);
        });

        let mockathons: HackathonPojo[] = [{
            title: 'Bacon{Hacks}',
            host: 'McDonalds Inc.',
            location: '123 Fake Street, San Bernadino, CA',
            description: `Bacon ipsum dolor amet esse ad enim pork belly. Pork loin turkey in, bacon ham hock consectetur tenderloin 
            picanha ex officia doner enim id esse shoulder. Shankle est strip steak, pork belly pancetta laborum exercitation occaecat 
            laboris ball tip ribeye. Pork loin ea flank pork belly jerky. Strip steak sed esse t-bone alcatra incididunt laborum ex irure 
            meatloaf porchetta commodo dolore. Ea culpa capicola swine ut boudin turducken turkey ipsum. Ut cupidatat ground round, jerky 
            meatloaf incididunt minim turducken fatback capicola filet mignon salami.`,
            unixStartTime: 1470830537224,
            unixEndTime: 1471780966090,
            published: false
        },{
            title: 'Chicken{Hacks}',
            host: 'KFC Inc.',
            location: '42 Pi Way, North Corbin, KY',
            description: `Bacon ipsum dolor amet esse ad enim pork belly. Pork loin turkey in, bacon ham hock consectetur tenderloin 
            picanha ex officia doner enim id esse shoulder. Shankle est strip steak, pork belly pancetta laborum exercitation occaecat 
            laboris ball tip ribeye. Pork loin ea flank pork belly jerky. Strip steak sed esse t-bone alcatra incididunt laborum ex irure 
            meatloaf porchetta commodo dolore. Ea culpa capicola swine ut boudin turducken turkey ipsum. Ut cupidatat ground round, jerky 
            meatloaf incididunt minim turducken fatback capicola filet mignon salami.`,
            unixStartTime: 1470830537224,
            unixEndTime: 1471780966090,
            published: false
        }];

        mockathons.forEach(obj => hackathonService.create(obj));

    }

    getAllHackathons(req: Request, res: Response) {
        hackathonService.getAll()
            .then(result => res.json(200, result));
    }

    getHackathon(req: Request, res: Response) {
        hackathonService.get(req.params.id)
            .then(result => res.json(200, result));
    }

    createHackathon(req: Request, res: Response) {
        hackathonService.create(req.body)
            .then(() => res.send(200), (err) => res.send(500, err));
    }

    updateHackathon(req: Request, res: Response) {
        hackathonService.update(req.body)
            .then(() => res.send(200), (err) => res.send(500, err));
    }
}
