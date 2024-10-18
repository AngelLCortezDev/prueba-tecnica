import express from 'express';
import paisesRoutes from './routes/datos/paises.routes.js';

const app = express();

app.use(paisesRoutes);

export default app;