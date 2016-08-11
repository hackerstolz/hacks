export class HackathonModel {
    private _distance;
    private _startDateObj: Date;
    private _endDateObj: Date;

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

    get startDate(): Date {
        if(!!this._startDateObj && !!this.unixStartTime && this._startDateObj.getTime() !== this.unixStartTime) {
            this._startDateObj = new Date(+this.unixStartTime);
        }

        return this._startDateObj;
    }

    set startDate(dateString: string) {
        if(dateString.length > 0) {
            this._startDateObj = new Date(dateString);
            this.unixStartTime = this._startDateObj.getTime();
        }
    }

    get startDateString(): string {
        if(!this._startDateObj) {
           return '';
        }
        return this._startDateObj.toISOString().slice(0, 10);
    }

    get endDate(): Date {
        if(!!this._endDateObj && !!this.unixEndTime && this._endDateObj.getTime() !== this.unixEndTime) {
            this._endDateObj = new Date(+this.unixEndTime);
        }

        return this._endDateObj;
    }

    set endDate(dateString: string) {
        if(dateString.length > 0) {
            this._endDateObj = new Date(dateString);
            this.unixEndTime = this._endDateObj.getTime();
        }
    }

    get endDateString(): string {
        if(!this._endDateObj) {
           return '';
        }
        return this._endDateObj.toISOString().slice(0, 10);
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

