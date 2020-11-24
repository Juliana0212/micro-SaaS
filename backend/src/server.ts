import { DatabaseError } from 'sequelize/types';
import app from './app'; // Importando app.ts
import database from './database';

// Inicializar banco de dados
database.sync();
console.log('Database running at 3306')

app.listen(4000); // comando responsavel por 'subir' a aplicação
console.log ('Server running at 4000'); // comando para mandar mensagem para o terminal 

