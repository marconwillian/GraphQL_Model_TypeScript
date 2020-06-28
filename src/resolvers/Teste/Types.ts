import { Teste as TesteModel, User } from '../../database/models';

const Teste = {
    owner: async (parent, args) => {
        const owner: User = await TesteModel.relatedQuery('owner').for(parent.id).first();

        return owner;
    }
};

export default {
    Teste
}