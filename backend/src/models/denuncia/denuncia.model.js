import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";
//tabla denuncias

export const Denuncia = sequelize.define('denuncias',{
    folio:{
        type: DataTypes.STRING(5),
        primaryKey:true
    },
    password:{
        type:DataTypes.STRING(60),
        allowNull:false
    }
    //datos_denuncia: {
    //    type: DataTypes.INTEGER
    //},
    //denunciante: {
    //    type: DataTypes.INTEGER
    //},
    //detalles_denuncia: {
    //    type: DataTypes.INTEGER
    //}


},{
    timestamps:false
});