const default_config = {
    client: 'sqlite3',
    connection: {
      filename: `${__dirname}/dev.sqlite3`
    },
    migrations: {
      directory: 'migrations'
    },
    timezone: 'UTC',
    useNullAsDefault: true
  };

  interface KnexConfig {
    [key: string]: object;
  }

  const config : KnexConfig = {
    dev:{
      ...default_config
    },
    testing:{
      ...default_config
    },
    production:{
      ...default_config
    }
  };

  export default config;