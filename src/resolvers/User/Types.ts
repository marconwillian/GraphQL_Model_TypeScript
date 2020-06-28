import { User as UserModel, Teste } from '../../database/models';

const User = {
    testes: async (parent, args) => {
        const testes: Teste[] = await UserModel.relatedQuery("testes").for(parent.id);

        return testes;
    }
}

export default {
    User
}