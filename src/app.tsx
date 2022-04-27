import { FC } from 'react';
import { registerRootComponent } from 'expo';
import { Provider } from 'react-redux';
import SWRDefaultConfig from '@app-lib/swr-default-config';
import Navigation from './navigation';
import store from '@app-state/store';

const App: FC = () => {
  return (
    <SWRDefaultConfig>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </SWRDefaultConfig>
  );
};

export default registerRootComponent(App);
