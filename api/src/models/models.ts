import {initialize as user, UserModel}      from './user';
import {initialize as address, AddressModel}      from './address';

// Careful, those are the pluralized sequelize names which are automatically mapped in database/index.ts
// This is currently not the best solution
export interface Models {
    Users: UserModel,
    Addresses: AddressModel
}

export const MODELS = [address, user];
