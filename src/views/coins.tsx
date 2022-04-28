import { FC } from 'react';
import { Text } from 'react-native-ui-lib';
import Container from '@app-components/container';

const Coins: FC = () => {
  return (
    <Container>
      <Text text style={{ marginBottom: 30, fontSize: 20, fontWeight: '800' }}>
        Coins
      </Text>
    </Container>
  );
};

export default Coins;
