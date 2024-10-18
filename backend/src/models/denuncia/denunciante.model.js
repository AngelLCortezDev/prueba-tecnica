import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";

//tabla denunciantes

export const Denunciante = sequelize.define('denunciantes',{
    id_denunciante:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre:{
        type:DataTypes.STRING,
        allowNull: false
    },
    correo:{
        type:DataTypes.STRING,
        allowNull: false
    },
    telefono:{
        type:DataTypes.STRING(10),
        allowNull:false
    }
},{
    timestamps:false
});