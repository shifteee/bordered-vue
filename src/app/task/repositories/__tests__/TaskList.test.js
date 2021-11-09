import TaskList from '../TaskList.ts';
import Task from "../../entities/Task";

import makeFakeRequest from "../__mocks__/makeFakeRequest";
import { fullList, firstItem } from '../__mocks__/taskListFakeData';


describe('TaskList repository', () => {
    it('should send create request on add entity', async () => {
        const fakeResp = {
            success: true,
        };
        const requestContext = makeFakeRequest(fakeResp);
        const repo = new TaskList(requestContext);
        const task = new Task({});

        const res = await repo.add(task);

        expect(requestContext.add).toHaveBeenCalled();
        expect(requestContext.add.mock.calls[0][0].data).toMatchObject(task.toPlainObject());
        expect(res).toBe(true);
    });

    it('should send request on delete entity', async () => {
        const fakeResp = {
            success: true,
        };
        const requestContext = makeFakeRequest(fakeResp);
        const repo = new TaskList(requestContext);
        const task = new Task({});

        const res = await repo.delete(task);

        expect(requestContext.delete).toBeCalled();
        expect(requestContext.delete.mock.calls[0][0].data).toMatchObject(task.toPlainObject());
        expect(res).toBe(true);
    });

    it('should send request on list query', async ()=> {
        const fakeResp = {
            success: true,
            data: {
                tasks: fullList,
            },
        };
        const requestContext = makeFakeRequest(fakeResp);
        const repo = new TaskList(requestContext);

        const list = await repo.list();

        expect(requestContext.getAll).toBeCalled();
        expect(list.length).toBe(fullList.length);
        list.forEach(item => {
            expect(item).toBeInstanceOf(Task);
        });
    });

    it('should send request on search query', async () => {
        const fakeResp = {
            success: true,
            data: {
                tasks: fullList,
            },
        };
        const requestContext = makeFakeRequest(fakeResp);
        const repo = new TaskList(requestContext);

        const list = await repo.byQuery({});

        expect(list.length).toBe(fullList.length);
        expect(requestContext.getByQuery.mock.calls[0][0].data).toMatchObject({});
        list.forEach(item => {
            expect(item).toBeInstanceOf(Task);
        });
    });

    it('should send request on id query', async () => {
        const fakeResp = {
            success: true,
            data: {
                tasks: [firstItem],
            },
        };
        const requestContext = makeFakeRequest(fakeResp);
        const repo = new TaskList(requestContext);

        const task = await repo.byId(1);

        expect(task).toBeInstanceOf(Task);
    });
});
