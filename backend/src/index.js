import app from './app.js';
import {sequelize} from './database/database.js';

import './models/empresa.model.js';
import './models/pais.model.js';
import './models/estado.model.js';

async function main(){
    try {
        await sequelize.sync({force: true});
        console.log("Connection has been established succesfully.");
        app.listen(3000);
        console.log('Server is listening on port',3000);
    } catch (error) {
        console.error("Unable to connecto to database:",error);
    }
}

main();