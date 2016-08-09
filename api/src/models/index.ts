import {userInitialize, UserModel} from './user';
import {hackathonInitialize, HackathonModel} from './hackathon';
import {addressInitialize, AddressModel} from './address';

// Careful, those are the pluralized sequelize names which are automatically mapped in database/index.ts
// This is currently not the best solution
export interface Models {
    Users: UserModel,
    Hackathons: HackathonModel,
    Addresses: AddressModel
}

export const MODELS = [userInitialize, hackathonInitialize, addressInitialize];
