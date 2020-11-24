// inicialização com o banco de dados
import {Sequelize} from 'sequelize';

 // comando para conectar ao banco de dados
const sequelize = new Sequelize ('mysql://root:'1234@localhost:3306/microsaas'); 
 // necessario root, senha. localhost e porta

 export default sequelize;