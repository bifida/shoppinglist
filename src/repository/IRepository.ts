import { ObjectId } from "mongodb";

export interface IRepository<T> {
    find(query: object): Promise<T[]>;
    findOne(id: string): Promise<T | null>;
    create(item: T): Promise<T | null>;
    update(id: string, item: T): Promise<T | null>;
    delete(id: string): Promise<T | null>;
}