export class HackathonModel {
    constructor(public id?: number,
                public title?: string,
                public host?: string,
                public location?: string,
                public description?: string,
                public unixStartTime?: string,
                public unixEndTime?: string) {

    }

    get date(): Date {
        return new Date(+this.unixStartTime);
    }

    get distance(): string {
        return `${Math.floor(Math.random() * 1000) / 10}km`;
    }

    get type(): string {
        return this.getTypeFromTime(+this.unixStartTime, +this.unixEndTime);
    }

    private getTypeFromTime(start: number, end: number): string {
        return `${parseInt((end - start) / 86400000)}-day hackathon`;
    }
}

