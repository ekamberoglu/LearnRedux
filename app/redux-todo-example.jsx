var redux = require('redux');

console.log('Starting todo redux example');

var stateDefault = {
  searchText: '',
  showCompleted: false,
  todo: []
}

var reducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      }

    default:
      return state;
  }
}

var store = redux.createStore(reducer);
store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'work'
});

console.log('searchText should be "work"', store.getState());