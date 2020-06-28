import { Model } from 'objection';

import Teste from './Teste';

class User extends Model {
    static tableName = "user";
    id!: number;
    name?: string;
    created_at?: string;
    testes?: Teste[];

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
        testes: {
            relation: Model.HasManyRelation,
            modelClass: Teste,
            join: {
                from: 'user.id',
                to: 'teste.owner_id'
            }
        }
    });
    
};

export default User;