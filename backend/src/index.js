import app from './app.js';
import {sequelize} from './database/database.js';

//importar modelos de datos y relaciones

import './models/datos/empresa.model.js';
import './models/datos/pais.model.js';
import './models/datos/estado.model.js';
import './models/denuncia/denuncia.model.js';
import './models/denuncia/datos_denuncia.model.js';
import './models/denuncia/denunciante.model.js';
import './models/denuncia/detalle_denuncia.model.js';
import './models/denuncia/mensaje.model.js';
import './models/usuarios/admin.model.js';

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