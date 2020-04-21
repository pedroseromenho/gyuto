import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import appReducer from './appReducer';

const persistUserConfig = {
  key: 'user',
  storage,
  whitelist: ['playIntro'],
};

export default combineReducers({
  app: persistReducer(persistUserConfig, appReducer),
});
