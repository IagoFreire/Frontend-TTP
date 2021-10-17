import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { GlobalStyle } from "./styles/global";

import Routes from './routes';
import { store, persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
        <GlobalStyle />
      </PersistGate>
    </Provider>
  );
}

export default App;
