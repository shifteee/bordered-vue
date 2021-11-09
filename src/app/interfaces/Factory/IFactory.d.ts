export interface IFactory<T> {
    get( id: string ): T;
}
