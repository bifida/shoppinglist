"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbContext = void 0;
const CustomGroupRepository_1 = require("./CustomGroupRepository");
const ShoppingListRepository_1 = require("./ShoppingListRepository");
const UnitRepository_1 = require("./UnitRepository");
class DbContext {
    constructor(db) {
        this.dataBase = db;
        this.ShoppingListRepository = new ShoppingListRepository_1.ShoppingListRepository(this.dataBase);
        this.CustomGroupRepository = new CustomGroupRepository_1.CustomGroupRepository(this.dataBase);
        this.UnitRepository = new UnitRepository_1.UnitRepository(this.dataBase);
    }
}
exports.DbContext = DbContext;
//# sourceMappingURL=DbContext.js.map