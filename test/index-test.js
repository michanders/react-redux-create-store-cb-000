import createStore  from '../src/createStore';
import candyReducer from '../src/reducers/candyReducer';
import countReducer from '../src/reducers/countReducer';
import sinon        from 'sinon';

describe('createStore', function() {
  let candyStore, countStore;

  beforeEach(function(){
    candyStore = createStore(candyReducer);
    countStore = createStore(countReducer);
  })

  it('returns an object', function() {
    expect(candyStore).toBeA(Object)
  })
}
