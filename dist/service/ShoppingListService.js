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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongodb_1 = require("mongodb");
const ShoppingListDocument_1 = require("../model/ShoppingListDocument");
const DbContextFactory_1 = require("../repository/DbContextFactory");
const router = express_1.default.Router();
router.get('/shoppinglist/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var context = yield DbContextFactory_1.DbContextFactory.Create();
        var result = yield context.ShoppingListRepository.find({});
        res.send(result);
    }
    catch (error) {
        res.send(error);
    }
}));
router.get('/shoppinglist/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var context = yield DbContextFactory_1.DbContextFactory.Create();
        var document = yield context.ShoppingListRepository.findOne(req.params.id);
        res.send(document);
    }
    catch (error) {
        res.send(error);
    }
}));
router.post('/shoppinglist', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var requestDocument = new ShoppingListDocument_1.ShoppingListDocument();
    Object.assign(requestDocument, req.body);
    try {
        var context = yield DbContextFactory_1.DbContextFactory.Create();
        var document = yield context.ShoppingListRepository.create(requestDocument);
        res.send(document);
    }
    catch (error) {
        res.send(error);
    }
}));
router.put('/shoppinglist/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var requestDocument = new ShoppingListDocument_1.ShoppingListDocument();
    Object.assign(requestDocument, req.body);
    try {
        var context = yield DbContextFactory_1.DbContextFactory.Create();
        var document = yield context.ShoppingListRepository.update(req.params.id, req.body);
        res.send(document);
    }
    catch (error) {
        res.send(error);
    }
}));
router.post('/shoppinglist/:id/shoppinglistitem', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var context = yield DbContextFactory_1.DbContextFactory.Create();
        var shoppingList = yield context.ShoppingListRepository.findOne(req.params.id);
        var shoppingListItem = req.body;
        Object.assign(shoppingListItem, req.body);
        shoppingList === null || shoppingList === void 0 ? void 0 : shoppingList.shoppingListItems.push(shoppingListItem);
        var document = yield context.ShoppingListRepository.update(req.params.id, shoppingList);
        res.send(document);
    }
    catch (error) {
        res.send(error);
    }
}));
router.get('/shoppinglist/:id/shoppinglistitem/:checked?', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        try {
            var context = yield DbContextFactory_1.DbContextFactory.Create();
            var shoppinglist = yield context.ShoppingListRepository.findOne(req.params.id);
            var result = shoppinglist === null || shoppinglist === void 0 ? void 0 : shoppinglist.shoppingListItems;
            if (req.params.checked != undefined) {
                result = (_a = shoppinglist === null || shoppinglist === void 0 ? void 0 : shoppinglist.shoppingListItems) === null || _a === void 0 ? void 0 : _a.filter((item) => {
                    return item.checked.toString().toLowerCase() === req.params.checked.toLowerCase();
                });
            }
            res.send(result);
        }
        catch (error) {
            res.send(error);
        }
    });
});
router.post('/shoppinglist/:id/clone', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var requestDto = req.body;
        console.log(`clone requestDto: ${JSON.stringify(requestDto)}`);
        var context = yield DbContextFactory_1.DbContextFactory.Create();
        var shoppinglist = yield context.ShoppingListRepository.findOne(req.params.id);
        console.log(`clone shoppingList: ${JSON.stringify(shoppinglist)}`);
        var clonedShoppingList = new ShoppingListDocument_1.ShoppingListDocument();
        Object.assign(clonedShoppingList, shoppinglist);
        console.log(`clonedShoppingList: ${JSON.stringify(clonedShoppingList)}`);
        // if (requestDto.options != CloneOpstions.AllItems) {
        //     var items = clonedShoppingList.shoppingListItems?.filter((item) => {
        //         var checked = requestDto.options === CloneOpstions.Checked ? "true" : "false";
        //         return item.checked.toString().toLowerCase() === checked;
        //     });
        // }
        clonedShoppingList._id = new mongodb_1.ObjectId();
        clonedShoppingList.name = requestDto.name;
        console.log(`clonedShoppingList2: ${JSON.stringify(clonedShoppingList)}`);
        var document = yield context.ShoppingListRepository.create(clonedShoppingList);
        console.log(`cloned document: ${JSON.stringify(document)}`);
        res.send(document);
    }
    catch (error) {
        res.send(error);
    }
}));
module.exports = router;
//# sourceMappingURL=ShoppingListService.js.map