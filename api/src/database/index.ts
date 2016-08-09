import Sequelize = require('sequelize');
import {MODELS, Models} from '../models/index';

export interface DatabaseConfiguration {
    connectionString: string
}

export interface DatabaseInstance {
    models: Models,
    sequelize: Sequelize.Sequelize
}

let databaseInstance: DatabaseInstance;
let config: DatabaseConfiguration;

class Database {
    private _sequelize: Sequelize.Sequelize;
    private _models: Models = <any>{};

    initialize(): Promise<DatabaseInstance> {
        this._sequelize = new Sequelize(config.connectionString);
        this.initializeModels();

        // TODO: sync should only be used in development mode; for prod prefer migrations via sequelize-cli.
        return this._sequelize.sync({
            force: true
        })
            .then(() => <DatabaseInstance> {
                models: this._models,
                sequelize: this._sequelize
            });
    }

    private initializeModels() {
        MODELS.forEach(initFn => {
            const model = initFn(this._sequelize);
            this._models[model.getTableName()] = model;
        });

        Object.keys(this._sequelize.models).forEach((model: any) => {
            const associateFn = (<any>this._sequelize.models[model]).associate;
            if (!!associateFn) {
                associateFn(this._models);
            }
        });
    }
}

export const DatabaseProvider = {
    configure: (configuration: DatabaseConfiguration) => {
        config = configuration
    },
    get: (): Promise<DatabaseInstance> => {
        if (!config) {
            throw new Error('Please configure the database first.');
        }

        if (databaseInstance) {
            return Promise.resolve(databaseInstance);
        }

        const db = new Database();

        return db.initialize()
            .then((dbInstance: DatabaseInstance) => {
                databaseInstance = dbInstance;
                return databaseInstance
            });
    }
}
