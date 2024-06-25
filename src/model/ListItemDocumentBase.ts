import { ObjectId } from "mongodb";
import { DocumentBase } from "./DocumentBase";

export class ListItemDocumentBase extends DocumentBase {

    name: string;
    description: string | null;
    unitId: ObjectId | null;
    quantity: number | null;

    constructor (name: string, description: string | null, unitId: ObjectId | null, quantity: number | null) {

        super();

        this.description = null;
        this.name = null;
        this.unitId = null;
        this.quantity = null;
    }
}