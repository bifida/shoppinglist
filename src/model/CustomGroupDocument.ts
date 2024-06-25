import { CustomGroupItemDocument } from "./CustomGroupItemDocument";
import { DocumentBase } from "./DocumentBase";


export class CustomGroupDocument extends DocumentBase {

    name: string;
    customGroupItems: CustomGroupItemDocument[];
    
    constructor() {

        super();

        this.name = "Unknown";
        this.customGroupItems = [];
    }
    
};

