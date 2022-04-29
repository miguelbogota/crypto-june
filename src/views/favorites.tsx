import Container from '@app-components/container';
import { removeFavorite, useFavorites } from '@app-state/favorites';
import { FC } from 'react';
import { Button, Text, View } from 'react-native-ui-lib';
import { useDispatch } from 'react-redux';

const Favorites: FC = () => {
  const favorites = useFavorites();
  const dispatch = useDispatch();

  return (
    <Container>
      <View style={{ marginHorizontal: 20 }}>
        <Text text style={{ marginBottom: 20, fontSize: 20, fontWeight: '800' }}>
          Favorites
        </Text>
        {favorites.map((favorite, i) => (
          <Button
            key={i}
            br20
            bg-warn
            onPress={() => dispatch(removeFavorite(favorite))}
            style={{ marginBottom: 10 }}
          >
            <Text buttonText>Remove {favorite} from Favorites</Text>
          </Button>
        ))}
      </View>
    </Container>
  );
};

export default Favorites;
