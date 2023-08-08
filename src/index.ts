import express, { Application, Request, Response } from "express";
import Database from "./config/db";

class App {
    public app: Application

    constructor () {
        this.app = express();
        this.databaseSync();
        this.routes();
    }

    protected databaseSync():void {
        const db = new Database();
        db.sequelize?.sync()
    }

    protected routes(): void {
        this.app?.route("/").get((req: Request, res: Response) => {
            res.send('Welcome');
        });
    }
}


const port:number = 5432
const app = new App().app

app.listen(port,()=>{
    console.log("Server has been started!")
});