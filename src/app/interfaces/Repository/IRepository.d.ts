export interface IRepository<T> {
    add(entity: T): Promise<boolean>;

    delete(entity: T): Promise<boolean>;

    byId(id: number): Promise<T>;

    byQuery(query: object): Promise<T[]>;

    list(): Promise<T[]>;
}
