import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";
import {Datos_Denuncia } from "../denuncia/datos_denuncia.model.js"

//tabla estados

export const Estado = sequelize.define('estados', {
    id_estado: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, {
    timestamps: false
});

//Relaciones

//Un estado tiene muchas denucias
Estado.hasMany(Datos_Denuncia,{
    foreignKey: 'estado',
    sourceKey: 'id_estado'
});
