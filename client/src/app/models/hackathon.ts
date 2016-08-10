export class HackathonModel {
    private _distance;
    constructor(public id?: number,
                public title?: string,
                public host?: string,
                public location?: string,
                public description?: string,
                public unixStartTime?: number,
                public unixEndTime?: number) {
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
}

