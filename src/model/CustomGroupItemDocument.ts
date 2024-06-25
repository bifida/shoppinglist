import { ObjectId } from 'mongodb';
import { ListItemDocumentBase } from "./ListItemDocumentBase";

export class CustomGroupItemDocument extends ListItemDocumentBase {

    constructor(name: string, description: string | null, unitId: ObjectId | null, quantity: number | null) {

        super(name, description, unitId, quantity);
    }
};

