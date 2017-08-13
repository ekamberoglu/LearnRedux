var redux = require('redux');

console.log('Starting redux example');


var reducer = (state = { name: 'Anonymous' }, action) => {
    // state = state || { name: 'Anonymous' };

    switch (action.type) {
      case 'CHANGE_NAME':
        return {
          ...state,
          name: action.name
        };

      default:
        return state;
    }
};

// var store = redux.createStore(reducer, redux.compose(
// 	window.devToolsExtension ? window.devToolsExtension() : (f) => {
//     return f;
//   }
// ));
var store = redux.createStore(reducer, redux.compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
));

var action = {
  type: 'CHANGE_NAME',
  name: 'Ekrem'
}

var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  console.log('Name is', state.name);
  document.getElementById('app').innerHTML = state.name;
});

//unsubscribe();

store.dispatch(action);


store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Kayros'
});

//console.log('Name should be Ekrem', store.getState());
