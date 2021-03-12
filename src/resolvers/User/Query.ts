import { User } from '../../database/models';
import { GraphQLError } from 'graphql';


export interface PageInfo {
    endCursor: String
    hasNextPage: Boolean
}

const pageInfo: PageInfo = {
  endCursor: "CURSOR NÃO ARRUMADO",
  hasNextPage: true
}


const users = async () => {
  try {
    const current = "CURSOR NÃO ARRUMADO";

    return {
      pageInfo,
      edges: await (await User.query()).map(item => ({ node: item, cursor: current })),
    };
  } catch (e) {
    throw new GraphQLError(
      `Validation: Requesting the field ${e.message} is not allowed`,
    )
  }
};

const user = async (_, args) => {
  try {
    const user: User = await User.query().findById(args.id)
    return user;
  } catch (e) {
    throw new GraphQLError(
      `Validation: Requesting the field ${e.message} is not allowed`,
    )
  }
};

export default {
  users,
  user
};
