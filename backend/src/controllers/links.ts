import {Request, Response} from 'express';
import {Link} from '../models/link';
import linksRepository from '../models/linksRepository';

//obs: usa 'let' quando a variavel vai ser alterada e 'const' quando é fixa

function generateCode () { // função para gerar url encurtadas
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVXWYZabcdefghijklmnopqrstuvxwyz123456789';
    for (let i=0; i < 5; i++) // comando para criar array de carcteres possiveis
        text += possible.charAt(Math.floor(Math.random() * possible.length)); // charAt(Math.floor(Math.random() * possible.length)) = pegar uma letra aleatoria entre o intervalo declarado em possible
    
    return text;
}


async function postLink (req: Request, res: Response) {
    const link = req.body as Link; // usa 'as' para fazer a conversão body <-> link
    link.code = generateCode();
    link.hits = 0;
    const result = await linksRepository.add(link); //adicionar no banco de dados
    if (!result.id) return res.sendStatus(404);
    link.id = result.id;
    
    res.status(201).json(link); // .json 'passa' a URL já encurtado para o usuario
}


async function getLink (req: Request, res: Response) {
    const code = req.params.code as string; // declarando variavel code como os params convestidos para string
    const link = await linksRepository.findByCode(code); //buscando o code
    if (!link)
        res.sendStatus(404);
    else   
        res.json(link); // comando para 'devolver' o link encontrado para o usuario
}

async function hitLink (req: Request, res: Response) {
    const code = req.params.code as string;
    const link = await linksRepository.hits(code);
    if (!link) 
        res.sendStatus(404);
    else   
        res.json(link); // Retorna para o front
}

export default {
    postLink,
    getLink,
    hitLink
}