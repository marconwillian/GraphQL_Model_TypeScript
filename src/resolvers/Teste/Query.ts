import {Teste} from '../../database/models';
import { GraphQLError } from 'graphql';


interface PageInfo{
    endCursor: String
    hasNextPage: Boolean
}

const pageInfo: PageInfo = {
  endCursor: "CURSOR NÃO ARRUMADO",
  hasNextPage: true
}


const testes = async () => {
  try {
    const current = "CURSOR NÃO ARRUMADO";

    return {
      pageInfo,
      edges: await (await Teste.query()).map(item => ({ node: item, cursor: current })),
    };
  } catch (e) {
    throw new GraphQLError(
      `Validation: Requesting the field ${e.message} is not allowed`,
    )
  }
};

const teste = async (_, args) => {
  try {
    const teste: Teste = await Teste.query().findById(args.id)
    return teste;
  } catch (e) {
    throw new GraphQLError(
      `Validation: Requesting the field ${e.message} is not allowed`,
    )
  }
};

export default {
  testes,
  teste
};