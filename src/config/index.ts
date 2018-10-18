const config = {
  /* React router history backend */
  historyBackend: 'hashHistory',

  urlPrefix: '/',
  apiRootUrl:
    process.env.API_ROOT_URL || 'https://jsonplaceholder.typicode.com/',
  // apiRootUrl: process.env.API_ROOT_URL || 'http://127.0.0.1:8000/',
};

export default config;
