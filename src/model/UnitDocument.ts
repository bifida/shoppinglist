import { DocumentBase } from "./DocumentBase";

export class UnitDocument extends DocumentBase{

    public name: string;
    public description: string | null;

    constructor (name: string, description: string | null) {

        super();
        
        this.name = name;
        this.description = description;
    }
}