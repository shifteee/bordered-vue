import {TVueRequest} from "../DTOs/TVueRequest";
import {TVueResponse} from "../DTOs/TVueResponse";

export interface IController {
    execute(req: TVueRequest, res: TVueResponse): void;
}
