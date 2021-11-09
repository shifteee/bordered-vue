import {IControllers} from "./interfaces/Factory/IControllers";
import {IController} from "./interfaces/Controller/IController";

import controllersMap from './controllersMap';

export default class Controllers implements IControllers {
    private readonly resolve;

    constructor(resolve) {
        this.resolve = resolve;
    }

    get( path: string ): IController {
        if ( !controllersMap.has(path) ) {
            throw new Error(`Controller with path '${path}' is not registered`);
        }

        const Controller = controllersMap.get(path);

        return new Controller(this.resolve);
    }
}
