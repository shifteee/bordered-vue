import {IIOAdapter} from "../interfaces/Adapter/IIOAdapter";

import filter from 'lodash.filter';

export default class localFileAdapter implements IIOAdapter {
    private readonly data: Set<object>;

    constructor(data: object[]) {
        this.data = new Set(data);
    }

    getAll(): Set<object> {
        return this.data;
    }

    getByQuery(query: object): Set<object> {
        const res = filter(Array.from(this.data), query);

        return new Set(res);
    }
}
