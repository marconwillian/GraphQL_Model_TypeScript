import { Model } from 'objection';


class User extends Model {
    static tableName = "teste";
    id!: number;
    name!: string;

    static jsonSchema: {
        type: 'object',
        require: ['name'],

        properties: {
            id: {type: 'integer'},
            name: {type: 'string', min: 1, max:255},
            created_at:{type :'string', min:1, max :255}
        }
    }
};

export default User;