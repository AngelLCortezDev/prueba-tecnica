import { Datos_Denuncia } from "./datos_denuncia";
import { Denunciante } from "./denunciante";
import { Detalle_Denuncia } from "./detalle_denuncia";

export interface Denuncia {
    folio: string,
    password: string,
    datos_denuncia: Datos_Denuncia,
    denunciante: Denunciante,
    detalle_denuncia: Detalle_Denuncia
}