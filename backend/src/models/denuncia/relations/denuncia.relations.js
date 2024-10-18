import { Denuncia } from "../denuncia.model.js";
import { Datos_Denuncia } from "../datos_denuncia.model.js";
import { Denunciante } from "../denunciante.model.js";
import { Detalle_Denuncia } from "../detalle_denuncia.model.js";


//Datos_Denuncia(Información sucursal) puede tener muchas denuncias
Datos_Denuncia.hasMany(Denuncia,{
    foreignKey: 'datos_denuncia',
    sourceKey: 'id_datos_denuncia'
});

//Un denunciante puede hacer muchas denuncias
Denunciante.hasMany(Denuncia,{
    foreignKey:'denunciante',
    sourceKey: 'id_denunciante'
});

//Una denuncia solo tiene un detalle de denucia
Detalle_Denuncia.hasOne(Denuncia,{
    foreignKey: 'detalles_denuncia',
    sourceKey: 'id_detalle_denuncia'
});