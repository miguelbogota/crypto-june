import { FC, PropsWithChildren } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View } from 'react-native-ui-lib';

export type ContainerProps = PropsWithChildren<{}>;

/** Container to use in the app with in the safe area. */
const Container: FC<ContainerProps> = ({ children }) => {
  const safeArea = useSafeAreaInsets();

  return (
    <View
      bg-background
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '100%',
        height: '100%',
        paddingTop: safeArea.top + 20,
        paddingBottom: safeArea.bottom + 100,
        paddingLeft: safeArea.left,
        paddingRight: safeArea.right,
      }}
    >
      {children}
    </View>
  );
};

export default Container;
