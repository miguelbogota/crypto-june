import { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from '@expo/vector-icons/MaterialIcons';
// Views
import Favorites from '@app-views/favorites';
import Settings from '@app-views/settings';
import Trending from '@app-views/trending';
import { StyleSheet } from 'react-native';
import { Colors, Text, View } from 'react-native-ui-lib';
import Coins from '@app-views/coins';

/** Type of routes available in the app. */
export type NavigationOptions = {
  favorites: undefined;
  settings: undefined;
  trending: undefined;
  coins: undefined;
};

const Tab = createBottomTabNavigator<NavigationOptions>();

/** Tab options to move in the app. */
const TabOptions: FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="trending"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          ...styles.tabBar,
          ...styles.shadow,
          shadowColor: Colors.shadowColor,
          backgroundColor: Colors.paperBG,
        },
      }}
    >
      <Tab.Screen
        name="favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ focused }) => (
            <View flex style={styles.tabView}>
              <Icon
                name="favorite"
                size={32}
                color={!focused ? Colors.textColor : Colors.primaryColor}
                style={styles.tabIcon}
              />
              <Text
                color={!focused ? Colors.textColor : Colors.primaryColor}
                style={styles.tabLabel}
              >
                Favorites
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="coins"
        component={Coins}
        options={{
          tabBarIcon: ({ focused }) => (
            <View flex style={styles.tabView}>
              <Icon
                name="donut-large"
                size={32}
                color={!focused ? Colors.textColor : Colors.primaryColor}
                style={styles.tabIcon}
              />
              <Text
                color={!focused ? Colors.textColor : Colors.primaryColor}
                style={styles.tabLabel}
              >
                Coins
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="trending"
        component={Trending}
        options={{
          tabBarIcon: ({ focused }) => (
            <View flex style={styles.tabView}>
              <Icon
                name="trending-up"
                size={32}
                color={!focused ? Colors.textColor : Colors.primaryColor}
                style={styles.tabIcon}
              />
              <Text
                color={!focused ? Colors.textColor : Colors.primaryColor}
                style={styles.tabLabel}
              >
                Trending
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="settings"
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => (
            <View flex style={styles.tabView}>
              <Icon
                name="settings"
                size={32}
                color={!focused ? Colors.textColor : Colors.primaryColor}
                style={styles.tabIcon}
              />
              <Text
                color={!focused ? Colors.textColor : Colors.primaryColor}
                style={styles.tabLabel}
              >
                Settings
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

/** Default navigator of the app. */
const Navigation: FC = () => {
  return (
    <NavigationContainer>
      <TabOptions />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 30,
    left: 18,
    right: 18,
    borderRadius: 15,
    height: 90,
    paddingTop: 26,
  },
  shadow: {
    borderTopWidth: 0,
    elevation: 0,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
  tabView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabIcon: {
    fontSize: 30,
    marginBottom: 3,
  },
  tabLabel: {
    fontSize: 12,
  },
});

export default Navigation;
