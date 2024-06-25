import { Db } from 'mongodb';
import { ShoppingListDocument } from '../model/ShoppingListDocument';
import { UnitDocument } from '../model/UnitDocument';
import type { IShoppingListRepository } from './IShoppingListRepository';
import { RepositoryBase } from './RepositoryBase';

export class UnitRepository extends RepositoryBase<UnitDocument> implements IShoppingListRepository<UnitDocument> {
    constructor(db: Db) {
        super(db, "unit");
    }
}