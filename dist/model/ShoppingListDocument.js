"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingListDocument = void 0;
const DocumentBase_1 = require("./DocumentBase");
class ShoppingListDocument extends DocumentBase_1.DocumentBase {
    constructor() {
        super();
        this.name = "Unknown";
        this.shoppingListItems = [];
        this.status = "OPENED" /* ShoppingStatus.Opened */;
    }
}
exports.ShoppingListDocument = ShoppingListDocument;
;
//# sourceMappingURL=ShoppingListDocument.js.map