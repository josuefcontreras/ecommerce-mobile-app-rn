import React from 'react';
import {
  BottomTabBarOptions,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {MainTabParamList} from '../types';
import {RouteProp} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ProductListNavigator} from './stack';

const MainTab = createBottomTabNavigator<MainTabParamList>();
export const MainTabNavigator = () => {
  return (
    <MainTab.Navigator
      tabBarOptions={tabBarOptions}
      screenOptions={screenOptions}>
      <MainTab.Screen name="Home" component={ProductListNavigator} />
      {/*<MainTab.Screen name="TrackCreate" component={TrackCreateScreen} />
      <MainTab.Screen name="TrackList" component={TrackListNavigator} /> */}
    </MainTab.Navigator>
  );
};

const tabBarOptions: BottomTabBarOptions = {
  activeTintColor: '#03a9f4',
  inactiveTintColor: 'gray',
  showLabel: false,
  iconStyle: {
    fontSize: 35,
  },
};

function screenOptions(props: {
  route: RouteProp<MainTabParamList, keyof MainTabParamList>;
  navigation: any;
}) {
  const options: BottomTabNavigationOptions = {
    tabBarIcon: ({focused, color, size}) => {
      let iconName: any;

      if (props.route.name === 'Home') {
        iconName = focused ? 'home' : 'home-outline';
      } else if (props.route.name === 'TrackList') {
        iconName = focused ? 'ios-list-circle' : 'ios-list-circle-outline';
      } else if (props.route.name === 'TrackCreate') {
        iconName = focused ? 'analytics' : 'analytics-outline';
      }

      // You can return any component that you like here!
      return <Ionicons name={iconName} size={size} color={color} />;
    },
  };
  return options;
}
