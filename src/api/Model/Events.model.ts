export class EventModel {
    public EVENT_NAME: string

    execute: (data: object | string | number | boolean | any[]) => Promise<any>;

    constructor({ EVENT_NAME, execute }: EventModel) {
        this.EVENT_NAME = EVENT_NAME;
        this.execute = execute;
    }
}