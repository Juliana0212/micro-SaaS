import express from 'express'; // Importando biblioteca
import linksRouter from './routes/links'; // Importando links.ts

const app = express (); // declarando uma variavel const 
app.use(express.json); // comando para a aplicação interpretar corretamente o json
app.use(linksRouter); // "chamando" links.ts

export default app; // comando para poder exportar app.ts
