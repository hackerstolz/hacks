import {UserPojo, UserInstance} from '../models/user';
import {DatabaseProvider} from '../database/index';

export class UserService {
    create(user: UserPojo) {
        return DatabaseProvider.get()
            .then(db => db.models.Users.create(user))
            .catch((err) => {
                throw new Error(`Error creating user: ${err}`);
            });
    }

    getAll(): Promise<UserInstance[]> {
        return DatabaseProvider.get()
            .then(db => db.models.Users.findAll());
            //.then((results: UserInstance[]) => );
    }
}
