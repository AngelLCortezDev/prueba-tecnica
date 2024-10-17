import { DataTypes } from "sequelize";
import {sequelize} from '../../database/database.js';

//tabla datos_denuncias

export const Datos_denuncia = sequelize.define('datos_denuncias',{
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