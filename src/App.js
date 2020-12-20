import './App.css';
import AppRouter from './routers/AppRouter';
import React from 'react';
import { Provider } from 'react-redux';
import { generateStore } from './redux/rootStore';
import rootSaga from './redux/rootSagas';

function App() {
  const store = generateStore();
  store.runSaga(rootSaga);

  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
