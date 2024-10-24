import { Denuncia } from "../../models/denuncia/denuncia.model.js";
import { compare } from 'bcrypt';
import jwt from 'jsonwebtoken';   const { sign, verify } = jwt;
import { readFileSync } from 'fs';
import path from "path";


export const autenticar_folio = async (denuncia) => {
    try {
        //Obtener credenciales ingresadas por el usuario (folio, password -> encriptada por el cliente)
        const { folio, password } = denuncia;
        //Buscar la denuncia con coincidencia en folio
        const storedDenuncia = await Denuncia.findOne({
            where:{
                folio
            }
        });
        //Regresar nulo si no existe un registro que coincida en folio
        if(!storedDenuncia){
            return null;
        }else{
            //Hacer la comparación de contraseña guardada y la ingresada
            const resultado = await compare(password, storedDenuncia.password);
            if (resultado){
                //Generar token para autorizar a futuras peticiones
                const clavePrivada = readFileSync(path.join(import.meta.dirname,'keys/folio/private.key'), 'utf8');
                const token = sign({
                    folio: storedDenuncia.folio
                },clavePrivada,{ algorithm: 'RS256' });
                return [storedDenuncia,token];
            }else{
                return null;
            }
        }

    } catch (error) {
        return error;
    }
}

