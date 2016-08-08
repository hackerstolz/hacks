import {RequestHandler} from 'restify';

export class Route {
    constructor(public method: string,
                public path: string,
                public callback: RequestHandler) {
        this.validate();
    }

    private validate() {
        if (!this.method || !this.method.trim()) {
            throw new Error('Parameter method is mandatory.');
        }

        if (!this.path || !this.path.trim()) {
            throw new Error('Parameter path is mandatory.');
        }

        if (!this.callback || typeof this.callback !== 'function') {
            throw new Error('Parameter callback is mandatory.');
        }
    }
}

export class GetRoute extends Route {
    constructor(public path: string,
                public callback: RequestHandler) {
        super('get', path, callback)
    }
}

export class PostRoute extends Route {
    constructor(public path: string,
                public callback: RequestHandler) {
        super('post', path, callback);
    }
}
