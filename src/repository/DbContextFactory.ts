import { create } from "domain";
import { Db, MongoClient } from "mongodb";
import { DbContext } from "./DbContext";

const config = require("../../appsettings.json");

export class DbContextFactory {
    static async Create() : Promise<DbContext> {

        var connectionString = config.MongoSettings.ConnectionString;
        var dataBaseName = config.MongoSettings.DatabaseName;

        console.log(`connectionString: ${connectionString}, dataBaseName: ${dataBaseName}`);

        var client = new MongoClient(connectionString);

        await client.connect();

        return new DbContext(
            client.db(dataBaseName)
            );
    }
}