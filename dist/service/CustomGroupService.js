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
const CustomGroupDocument_1 = require("../model/CustomGroupDocument");
const DbContextFactory_1 = require("../repository/DbContextFactory");
const router = express_1.default.Router();
router.get('/customgroup/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var context = yield DbContextFactory_1.DbContextFactory.Create();
        var result = yield context.CustomGroupRepository.find({});
        res.send(result);
    }
    catch (error) {
        res.send(error);
    }
}));
router.get('/customgroup/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var context = yield DbContextFactory_1.DbContextFactory.Create();
        var document = yield context.CustomGroupRepository.findOne(req.params.id);
        res.send(document);
    }
    catch (error) {
        res.send(error);
    }
}));
router.post('/customgroup', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var requestDocument = new CustomGroupDocument_1.CustomGroupDocument();
    Object.assign(requestDocument, req.body);
    try {
        var context = yield DbContextFactory_1.DbContextFactory.Create();
        var document = yield context.CustomGroupRepository.create(requestDocument);
        res.send(document);
    }
    catch (error) {
        res.send(error);
    }
}));
router.put('/customgroup/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var context = yield DbContextFactory_1.DbContextFactory.Create();
        var document = yield context.CustomGroupRepository.update(req.params.id, req.body);
        res.send(document);
    }
    catch (error) {
        res.send(error);
    }
}));
router.post('/customgroup/:id/customgroupitem', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var context = yield DbContextFactory_1.DbContextFactory.Create();
        var customGroup = yield context.CustomGroupRepository.findOne(req.params.id);
        var customGroupItem = req.body;
        Object.assign(customGroupItem, req.body);
        customGroup === null || customGroup === void 0 ? void 0 : customGroup.customGroupItems.push(customGroupItem);
        var document = yield context.CustomGroupRepository.update(req.params.id, customGroup);
        res.send(document);
    }
    catch (error) {
        res.send(error);
    }
}));
module.exports = router;
//# sourceMappingURL=CustomGroupService.js.map