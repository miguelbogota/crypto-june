import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Text, View } from 'react-native-ui-lib';
import useSWR from 'swr';
import { CoinGeckoTrending } from '@app-models/coin-gecko-response';
import { addFavorite, removeFavorite, useFavorites } from '@app-state/favorites';
import Container from '@app-components/container';

const Trending: FC = () => {
  const { data, error } = useSWR<CoinGeckoTrending>(
    'https://api.coingecko.com/api/v3/search/trending',
  );
  const dispatch = useDispatch();
  const favorites = useFavorites();

  if (error) {
    return (
      <Container>
        <Text text>Error loading trending info</Text>
      </Container>
    );
  }
  if (!data) {
    return (
      <Container>
        <Text text>Loading...</Text>
      </Container>
    );
  }

  return (
    <Container>
      <View style={{ marginHorizontal: 20 }}>
        <Text text style={{ marginBottom: 20, fontSize: 20, fontWeight: '800' }}>
          Trending
        </Text>
        {data.coins.map(coin => (
          <View key={coin.item.id} style={{ marginBottom: 10 }}>
            {favorites.find(favorite => favorite === coin.item.name) ? (
              <Button br20 bg-warn onPress={() => dispatch(removeFavorite(coin.item.name))}>
                <Text buttonText>Remove {coin.item.name} from Favorites</Text>
              </Button>
            ) : (
              <Button br20 bg-primary onPress={() => dispatch(addFavorite(coin.item.name))}>
                <Text buttonText>Add {coin.item.name} to Favorites</Text>
              </Button>
            )}
          </View>
        ))}
      </View>
    </Container>
  );
};

export default Trending;
