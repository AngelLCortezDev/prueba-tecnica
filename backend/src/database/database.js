import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
    'pruebaPT',
    'postgres',
    'AngelLCortezDev',
    {
        host: 'localhost',
        dialect: 'postgres'
    }
);