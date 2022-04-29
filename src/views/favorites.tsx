import { FC } from 'react';
import CoinListItem from '@app-components/coin-list-item';
import Container from '@app-components/container';
import { CoinGeckoMarkets } from '@app-models/coin-gecko-response';
import { removeFavorite, useFavorites } from '@app-state/favorites';
import { FlatList } from 'react-native';
import { Button, Text } from 'react-native-ui-lib';
import useSWR from 'swr';
import { useDispatch } from 'react-redux';

const FavoriteCoins: FC<CoinGeckoMarkets> = props => {
  const dispatch = useDispatch();
  return (
    <>
      <CoinListItem {...props} />
      <Button br20 bg-warn onPress={() => dispatch(removeFavorite(props.id))}>
        <Text buttonText>Remove</Text>
      </Button>
    </>
  );
};

const Favorites: FC = () => {
  const favorites = useFavorites();

  const { data, error } = useSWR<CoinGeckoMarkets[]>(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd${
      favorites.length > 0 && `&ids=${favorites.join('%2C')}`
    }&order=market_cap_desc&per_page=10&page=1&sparkline=false`,
  );

  if (error) {
    return (
      <Container>
        <Text text>Error, try again later.</Text>
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
      <Text text style={{ marginBottom: 20, marginLeft: 20, fontSize: 20, fontWeight: '800' }}>
        Favorites
      </Text>

      <FlatList
        style={{ width: '100%', paddingHorizontal: -40 }}
        data={favorites.length > 0 ? data : []}
        renderItem={({ item }) => <FavoriteCoins {...item} />}
        keyExtractor={coin => coin.id}
        ListEmptyComponent={
          <Text text style={{ padding: 20 }}>
            You don't have any favorites yet. Add some by clicking on the coin you want to add.
          </Text>
        }
      />
    </Container>
  );
};

export default Favorites;
