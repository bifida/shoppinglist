import { ObjectId } from "mongodb";

export const enum CloneOpstions {
    AllItems = 0,
    Checked = 1,
    Unchecked = 2
}

export class CloneShoppingList {

    public name: string;
    public sourceId: ObjectId;
    public options: CloneOpstions;
    
    constructor(name: string, sourceId: ObjectId, options: CloneOpstions) {

        this.name = name;
        this.sourceId = sourceId;
        this.options = options;
    }
};