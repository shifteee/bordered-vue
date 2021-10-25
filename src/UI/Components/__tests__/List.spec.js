import {shallowMount} from '@vue/test-utils';

import List from '../List.vue';
import { fullList } from '../../../app/task/repositories/__mocks__/taskListFakeData';


function makeFakeController(fakeData) {
    return {
        execute: jest.fn().mockImplementation((req, res) => {
            Object.assign(res, fakeData);
        }),
    }
}

describe('List component', () => {
    it('should render loading if no data', async () => {
        const controller = makeFakeController();
        const component = shallowMount(List, {
            global: {
                provide: {
                    controllers: {
                        get() {
                            return controller;
                        }
                    }
                }
            }
        });

        const loadingComponent = component.find('.loading');

        expect(loadingComponent.exists()).toBe(true);
    });

    it('should render task list if there is a data available', () => {
        const controller = makeFakeController({
            error: false,
            data: fullList,
        });
        const component = shallowMount(List, {
            global: {
                provide: {
                    controllers: {
                        get() {
                            return controller;
                        }
                    }
                }
            }
        });

        const loadingComponent = component.find('.loading');
        const taskListElem = component.findAll('.task');

        expect(loadingComponent.exists()).toBe(false);
        expect(taskListElem.length).toBe(2);
    });
});
