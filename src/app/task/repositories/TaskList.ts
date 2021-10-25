import { IRepository } from "../../interfaces/Repository/IRepository";
import { IIOAdapter } from "../../interfaces/Adapter/IIOAdapter";
import { Add, Delete, List } from '../../interfaces/DTOs/TaskList/TaskLIstResponses';

import Task from "../entities/Task";

export default class TaskList implements IRepository<Task> {
    private readonly queryContext: IIOAdapter;

    constructor(queryContext: IIOAdapter) {
        this.queryContext = queryContext;
    }

    add(task: Task): Promise<boolean> {
        const query = {
            url: '/task/add',
            method: 'put',
            data: task.toPlainObject(),
        }

        return this.queryContext.add(query)
            .then((res: Add) => {
                if (!res.success) {
                    throw new Error('Returned status wasn\'t successfull');
                }

                return res.success;
            })
    }

    delete(task: Task): Promise<boolean> {
        const query = {
            url: '/task/delete',
            method: 'delete',
            data: task.toPlainObject(),
        }

        return this.queryContext.delete(query)
            .then((res: Delete) => {
                if (!res.success) {
                    throw new Error('Returned status wasn\'t successfull');
                }

                return res.success;
            });
    }

    byId(id: number): Promise<Task> {
        return this.byQuery({ id })
            .then((tasks: Task[]) => tasks[0]);
    }

    list(): Promise<Task[]> {
        const query = {
            url: '/task',
            method: 'get',
        }

        return this.queryContext.getAll(query)
            .then((res: List) => {
                if (!res.success) {
                    throw new Error('Returned status wasn\'t successfull');
                }

                return res.data.tasks.map(task => new Task(task));
            });
    }

    byQuery(params: object): Promise<Task[]> {
        const query = {
            url: '/task',
            method: 'get',
            data: params,
        }

        return this.queryContext.getByQuery(query)
            .then((res: List) => {
                if (!res.success) {
                    throw new Error('Returned status wasn\'t successfull');
                }

                return res.data.tasks.map(task => new Task(task));
            });
    }
}
