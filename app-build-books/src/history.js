var createHistory = require('history').createBrowserHistory;
var createMemoryHistory = require('history').createMemoryHistory;

const history =
  process.env.NODE_ENV === 'test' ? createMemoryHistory() : createHistory();

export default history;
