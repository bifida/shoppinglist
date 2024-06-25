import { DocumentBase } from "./DocumentBase";
import type { IMeta } from "./IMeta";

export class UserDocument extends DocumentBase implements IMeta{
    public meta: Map<string, string>;

    public userName: string;
    public passwordHash: string;
    public email: string;

    constructor (userName: string, passwordHash: string, email: string) {

        super();
        
        this.userName = userName;
        this.passwordHash = passwordHash;
        this.email = email;
        this.meta = new Map<string, string>();
    }
}