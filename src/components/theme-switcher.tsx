import { FC, PropsWithChildren, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import { Colors, RadioButton, RadioGroup, Text } from 'react-native-ui-lib';
import { useDispatch } from 'react-redux';
import { setSystemTheme, setTheme, ThemeWithSystem, useTheme } from '@app-state/theme';

export type ThemeSwitcherProps = PropsWithChildren<{}>;

const ThemeSwitcher: FC<ThemeSwitcherProps> = () => {
  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <>
      <Text text style={{ fontSize: 15, fontWeight: '500', marginBottom: 10 }}>
        Theme
      </Text>
      <RadioGroup
        initialValue={theme.value}
        onValueChange={(theme: ThemeWithSystem) => dispatch(setTheme(theme))}
      >
        <RadioButton
          value={'system'}
          label={'System'}
          color={Colors.primary}
          style={{ marginBottom: 5 }}
        />
        <RadioButton
          value={'light'}
          label={'Light'}
          color={Colors.primary}
          style={{ marginBottom: 5 }}
        />
        <RadioButton
          value={'dark'}
          label={'Dark'}
          color={Colors.primary}
          style={{ marginBottom: 5 }}
        />
      </RadioGroup>
    </>
  );
};

export const useThemeSwitcher = () => {
  const [isLoading, setIsLoading] = useState({ system: true, value: true });
  const dispatch = useDispatch();
  const systemTheme = useColorScheme();
  const theme = useTheme();

  useEffect(() => {
    dispatch(setTheme(theme.value));
    setIsLoading(prevState => ({ ...prevState, value: false }));
  }, []);

  useEffect(() => {
    dispatch(setSystemTheme(systemTheme ?? 'light'));
    setIsLoading(prevState => ({ ...prevState, system: false }));
  }, [systemTheme]);

  return isLoading;
};

export default ThemeSwitcher;
