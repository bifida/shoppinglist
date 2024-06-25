"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingListItemDocument = void 0;
const ListItemDocumentBase_1 = require("./ListItemDocumentBase");
class ShoppingListItemDocument extends ListItemDocumentBase_1.ListItemDocumentBase {
    constructor(name, description, unitId, quantity) {
        super(name, description, unitId, quantity);
        this.checked = false;
    }
}
exports.ShoppingListItemDocument = ShoppingListItemDocument;
;
//# sourceMappingURL=ShoppingListItemDocument.js.map