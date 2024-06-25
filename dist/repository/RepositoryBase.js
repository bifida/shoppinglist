"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositoryBase = void 0;
const mongodb_1 = require("mongodb");
class RepositoryBase {
    constructor(db, collectionName) {
        this.collectionName = collectionName;
        this.collection = db.collection(this.collectionName);
    }
    find(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.collection.find(query).toArray();
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.collection.findOne({
                _id: new mongodb_1.ObjectId(id)
            });
        });
    }
    create(item) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`create item:${JSON.stringify(item)}`);
            var result = yield this.collection.insertOne(item);
            console.log(`request:${result}`);
            if (!result.acknowledged)
                return null;
            return item;
        });
    }
    update(id, item) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`update item:${JSON.stringify(item)}`);
            var updateItem = item;
            console.log(`update item after delete: ${JSON.stringify(item)}`);
            var filter = { _id: new mongodb_1.ObjectId(id) };
            var result = yield this.collection.findOneAndReplace(filter, updateItem, { "returnDocument": "after" });
            console.log(`result: ${JSON.stringify(result)}`);
            return item;
        });
    }
    delete(id) {
        throw new Error("Method not implemented.");
    }
}
exports.RepositoryBase = RepositoryBase;
//# sourceMappingURL=RepositoryBase.js.map