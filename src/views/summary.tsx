import { FC } from 'react';
import { Pressable, ScrollView } from 'react-native';
import { Button, Colors, Dialog, Text, View } from 'react-native-ui-lib';
import { useDispatch } from 'react-redux';
import Icon from '@expo/vector-icons/MaterialIcons';
import useSWR from 'swr';
import { CoinGeckoSingle } from '@app-models/coin-gecko-response';
import { closeSummary, useSummary } from '@app-state/summary';
import { addFavorite, removeFavorite, useFavorites } from '@app-state/favorites';
import { marked } from 'marked';
import RenderHTML from 'react-native-render-html';
import { LineChart } from 'react-native-chart-kit';

const noSummary = '__no_summary__';

const Summary: FC = () => {
  const summary = useSummary();
  const dispatch = useDispatch();
  const favorites = useFavorites();

  const isFavorite = favorites.includes(summary?.id ?? noSummary);

  const { data } = useSWR<CoinGeckoSingle>(
    !!summary ? `https://api.coingecko.com/api/v3/coins/${summary.id}` : null,
  );

  return (
    <Dialog
      visible={!!summary}
      onDismiss={() => dispatch(closeSummary())}
      panDirection="down"
      bottom
      width="100%"
      containerStyle={{
        backgroundColor: Colors.background,
        paddingBottom: 30,
        borderRadius: 20,
        height: 700,
      }}
    >
      <View bg-background style={{ padding: 20, height: 700 }}>
        <ScrollView style={{ flexGrow: 0, height: 700 }}>
          <Pressable>
            <View row centerV spread style={{ marginBottom: 10 }}>
              <Text text style={{ fontSize: 20, fontWeight: '800' }}>
                {summary?.name}
              </Text>
              <Button
                round
                style={{ width: 40, height: 40, backgroundColor: '#86868614' }}
                onPress={() => {
                  if (!isFavorite) {
                    dispatch(addFavorite(summary?.id ?? noSummary));
                  } else {
                    dispatch(removeFavorite(summary?.id ?? noSummary));
                  }
                }}
              >
                <Icon
                  name="favorite"
                  color={isFavorite ? Colors.warn : Colors.text}
                  style={{ fontSize: 21, marginTop: 1 }}
                />
              </Button>
            </View>

            <LineChart
              data={{ labels: [], datasets: [{ data: summary?.sparkline_in_7d?.price ?? [] }] }}
              width={400} // from react-native
              height={220}
              withVerticalLabels={false}
              withHorizontalLabels={false}
              withVerticalLines={false}
              withHorizontalLines={false}
              transparent
              withDots={false}
              chartConfig={{
                decimalPlaces: 2, // optional, defaults to 2dp
                color: () => Colors.primary,
                labelColor: () => Colors.text,
                style: { marginHorizontal: -60 },
              }}
              style={{ marginHorizontal: -60, marginBottom: -30 }}
            />

            {!data ? (
              <Text text>Getting description, please wait...</Text>
            ) : (
              <RenderHTML
                baseStyle={{ color: Colors.text }}
                contentWidth={400}
                source={{ html: marked(data.description.en) }}
              />
            )}
          </Pressable>
        </ScrollView>
      </View>
    </Dialog>
  );
};

export default Summary;
