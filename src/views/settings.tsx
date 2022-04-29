import { FC } from 'react';
import { Text, View } from 'react-native-ui-lib';
import ThemeSwitcher from '@app-components/theme-switcher';
import Container from '@app-components/container';

const Settings: FC = () => {
  return (
    <Container>
      <View style={{ marginHorizontal: 20 }}>
        <Text text style={{ marginBottom: 20, fontSize: 20, fontWeight: '800' }}>
          Settings
        </Text>

        <ThemeSwitcher />
      </View>
    </Container>
  );
};

export default Settings;
