"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentBase = void 0;
const uuid_1 = require("uuid");
class DocumentBase {
    constructor() {
        this.concurrencyStamp = (0, uuid_1.v4)();
    }
}
exports.DocumentBase = DocumentBase;
//# sourceMappingURL=DocumentBase.js.map