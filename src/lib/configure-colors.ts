import { Colors } from 'react-native-ui-lib';

const configureColors = () => {
  Colors.loadSchemes({
    light: {
      background: '#ffffff',
      paper: '#f9f9f9',
      text: '#444444',
      buttonText: '#ffffff',
      primary: '#00897b',
      shadow: '#343434',
      warn: '#b22f2f',
      success: '#388e3c',
      divider: '#aaaaaa',
    },
    dark: {
      background: '#141414',
      paper: '#222222',
      text: '#e0e0e0',
      buttonText: '#ffffff',
      primary: '#00897b',
      shadow: '#000000',
      warn: '#b22f2f',
      success: '#388e3c',
      divider: '#555555',
    },
  });
};

export default configureColors;
