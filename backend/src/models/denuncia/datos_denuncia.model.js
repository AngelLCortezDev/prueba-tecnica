import { DataTypes } from "sequelize";
import {sequelize} from '../../database/database.js';
import { Denuncia } from "./denuncia.model.js";

//tabla datos_denuncias

export const Datos_Denuncia = sequelize.define('datos_denuncias',{
    id_datos_denuncia:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    num_centro:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    timestamps:false
});

//Relaciones
//Datos_Denuncia(Información sucursal) puede tener muchas denuncias
Datos_Denuncia.hasMany(Denuncia,{
    foreignKey: 'datos_denuncia',
});
//Una denuncia tiene un conjunto de datos de denuncia
Denuncia.belongsTo(Datos_Denuncia,{
    foreignKey: 'datos_denuncia',
    as: 'fk_datos_denuncia'
});


