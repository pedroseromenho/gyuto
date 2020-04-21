import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import rootReducer from './reducers/rootReducer';


const initialState = {};

export default function configureStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(thunk)));
  const persistor = persistStore(store);
  return { store, persistor };
}

