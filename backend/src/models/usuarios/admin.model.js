import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js"

// tabla administradores
export const Administrador = sequelize.define('administradores',{
    usuario:{
        type:DataTypes.STRING(50),
        primaryKey: true
    },
    password:{
        type:DataTypes.STRING(60),
        allowNull:false
    }   
},{
    timestamps:false
});