import { Model } from 'objection';

import User from './User';

class Teste extends Model {
    static tableName = "teste";
    id!: number;
    name?: string;
    created_at?: string;
    owner_id!: number;
    owner?: User;

    static jsonSchema: {
        type: 'object',
        require: ['name'],

        properties: {
            id: {type: 'integer'},
            name: {type: 'string', min: 1, max:255},
            created_at:{type :'string', min:1, max :255}
        }
    }

    static relationMappings = () => ({
        owner: {
            relation: Model.BelongsToOneRelation,
            modelClass: User,
            join: {
                from: 'teste.owner_id',
                to: 'user.id'
            }
        }
    });
    
};

export default Teste;