const token = '1020669843:AAHAxC8cz5UtRyZKihF8IfuC0xFkywHrKmM';
const github = {
  version: '3.0.0',
  // optional
  debug: true,
  protocol: 'https',
  host: 'api.github.com',
  pathPrefix: '',
  timeout: 5000,
  headers: {
    'user-agent': 'Telegram Github Search Bot'
  }
};

export default {
  token,
  github
};
