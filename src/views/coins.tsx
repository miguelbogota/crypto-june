import { FC, useEffect, useState } from 'react';
import { Text, Incubator, Colors, View } from 'react-native-ui-lib';
import Container from '@app-components/container';
import useSWR from 'swr';
import { CoinGeckoMarkets } from '@app-models/coin-gecko-response';
import { FlatList } from 'react-native';
import CoinListItem from '@app-components/coin-list-item';
import { useNavigation } from '@react-navigation/native';

const { TextField } = Incubator;

const Coins: FC = () => {
  const { data, error } = useSWR<CoinGeckoMarkets[]>(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true',
  );

  const [search, setSearch] = useState('');
  const navigation = useNavigation();

  useEffect(() => navigation.addListener('blur', () => setSearch('')), [navigation]);

  if (error) {
    return (
      <Container>
        <Text text>Error loading the coins</Text>
      </Container>
    );
  }

  return (
    <Container>
      <Text text style={{ marginBottom: 20, marginLeft: 20, fontSize: 20, fontWeight: '800' }}>
        Coins
      </Text>
      {!data ? (
        <Text text style={{ marginLeft: 20 }}>
          Loading...
        </Text>
      ) : (
        <>
          <View style={{ width: '100%', paddingHorizontal: 10, marginBottom: 10 }}>
            <TextField
              text
              placeholder="Search"
              value={search}
              onChangeText={setSearch}
              fieldStyle={{
                padding: 10,
                borderWidth: 0.5,
                borderColor: Colors.divider,
                borderRadius: 6,
              }}
            />
          </View>
          <FlatList
            style={{ width: '100%', paddingHorizontal: -40 }}
            data={data.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))}
            renderItem={({ item }) => <CoinListItem {...item} />}
            keyExtractor={coin => coin.id}
          />
        </>
      )}
    </Container>
  );
};

export default Coins;
