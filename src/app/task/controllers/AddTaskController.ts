import {IController} from "../../interfaces/Controller/IController";
import {TVueRequest} from "../../interfaces/DTOs/TVueRequest";
import {TVueResponse} from "../../interfaces/DTOs/TVueResponse";
import {IRepository} from "../../interfaces/Repository/IRepository";
import Task from "../entities/Task";

export default class AddTaskController implements IController {
    private readonly taskList: IRepository<Task>;

    constructor(resolve) {
        this.taskList = <IRepository<Task>>resolve(Symbol.for('taskList'));
    }

    execute(req: TVueRequest, res: TVueResponse) {
        this.taskList.list()
            .then(tasks => {
                Object.assign(res, {
                    error: false,
                    data: {
                        tasks
                    },
                });
            });
    }
}
