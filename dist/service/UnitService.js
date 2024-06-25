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
const DbContextFactory_1 = require("../repository/DbContextFactory");
const router = express_1.default.Router();
router.get('/unit/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var context = yield DbContextFactory_1.DbContextFactory.Create();
        var result = yield context.UnitRepository.find({});
        res.send(result);
    }
    catch (error) {
        res.send(error);
    }
}));
router.get('/unit/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var context = yield DbContextFactory_1.DbContextFactory.Create();
        var document = yield context.UnitRepository.findOne(req.params.id);
        res.send(document);
    }
    catch (error) {
        res.send(error);
    }
}));
router.post('/unit', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var requestDocument = req.body;
    console.log(`post unit: ${requestDocument}`);
    try {
        var context = yield DbContextFactory_1.DbContextFactory.Create();
        var document = yield context.UnitRepository.create(requestDocument);
        res.send(document);
    }
    catch (error) {
        res.send(error);
    }
}));
router.put('/unit/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var context = yield DbContextFactory_1.DbContextFactory.Create();
        var document = yield context.UnitRepository.update(req.params.id, req.body);
        res.send(document);
    }
    catch (error) {
        res.send(error);
    }
}));
module.exports = router;
//# sourceMappingURL=UnitService.js.map