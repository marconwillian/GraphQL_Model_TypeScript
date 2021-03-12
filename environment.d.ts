declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'dev' | 'test' | 'production';
            PAGPRO_DB_HOST: string;
            PAGPRO_DB_USER: string;
            PAGPRO_DB_DATABASE: string;
            PAGPRO_DB_PASS: string;
            PORT: number;
        }
    }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
