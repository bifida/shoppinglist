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
exports.DbContextFactory = void 0;
const mongodb_1 = require("mongodb");
const DbContext_1 = require("./DbContext");
const config = require("../../appsettings.json");
class DbContextFactory {
    static Create() {
        return __awaiter(this, void 0, void 0, function* () {
            var connectionString = config.MongoSettings.ConnectionString;
            var dataBaseName = config.MongoSettings.DatabaseName;
            console.log(`connectionString: ${connectionString}, dataBaseName: ${dataBaseName}`);
            var client = new mongodb_1.MongoClient(connectionString);
            yield client.connect();
            return new DbContext_1.DbContext(client.db(dataBaseName));
        });
    }
}
exports.DbContextFactory = DbContextFactory;
//# sourceMappingURL=DbContextFactory.js.map