import type { IRepository } from "./IRepository";
import { MongoClient, Db, Collection, ObjectId, WithoutId } from 'mongodb';
import type { IDocument } from "../model/IDocument";

export abstract class RepositoryBase<T extends IDocument> implements IRepository<T> {

    public readonly collection: Collection;
    protected collectionName: string;

    constructor(db: Db, collectionName: string) {
        this.collectionName = collectionName;
        this.collection = db.collection(this.collectionName);
    }

    async find(query: object): Promise<T[]> {
        return await this.collection.find<T>(query).toArray();
    }

    async findOne(id: string): Promise<T | null> {
        return await this.collection.findOne<T>({ 
            _id: new ObjectId(id)
        });
    }

    async create(item: T): Promise<T | null> {
        console.log(`create item:${JSON.stringify(item)}`);
        var result = await this.collection.insertOne(item);
        console.log(`request:${result}`);
        if (!result.acknowledged)
            return null;

        return item;
    }

    async update(id: string, item: T): Promise<T | null> {
        
        console.log(`update item:${JSON.stringify(item)}`);

        var updateItem = item as WithoutId<T>;
        console.log(`update item after delete: ${JSON.stringify(item)}`);
        
        var filter = { _id: new ObjectId(id) };

        var result = await this.collection.findOneAndReplace(filter, updateItem, { "returnDocument": "after" });

        console.log(`result: ${JSON.stringify(result)}`);
        return item;
    }
    
    delete(id: string): Promise<T | null> {
        throw new Error("Method not implemented.");
    }

}