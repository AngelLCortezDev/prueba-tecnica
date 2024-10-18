import app from './app.js';
import {sequelize} from './database/database.js';

async function main(){
    try {
        await sequelize.authenticate();
        console.log("Connection has been established succesfully.");
        app.listen(3000);
        console.log('Server is listening on port',3000);
    } catch (error) {
        console.error("Unable to connecto to database:",error);
    }
}

main();