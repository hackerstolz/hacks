import {HackathonPojo} from '../models/hackathon';
import {DatabaseProvider} from '../database/index';

export class HackathonService {
    create(hackathon: HackathonPojo) {
        return DatabaseProvider.get()
            .then(db => db.models.Hackathons.create(hackathon))
            .catch((err) => {
                throw new Error(`Error creating hackathon: ${err}`);
            });
    }

    getAll() {
        return DatabaseProvider.get()
            .then(db => db.models.Users.findAll());
    }
}
