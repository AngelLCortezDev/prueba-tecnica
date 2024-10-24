import { Administrador } from "../../models/usuarios/admin.model.js";
import { compare } from 'bcrypt';
import jwt from 'jsonwebtoken';   const { sign, verify } = jwt;
import { readFileSync } from 'fs';
import path from "path";
import { Denuncia } from "../../models/denuncia/denuncia.model.js";

export const autenticar_admin = async (credenciales) => {
    try {
        const { usuario, password } = credenciales;
        //Buscar el administrador con coincidencia en usuario
        const storedAdmin = await Administrador.findOne({
            where:{
                usuario
            }
        });
        //Regresar nulo si no existe un registro que coincida en usuario
        console.log(storedAdmin);
        if(!storedAdmin){
            return null;
        }else{
            //Hacer la comparación de contraseña guardada y la ingresada
            const resultado = await compare(password, storedAdmin.password);
            if (resultado){
                //Generar token para autorizar a futuras peticiones
                const clavePrivada = readFileSync(path.join(import.meta.dirname,'keys/admin/private.key'), 'utf8');
                const token = sign({
                    usuario: storedAdmin.usuario
                },clavePrivada,{ algorithm: 'RS256' });
                const denuncias = await Denuncia.findAll();
                return [denuncias,token];
            }else{
                return null;
            }
        }
    } catch (error) {
        console.log('error');
    }
}