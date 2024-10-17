import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";

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
        type:DataTypes.TINYINT,
        allowNull: false
    }
},{
    timestamps: false
});