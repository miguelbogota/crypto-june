import { FC } from 'react';
import { Text } from 'react-native-ui-lib';
import useSWR from 'swr';
import { CoinGeckoMarkets, CoinGeckoTrending } from '@app-models/coin-gecko-response';
import Container from '@app-components/container';
import { FlatList } from 'react-native';
import CoinListItem from '@app-components/coin-list-item';

const Trending: FC = () => {
  const { data: trendingData, error: trendingError } = useSWR<CoinGeckoTrending>(
    'https://api.coingecko.com/api/v3/search/trending',
  );
  const { data, error } = useSWR<CoinGeckoMarkets[]>(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd${
      !!trendingData && `&ids=${trendingData.coins.map(coin => coin.item.id).join('%2C')}`
    }&order=market_cap_desc&per_page=10&page=1&sparkline=true`,
  );

  if (trendingError || error) {
    return (
      <Container>
        <Text text>Error, try again later.</Text>
      </Container>
    );
  }

  return (
    <Container>
      <Text text style={{ marginBottom: 20, marginLeft: 20, fontSize: 20, fontWeight: '800' }}>
        Trending
      </Text>

      {!trendingData || !data ? (
        <Text text style={{ marginLeft: 20 }}>
          Loading...
        </Text>
      ) : (
        <FlatList
          style={{ width: '100%', paddingHorizontal: -40 }}
          data={data}
          renderItem={({ item }) => <CoinListItem {...item} />}
          keyExtractor={coin => coin.id}
        />
      )}
    </Container>
  );
};

export default Trending;
