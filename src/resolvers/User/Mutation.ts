import { User } from '../../database/models';
import { GraphQLError } from 'graphql';

const createUser = async (_, args) => {

    let user: User;
    try {
        const data = args.input;
        console.log({...data});

        user  = await User.query().insert({...args.input});
       
    } catch (error) {
        console.log(error)
        throw new GraphQLError("Bad user input fields required");
        
    }
    return user;
}

export default {
    createUser
}