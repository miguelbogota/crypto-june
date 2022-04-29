import { CoinGeckoMarkets } from '@app-models/coin-gecko-response';
import { FC, memo, PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';
import { BorderRadiuses, Colors, Image, Text, TouchableOpacity, View } from 'react-native-ui-lib';

export type CoinListItemProps = PropsWithChildren<CoinGeckoMarkets>;

const CoinListItem: FC<CoinListItemProps> = ({
  image,
  name,
  symbol,
  current_price,
  price_change_percentage_24h,
}) => {
  const priceUp = price_change_percentage_24h > 0;

  return (
    <TouchableOpacity
      bg-background
      style={{ ...styles.item, borderBottomColor: Colors.divider }}
      onPress={() => {
        // console.log(`Coin ${name} pressed`);
      }}
    >
      <Image source={{ uri: image }} style={styles.image} />

      <View style={styles.nameContainer}>
        <Text text>{name}</Text>
        <Text text>{symbol.toUpperCase()}</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text text style={styles.textRight}>
          {current_price.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}
        </Text>
        <Text
          text
          style={[styles.textRight, priceUp ? { color: Colors.success } : { color: Colors.warn }]}
        >
          {priceUp && '+'}
          {price_change_percentage_24h.toFixed(2) + '%'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    paddingHorizontal: 24,
    borderBottomWidth: 0.3,
    marginBottom: 2,
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: BorderRadiuses.br20,
    marginRight: 14,
  },
  nameContainer: {
    flex: 1,
  },
  priceContainer: {},
  textRight: { textAlign: 'right' },
});

export default memo(CoinListItem);
