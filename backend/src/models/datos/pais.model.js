import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";
import { Estado } from "./estado.model.js";
import { Datos_Denuncia } from "../denuncia/datos_denuncia.model.js"

//tabla paises

export const Pais = sequelize.define('paises',{
    id_pais: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(55)
    }
}, {
    timestamps: false
});

//Relaciones
//Un país tiene muchos estados
Pais.hasMany(Estado, {
    foreignKey: 'pais',
    sourceKey: 'id_pais'
});
//Un estado pertenese a un solo país
Estado.belongsTo(Pais,{
    foreignKey: 'pais',
    targetKey: 'id_pais',
    as: 'fk_id_pais'
});

//Un país tiene muchas denuncias
Pais.hasMany(Datos_Denuncia,{
    foreignKey: 'pais'

});
//Una denuncia tiene un pais
Datos_Denuncia.belongsTo(Pais, {
    foreignKey: 'pais',
    as: 'fk_id_pais'
});