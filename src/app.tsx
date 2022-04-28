import configureColors from '@app-lib/configure-colors';
configureColors();

import { FC } from 'react';
import { registerRootComponent } from 'expo';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import SWRDefaultConfig from '@app-lib/swr-default-config';
import { useThemeSwitcher } from '@app-components/theme-switcher';
import Navigation from './navigation';
import store from '@app-state/store';

/** Main app with availability of the providers. */
const App: FC = () => {
  const themeIsLoading = useThemeSwitcher();

  return (
    <>
      {/*  Wait for theme to load to render the app. */}
      {themeIsLoading.value || themeIsLoading.system ? null : <Navigation />}
    </>
  );
};

/** Component with all of the providers to use. */
const Providers: FC = () => {
  return (
    <SWRDefaultConfig>
      <Provider store={store}>
        <PersistGate persistor={persistStore(store)}>
          <App />
        </PersistGate>
      </Provider>
    </SWRDefaultConfig>
  );
};

export default registerRootComponent(Providers);
