import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
    'bdLineaDenuncias',
    'linea-denunciasAdmin',
    'AngelLCortezDev.prueba-tecnica',
    {
        host: '35.225.97.224',
        dialect: 'postgres'
    }
);