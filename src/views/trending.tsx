import { CoinGeckoTrending } from '@app-models/coin-gecko-response';
import { addFavorite, removeFavorite, useFavorites } from '@app-state/favorites';
import { FC } from 'react';
import { Button, Text, View } from 'react-native-ui-lib';
import { useDispatch } from 'react-redux';
import useSWR from 'swr';

const Trending: FC = () => {
  const { data, error } = useSWR<CoinGeckoTrending>(
    'https://api.coingecko.com/api/v3/search/trending',
  );
  const dispatch = useDispatch();
  const favorites = useFavorites();

  if (error) {
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
        <Text textColor>Error loading trending info</Text>
      </View>
    );
  }
  if (!data) {
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
        <Text textColor>Loading trending info</Text>
      </View>
    );
  }

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
      <Text textColor style={{ marginBottom: 30, fontSize: 20, fontWeight: '800' }}>
        Trending
      </Text>
      {data.coins.map(coin => (
        <View key={coin.item.id} style={{ marginBottom: 10 }}>
          {favorites.find(favorite => favorite === coin.item.name) ? (
            <Button
              onPress={() => dispatch(removeFavorite(coin.item.name))}
              backgroundColor="#ad3333"
            >
              <Text color="#fff">Remove {coin.item.name} from Favorites</Text>
            </Button>
          ) : (
            <Button onPress={() => dispatch(addFavorite(coin.item.name))}>
              <Text color="#fff">Add {coin.item.name} to Favorites</Text>
            </Button>
          )}
        </View>
      ))}
    </View>
  );
};

export default Trending;
