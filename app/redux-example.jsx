var redux = require('redux');

console.log('Starting redux example');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  // document.getElementById('app').innerHTML = state.name;
  // console.log('New state', store.getState());

  if (state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading...';
  } else if (state.map.url) {
    document.getElementById('app').innerHTML = '<a href="' + state.map.url + '" target="_blank">View Your Location</a>'
  }
});
//unsubscribe();

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Ekrem'));
// store.dispatch({
//   type: 'CHANGE_NAME',
//   name: 'Ekrem'
// });

store.dispatch(actions.addHobby('Running'));
// store.dispatch({
//   type: 'ADD_HOBBY',
//   hobby: 'Running'
// });

store.dispatch(actions.addHobby('Swimming'));
store.dispatch(actions.removeHobby(2));

store.dispatch(actions.changeName('Kayros'));

store.dispatch(actions.addMovie('Mad Max', 'Action'));
store.dispatch(actions.addMovie('Summer', 'Romantic'));
store.dispatch(actions.removeMovie(1));
