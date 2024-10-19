import { Empresa } from '../../models/datos/empresa.model.js';

export const getEmpresas = async (req, res) => {
    try {
        const empresas = await Empresa.findAll();
        res.set('Access-Control-Allow-Origin', 'http://localhost:4200');
        res.json(empresas);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getEmpresa = async (req, res) => {
    try {

        const { id } = req.params;
        const empresa = await Empresa.findOne({
            where:{
                id_empresa: id
            }
        });

        if(!empresa){
            return res.status(404).json({ message: "La empresa no existe." })
        }

        res.json(empresa);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};