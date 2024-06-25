"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListItemDocumentBase = void 0;
const DocumentBase_1 = require("./DocumentBase");
class ListItemDocumentBase extends DocumentBase_1.DocumentBase {
    constructor(name, description, unitId, quantity) {
        super();
        this.description = null;
        this.name = null;
        this.unitId = null;
        this.quantity = null;
    }
}
exports.ListItemDocumentBase = ListItemDocumentBase;
//# sourceMappingURL=ListItemDocumentBase.js.map