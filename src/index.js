import { createStore } from 'redux'
import counterReducer from './reducers/counterReducer'

const store = createStore(counterReducer)
<<<<<<< HEAD
=======


console.log(store.getState())
store.dispatch({type: 'INCREMENT_COUNT'})
store.dispatch({type: 'INCREMENT_COUNT'})
console.log(store.getState())
store.dispatch({type: 'DECREMENT_COUNT'})
console.log(store.getState())
store.dispatch({type: 'INCREMENT_COUNT'})
store.dispatch({type: 'INCREMENT_COUNT'})
console.log(store.getState())
store.dispatch({type: 'RESET_COUNT'})
console.log(store.getState())
>>>>>>> 4d4dd4601ad2b1efbd7aff8bfe6675326333ae8d
