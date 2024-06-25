import { Db } from 'mongodb';
import { ShoppingListDocument } from '../model/ShoppingListDocument';
import type { IShoppingListRepository } from './IShoppingListRepository';
import { RepositoryBase } from './RepositoryBase';

export class ShoppingListRepository extends RepositoryBase<ShoppingListDocument> implements IShoppingListRepository<ShoppingListDocument> {
    constructor(db: Db) {
        super(db, "shoppinglist");
    }
}