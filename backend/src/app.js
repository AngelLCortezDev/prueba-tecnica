import express from 'express';
import paisesRoutes from './routes/datos/paises.routes.js';
import empresasRoutes from './routes/datos/empresas.routes.js';
import estadosRoutes from './routes/datos/estados.routes.js';

const app = express();

//middlewares
app.use(express.json());

//rutas
app.use(paisesRoutes);
app.use(empresasRoutes);
app.use(estadosRoutes);

export default app;