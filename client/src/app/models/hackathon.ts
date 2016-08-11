export class HackathonModel {
    private _distance;

    constructor(public id?: number,
                public title?: string,
                public host?: string,
                public location?: string,
                public description?: string,
                public unixStartTime?: number,
                public unixEndTime?: number,
                public published?: boolean) {
        this._distance = `${Math.floor(Math.random() * 1000) / 10}km`;
    }

    get date(): Date {
        return new Date(+this.unixStartTime);
    }

    get distance(): string {
        return this._distance;
    }

    get type(): string {
        return (!!this.unixStartTime && !!this.unixEndTime) ? this.getTypeFromTime(+this.unixStartTime, +this.unixEndTime) : '';
    }

    private getTypeFromTime(start: number, end: number): string {
        return `${parseInt((end - start) / 86400000)}-day hackathon`;
    }

    public serialize(): Object {
        return {
            title: this.title,
            description: this.description,
            host: this.host,
            unixStartTime: this.unixStartTime,
            unixEndTime: this.unixEndTime,
            location: this.location,
            published: this.published
        };
    }
}

