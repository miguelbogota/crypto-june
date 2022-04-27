import { FC } from 'react';
import { registerRootComponent } from 'expo';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import SWRDefaultConfig from '@app-lib/swr-default-config';
import Navigation from './navigation';
import store from '@app-state/store';

const App: FC = () => {
  return (
    <SWRDefaultConfig>
      <Provider store={store}>
        <PersistGate persistor={persistStore(store)}>
          <Navigation />
        </PersistGate>
      </Provider>
    </SWRDefaultConfig>
  );
};

export default registerRootComponent(App);
