import { DESCRIPTION_LIMIT } from '../../../configs/task';

const limit = DESCRIPTION_LIMIT + 1;

export const userInputsSet = [
    {
        id: 1,
        title: 'test title1',
    },
    {
        id: 2,
        title: 'test title2',
    },
];

export const longDescription = {
    title: 'test title1',
    description: String.prototype.padStart.call('', limit, '-'),
}
