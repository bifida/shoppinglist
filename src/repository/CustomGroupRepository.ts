import { Db } from 'mongodb';
import { CustomGroupDocument } from '../model/CustomGroupDocument';
import type { ICustomGroupRepository } from './ICustomGroupRepository';
import { RepositoryBase } from './RepositoryBase';

export class CustomGroupRepository extends RepositoryBase<CustomGroupDocument> implements ICustomGroupRepository<CustomGroupDocument> {
    constructor(db: Db) {
        super(db, "customgroup");
    }
}
