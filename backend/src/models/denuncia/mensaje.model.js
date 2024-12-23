import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";
import { Detalle_Denuncia } from "./detalle_denuncia.model.js";

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

//Relaciones
//Una denuncia tiene muchos mensajes
Detalle_Denuncia.hasMany(Mensaje,{
    foreignKey: 'denuncia'
})
//Un mensaje pertenece a una denuncia
Mensaje.belongsTo(Detalle_Denuncia,{
    foreignKey: 'denuncia',
    as: 'fk_denuncia'
});