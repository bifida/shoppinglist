"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingListRepository = void 0;
const RepositoryBase_1 = require("./RepositoryBase");
class ShoppingListRepository extends RepositoryBase_1.RepositoryBase {
    constructor(db) {
        super(db, "shoppinglist");
    }
}
exports.ShoppingListRepository = ShoppingListRepository;
//# sourceMappingURL=ShoppingListRepository.js.map