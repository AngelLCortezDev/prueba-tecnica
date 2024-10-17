import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";

//tabla empresas

export const Empresa = sequelize.define('empresas',{
    id_empresa:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
    nombre:{
        type:DataTypes.STRING(50),
        allowNull: false
    }
},{
    timestamps: false
});