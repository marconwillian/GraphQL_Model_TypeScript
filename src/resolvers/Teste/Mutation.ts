import {Teste} from '../../database/models';
import { GraphQLError } from 'graphql';

const createTeste = async (_, args) => {

    let teste: Teste;
    try {        

        teste  = await Teste.query().insert({...args.input});
       
    } catch (error) {
        console.log(error)
        throw new GraphQLError("Bad user input fields required");
        
    }
    return teste;
}

export default {
    createTeste
}