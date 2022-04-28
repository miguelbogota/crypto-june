import ThemeSwitcher from '@app-components/theme-switcher';
import { FC } from 'react';
import { Text, View } from 'react-native-ui-lib';

const Settings: FC = () => {
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
      <ThemeSwitcher />
      <Text textColor style={{ marginBottom: 30, fontSize: 20, fontWeight: '800' }}>
        Settings
      </Text>
    </View>
  );
};

export default Settings;
