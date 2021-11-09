import Task from '../Task.ts';
import { DESCRIPTION_LIMIT } from '../../../configs/task';

import { userInputsSet, longDescription } from '../__mocks__/userInputsSet';

describe('Task entity', () => {
    it('should throw error if header is empty', () => {
        const task = new Task({});

        expect(() => task.validate()).toThrow(Error);
    });

    it('should not throw error if description field is empty', () => {
        const userInput = userInputsSet[0];
        const task = new Task(userInput);

        expect(Reflect.get(task, 'description')).toBeDefined();
        expect(() => task.validate()).not.toThrow(Error);
    });

    it(`should throw error if description field is larger then ${DESCRIPTION_LIMIT} symbols if exists`, () => {
        const limit = DESCRIPTION_LIMIT + 1;
        const task = new Task(longDescription);

        expect( Reflect.get(task, 'description') ).toBeDefined();
        expect( Reflect.get(task, 'description') ).toHaveLength(limit);
        expect(() => task.validate()).toThrow(Error);
    });
});
