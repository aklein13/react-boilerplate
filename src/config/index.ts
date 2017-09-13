export interface IConfig {
  historyBackend?: string;
  urlPrefix?: string;
  apiRootUrl?: string;
}

/* Default config for develope enviroment */
let config: IConfig = {
  /* React router history backend */
  historyBackend: 'hashHistory',

  /* The app placed path prefix, for development server, it used '/' by default,
   * For github demo page, it will changed to 'react-redux-boilerplate'.
   */
  urlPrefix: '/',
  // apiRootUrl: process.env.API_ROOT_URL || 'https://lunch-time.com/',
  apiRootUrl: process.env.API_ROOT_URL || 'http://127.0.0.1:8000/',
};

/* Construct configs from environment */
if (process && typeof process.env.NODE_ENV !== 'undefined') {
  config = {...config, ...require(`./${process.env.NODE_ENV}`).default};
}

/* Freezed the config object, make it not able to be modified */
Object.freeze(config);

/* Export config */
export default config;