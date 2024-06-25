import { Db, MongoClient } from "mongodb";
import { CustomGroupDocument } from "../model/CustomGroupDocument";
import { ShoppingListDocument } from "../model/ShoppingListDocument";
import { UnitDocument } from "../model/UnitDocument";
import { CustomGroupRepository } from "./CustomGroupRepository";
import type { ICustomGroupRepository } from "./ICustomGroupRepository";
import { IShoppingListRepository } from "./IShoppingListRepository";
import { IUnitRepository } from "./IUnitRepository";
import { ShoppingListRepository } from "./ShoppingListRepository";
import { UnitRepository } from "./UnitRepository";

export class DbContext {

    public readonly dataBase: Db;
    public readonly ShoppingListRepository: IShoppingListRepository<ShoppingListDocument>;
    public readonly CustomGroupRepository: ICustomGroupRepository<CustomGroupDocument>;
    public readonly UnitRepository: IUnitRepository<UnitDocument>;
    
    constructor (db: Db) {

        this.dataBase = db;

        this.ShoppingListRepository = new ShoppingListRepository(this.dataBase);
        this.CustomGroupRepository = new CustomGroupRepository(this.dataBase);
        this.UnitRepository = new UnitRepository(this.dataBase);
    }
}