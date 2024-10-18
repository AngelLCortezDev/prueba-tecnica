import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";
import { Denuncia } from "../denuncia/denuncia.model.js";

//tablas detalles_denuncias

export const Detalle_Denuncia = sequelize.define('detalles_denuncias',{
    id_detalle_denuncia:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descripcion:{
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha:{
        type: DataTypes.DATE,
        allowNull: false
    },
    status:{
        type:DataTypes.SMALLINT,
        allowNull: false
    }
},{
    timestamps: false
});

//Relaciones

//Una denuncia solo tiene un detalle de denucia
Detalle_Denuncia.hasOne(Denuncia,{
    foreignKey: 'detalles_denuncia'
});