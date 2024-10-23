import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";
import {Datos_Denuncia} from "../denuncia/datos_denuncia.model.js";

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

//Relaciones
//Una empresa puede tener muchas denuncias
Empresa.hasMany(Datos_Denuncia,{
    foreignKey: 'empresa',
});
//Una denuncia tiene una empresa
Datos_Denuncia.belongsTo(Empresa,{
    foreignKey: 'empresa',
    as: 'fk_empresa'
});