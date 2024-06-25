import { ObjectId } from 'mongodb';
import type { IDocument } from './IDocument';
import { v4 as uuidv4 } from "uuid";

export class DocumentBase implements IDocument {

    public _id?: ObjectId;
    public concurrencyStamp: string;

    constructor() {
        this.concurrencyStamp = uuidv4();
    }
}