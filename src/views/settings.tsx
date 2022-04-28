import { FC } from 'react';
import { Text } from 'react-native-ui-lib';
import ThemeSwitcher from '@app-components/theme-switcher';
import Container from '@app-components/container';

const Settings: FC = () => {
  return (
    <Container>
      <Text text style={{ marginBottom: 30, fontSize: 20, fontWeight: '800' }}>
        Settings
      </Text>
      <ThemeSwitcher />
    </Container>
  );
};

export default Settings;
