"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDocument = void 0;
const DocumentBase_1 = require("./DocumentBase");
class UserDocument extends DocumentBase_1.DocumentBase {
    constructor(userName, passwordHash, email) {
        super();
        this.userName = userName;
        this.passwordHash = passwordHash;
        this.email = email;
        this.meta = new Map();
    }
}
exports.UserDocument = UserDocument;
//# sourceMappingURL=UserDocument.js.map