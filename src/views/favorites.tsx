import { FC } from 'react';
import { Text } from 'react-native-ui-lib';
import { FlatList } from 'react-native';
import useSWR from 'swr';
import CoinListItem from '@app-components/coin-list-item';
import Container from '@app-components/container';
import { CoinGeckoMarkets } from '@app-models/coin-gecko-response';
import { useFavorites } from '@app-state/favorites';

const Favorites: FC = () => {
  const favorites = useFavorites();

  const { data, error } = useSWR<CoinGeckoMarkets[]>(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd${
      favorites.length > 0 && `&ids=${favorites.join('%2C')}`
    }&order=market_cap_desc&per_page=10&page=1&sparkline=true`,
  );

  if (error) {
    return (
      <Container>
        <Text text>Error, try again later.</Text>
      </Container>
    );
  }

  return (
    <Container>
      <Text text style={{ marginBottom: 20, marginLeft: 20, fontSize: 20, fontWeight: '800' }}>
        Favorites
      </Text>

      {!data ? (
        <Text text style={{ marginLeft: 20 }}>
          Loading...
        </Text>
      ) : (
        <FlatList
          style={{ width: '100%', paddingHorizontal: -40 }}
          data={favorites.length > 0 ? data : []}
          renderItem={({ item }) => <CoinListItem {...item} />}
          keyExtractor={coin => coin.id}
          ListEmptyComponent={
            <Text text style={{ padding: 20 }}>
              You don't have any favorites yet. Add some by clicking on the coin you want to add.
            </Text>
          }
        />
      )}
    </Container>
  );
};

export default Favorites;
