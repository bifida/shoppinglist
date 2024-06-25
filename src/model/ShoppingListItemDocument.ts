import { ObjectId } from 'mongodb';
import { ListItemDocumentBase } from "./ListItemDocumentBase";

export class ShoppingListItemDocument extends ListItemDocumentBase {

    public checked: boolean;

    constructor(name: string, description: string | null, unitId: ObjectId | null, quantity: number | null) {

        super(name, description, unitId, quantity);

        this.checked = false;
    }

};