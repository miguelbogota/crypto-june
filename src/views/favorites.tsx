import { useFavorites } from '@app-state/favorites';
import { FC } from 'react';
import { Text, View } from 'react-native-ui-lib';

const Favorites: FC = () => {
  const favorites = useFavorites();
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
      <Text style={{ marginBottom: 30, fontSize: 20, fontWeight: '800' }}>Favorites:</Text>
      <Text></Text>
      {favorites.map((favorite, i) => (
        <Text key={i}>{favorite}</Text>
      ))}
    </View>
  );
};

export default Favorites;
