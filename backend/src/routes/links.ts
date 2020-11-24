//rotas
import {Router} from 'express'; // Importando apenas o componente Router
import LinksController from '../controllers/links' ;


const router = Router (); // Declarando a variavel

//Rota POST (enviando dados) 
router.post('/links', LinksController.postLink) ; // Chamando a rota POST, 1° parametro rota e 2° função

//Rota GET 
router.get('/links/:code', LinksController.hitLink) ; 

//Rota GET (acessando estatisticas do link)
router.get('/links/:code/stats', LinksController.getLink) ;

export default router; // comando para poder exportar links.ts