import { Colors } from 'react-native-ui-lib';

const configureColors = () => {
  Colors.loadSchemes({
    light: {
      screenBG: '#ffffff',
      paperBG: '#f9f9f9',
      textColor: '#444444',
      primaryColor: '#00897b',
      shadowColor: '#343434',
    },
    dark: {
      screenBG: '#141414',
      paperBG: '#222222',
      textColor: '#e0e0e0',
      primaryColor: '#00897b',
      shadowColor: '#000000',
    },
  });
};

export default configureColors;
