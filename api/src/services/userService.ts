import {UserPojo} from '../models/user';
import {DatabaseProvider} from '../database/index';

export class UserService {
    writeUserCreate(name: string, firstName?: string, lastName?: string) {
        const user: UserPojo = { name, firstName, lastName };

        return DatabaseProvider.get()
            .then(db => db.models.Users.create(user))
            .catch((err) => {
                throw new Error(`Error creating user: ${err}`);
            });
    }

    readUsersGetAll() {
        return DatabaseProvider.get()
            .then(db => db.models.Users.findAll());
    }
}
