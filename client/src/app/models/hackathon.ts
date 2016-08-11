export class HackathonModel {
    private _distance;
    private _dateObj: Date;

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
        if(!!this._dateObj && !!this.unixStartTime && this._dateObj.getTime() !== this.unixStartTime) {
            this._dateObj = new Date(+this.unixStartTime);
        }

        return this._dateObj;
    }

    get dateString(): string {
        if(!this._dateObj) {
           return '';
        }
        return this._dateObj.toISOString().slice(0, 10);
    }

    set date(dateString: string) {
        if(dateString.length > 0) {
            this._dateObj = new Date(dateString);
            this.unixStartTime = this._dateObj.getTime();
        }
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

