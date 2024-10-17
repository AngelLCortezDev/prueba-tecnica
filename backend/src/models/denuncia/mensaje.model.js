import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";

//tabla mensajes

export const Mensaje = sequelize.define('mensajes',{
    id_mensaje:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    contenido:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    timestamps: false
});