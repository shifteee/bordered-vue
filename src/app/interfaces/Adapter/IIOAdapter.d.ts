export interface IIOAdapter<Query = unknown, T = unknown> {
    add(entity: Query): Promise<T>;

    delete(entity: Query): Promise<T>;

    getAll(query: Query): Promise<T>;

    getByQuery(query: Query): Promise<T>;
}
