//Resposanvel pela manipulação de links do banco de dados

import LinkModel, {ILinkModel} from './linkModel';
import  {Link} from './link';

function findByCode (code: string){ // encontrar um link no banco de dados
    return LinkModel.findOne<ILinkModel> ({ where: {code}}); //traduzindo o comando "encontre um link onde o código seja igual ao de cima"
} 

function add (link: Link) { // adicionar um novo link
    return LinkModel.create<ILinkModel> (link);
}
 
async function hits (code: string){ // atualizar os hits de um link já existente, quando usa 'await' é obrigada a colocar 'async'
    const link = await findByCode(code); // 'await' siginifica retorno
    if (!link) return null;

    link.hits!++;
    await link.save();
    return link;
}

export default{
    findByCode,
    add,
    hits
}