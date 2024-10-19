import express from 'express';
import cors from 'cors';
import paisesRoutes from './routes/datos/paises.routes.js';
import empresasRoutes from './routes/datos/empresas.routes.js';
import estadosRoutes from './routes/datos/estados.routes.js';
import denunciasRoutes from './routes/denuncia/denuncias.routes.js';
import datos_denunciasRoutes from './routes/denuncia/datos_denuncias.routes.js';
import denunciantesRoutes from './routes/denuncia/denunciantes.routes.js';
import detalle_denunciasRoutes from './routes/denuncia/detalles_denuncias.routes.js';
import mensajesRoutes from './routes/denuncia/mensajes.routes.js';

const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//rutas
app.use(paisesRoutes);
app.use(empresasRoutes);
app.use(estadosRoutes);
app.use(denunciasRoutes);
app.use(datos_denunciasRoutes);
app.use(denunciantesRoutes);
app.use(detalle_denunciasRoutes);
app.use(mensajesRoutes);

export default app;