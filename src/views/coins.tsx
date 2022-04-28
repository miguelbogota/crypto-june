import { FC } from 'react';
import { Text, View } from 'react-native-ui-lib';

const Coins: FC = () => {
  return (
    <View
      bg-screenBG
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <Text textColor style={{ marginBottom: 30, fontSize: 20, fontWeight: '800' }}>
        Coins
      </Text>
    </View>
  );
};

export default Coins;