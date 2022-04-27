import { FC, PropsWithChildren } from 'react';
import { AppState, Platform } from 'react-native';
import NetInfo, { NetInfoState } from '@react-native-community/netinfo';
import { SWRConfig } from 'swr';

/** Props of the SWRDefaultConfig component. */
export type SWRDefaultConfigProps = PropsWithChildren<{}>;

/** Wrapper for the default configuration of SWR in React Native. */
const SWRDefaultConfig: FC<SWRDefaultConfigProps> = ({ children }) => {
  return (
    <SWRConfig
      value={{
        fetcher: url => fetch(url).then(r => r.json()),
        provider: () => new Map(),
        isVisible: () => true,
        isOnline: () => true,
        revalidateOnFocus: true,
        revalidateOnReconnect: true,
        focusThrottleInterval: 5000,
        initFocus: callback => {
          let appState = AppState.currentState;

          // Subscribe to the app state change events.
          const subscription = AppState.addEventListener('change', nextAppState => {
            // If it's resuming from background or inactive mode to active one.
            if (
              appState.match(/inactive|background/) &&
              nextAppState === 'active' &&
              Platform.OS !== 'web'
            ) {
              callback();
            }
            appState = nextAppState;
          }) as unknown as { remove: () => void };

          return () => {
            subscription.remove();
          };
        },
        initReconnect: callback => {
          let networkState: NetInfoState | null = null;

          // Subscribe to the network state change events
          const unsubscribe = NetInfo.addEventListener(nextNetworkState => {
            // If it's resuming from offline to online.
            if (
              networkState?.isInternetReachable === false &&
              nextNetworkState.isConnected &&
              nextNetworkState.isInternetReachable
            ) {
              callback();
            }
            networkState = nextNetworkState;
          });

          return () => {
            unsubscribe();
          };
        },
      }}
    >
      {children}
    </SWRConfig>
  );
};

export default SWRDefaultConfig;
