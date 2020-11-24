import Sequelize, { Optional, Model } from 'sequelize'; // biblioteca para banco de dados
import {Link} from './link';
import database from '../database';


interface ILinkCreationAttributes extends Optional <Link, "id"> {} // comando diz que quando for criar um link o Id é opcional

export interface ILinkModel extends Model <Link, ILinkCreationAttributes>, Link {}


// Programando em JS para banco de dados
const LinkModel = database.define <ILinkModel>('Link', { //definindo tabela no banco de dados
    id : { // TABELA
        type: Sequelize.INTEGER.UNSIGNED, // numeros inteiros
        primaryKey: true, // vai ser a chave primaria
        autoIncrement: true, // ele se auto incrementa
        allowNull : false // não aceita nulo
    },

    url : { // TABELA
        type: Sequelize.STRING(255), // caracteres
        allowNull: false // não aceita nulo
    },

    code : { // TABELA
        type: Sequelize.STRING(20), // caracteres
        unique :  true, // comando responsavel por tornar o code único
        allowNull : false // não aceita nulo
    },

    hits : { // TABELA
        type: Sequelize.INTEGER.UNSIGNED, // numeros inteiros
        allowNull: false, // não aceita nulo
        defaultValue: 0
    }
})

export default LinkModel // comando para poder utilizar LinkModel fora desse arquivo