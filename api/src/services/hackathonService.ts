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

    update(hackathon: HackathonPojo) {
        return DatabaseProvider.get()
            .then(db => db.models.Hackathons.update(hackathon, { where: { id: hackathon.id } }))
            .catch((err) => {
                throw new Error(`Error creating hackathon: ${err}`);
            });
    }

    getAll() {
        return DatabaseProvider.get()
            .then(db => db.models.Hackathons.findAll());
    }

    get(id: number) {
        return DatabaseProvider.get()
            .then(db => db.models.Hackathons.findAll({
                where: {
                    id: id
                }
            }));
    }
}
