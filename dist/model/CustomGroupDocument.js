"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomGroupDocument = void 0;
const DocumentBase_1 = require("./DocumentBase");
class CustomGroupDocument extends DocumentBase_1.DocumentBase {
    constructor() {
        super();
        this.name = "Unknown";
        this.customGroupItems = [];
    }
}
exports.CustomGroupDocument = CustomGroupDocument;
;
//# sourceMappingURL=CustomGroupDocument.js.map