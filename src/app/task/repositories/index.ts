import {createResolve, Container} from "@owja/ioc";

import {IController} from "../../interfaces/Controller/IController";

export const TYPES = {
    TaskList: Symbol.for('TaskList'),
};

export const containerize = (container: Container) => {
    container.bind<IController>(TYPES.TaskList);

    return createResolve(container);
}
