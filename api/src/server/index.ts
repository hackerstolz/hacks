import restify = require('restify');
import {controllers} from '../controllers';
import {Route} from './route';
import debug = require('debug');
import {DatabaseConfiguration, DatabaseProvider} from '../database/index';
import AppConfig from '../config';
const logger = debug('api:server');

export class Server {
    private _port: number;
    private _server: any;

    constructor(port: number) {
        logger(`Creating server on port ${port}`);

        this._port = port;
        this._server = this.createRestifyServer();
    }

    addRoute(route: Route) {
        if (!route) {
            throw new Error('Parameter route is mandatory');
        }

        logger(`Adding route ${route.method.toUpperCase()} ${route.path}`);
        this._server[route.method.toLowerCase()](route.path, route.callback);
    }

    start() {
        this.initializeDatabase()
            .then(() => {
                this.initializeControllers();

                this._server.listen(this._port, () => console.log(`Server running at ${this._server.url}`));
            });
    }

    private initializeDatabase() {
        const databaseConfiguration: DatabaseConfiguration = <DatabaseConfiguration>AppConfig.database;

        DatabaseProvider.configure(databaseConfiguration);

        // Pre-heat the database
        return DatabaseProvider.get();
    }

    private initializeControllers() {
        controllers.forEach((controller) => controller.init(this));
    }

    private createRestifyServer() {
        const server = restify.createServer();
        server.use(restify.CORS());
        server.use(restify.queryParser());
        server.use(restify.bodyParser({ mapParams: false }));

        return server;
    }
}
