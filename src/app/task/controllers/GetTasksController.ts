import {IController} from "../../interfaces/Controller/IController";
import {TVueRequest} from "../../interfaces/DTOs/TVueRequest";
import {TVueResponse} from "../../interfaces/DTOs/TVueResponse";
import {IRepository} from "../../interfaces/Repository/IRepository";

import Task from "../entities/Task";

export default class AddTaskController implements IController {
    private readonly taskList: IRepository<Task>;

    constructor(resolve) {
        this.taskList = resolve(Symbol.for('TaskList'));
    }

    execute(req: TVueRequest, res: TVueResponse<Task>) {
        this.taskList.list()
            .then(tasks => {
                tasks.forEach(task => Object.assign(res, task));
            });
    }
}
