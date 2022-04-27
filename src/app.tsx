import { FC } from 'react';
import { registerRootComponent } from 'expo';
import { StyleSheet, Text, View } from 'react-native';
import SWRDefaultConfig from './lib/swr-default-config';
import { Provider } from 'react-redux';
import store from '@app-state/store';

const App: FC = () => {
  return (
    <SWRDefaultConfig>
      <Provider store={store}>
        <View style={styles.container}>
          <Text>Open up "src/app.tsx" to start working on your app!</Text>
        </View>
      </Provider>
    </SWRDefaultConfig>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default registerRootComponent(App);
