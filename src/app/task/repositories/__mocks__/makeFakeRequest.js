export default function makeFakeRequest(resolved) {
    return {
        add: jest.fn().mockImplementation(() => Promise.resolve(resolved)),

        delete: jest.fn().mockImplementation(() => Promise.resolve(resolved)),

        getAll: jest.fn().mockImplementation(() => Promise.resolve(resolved)),

        getByQuery: jest.fn().mockImplementation(() => Promise.resolve(resolved)),

        getById: jest.fn().mockImplementation(() => Promise.resolve(resolved)),
    };
};
