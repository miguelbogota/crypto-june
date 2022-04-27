import { FC } from 'react';
import { Text, View } from 'react-native-ui-lib';

const Summary: FC = () => {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <Text style={{ marginBottom: 30, fontSize: 20, fontWeight: '800' }}>Summary</Text>
    </View>
  );
};

export default Summary;
