import fs from 'fs';
import path from 'path';

const dirName: string = path.join(__dirname);

const QueryTypes = fs.readFileSync(`${dirName}/Query/types.graphql`, 'utf8');
const MutationTypes = fs.readFileSync(`${dirName}/Mutation/types.graphql`, 'utf8');
const PageinfoTypes = fs.readFileSync(`${dirName}/Pageinfo/types.graphql`, 'utf8');
const TesteTypes = fs.readFileSync(`${dirName}/Teste/types.graphql`, 'utf8');

export default () => `
    ${QueryTypes}
    ${MutationTypes}
    ${PageinfoTypes}
    ${TesteTypes}
`;