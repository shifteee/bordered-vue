import { DESCRIPTION_LIMIT } from '../../configs/task.js';

export default class Task {
    private readonly id: number;
    private readonly title: string;
    private readonly description: string;
    private readonly createdAt: Date;

    constructor(taskOption) {
        this.id = taskOption.id;
        this.title = taskOption.title;
        this.description = taskOption.description || '';
        this.createdAt = new Date(taskOption.createdAt);
    }

     validate(): void {
        if (!this.title) {
            throw new Error('Title field must be defined');
        }

        if (this.description && this.description.length > DESCRIPTION_LIMIT) {
            throw new Error(`Description field must be less then ${DESCRIPTION_LIMIT} symbols`);
        }
    }

    toPlainObject(): object {
        return Object.freeze({
            id: this.id,
            title: this.title,
            description: this.description,
            createdAt: this.createdAt,
        });
    }
}
