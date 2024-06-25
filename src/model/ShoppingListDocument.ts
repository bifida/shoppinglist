import { DocumentBase } from "./DocumentBase";
import { ShoppingListItemDocument } from "./ShoppingListItemDocument";
import { ShoppingStatus } from "./ShoppingStatus";

export class ShoppingListDocument extends DocumentBase {

    name: string;
    shoppingDateTime? : Date
    status: ShoppingStatus
    shoppingListItems: ShoppingListItemDocument[];

    constructor() {

        super();

        this.name = "Unknown";
        this.shoppingListItems = []; 
        this.status = ShoppingStatus.Opened;
    }
};