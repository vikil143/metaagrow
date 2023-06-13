import {StyleSheet} from 'react-native';
import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Splash from './Splash';
import Home from './Home';

export type NavigationsKeys = {
  Splash: undefined;
  Home: undefined;
  Dashboard: undefined;
};

const Stack = createStackNavigator<NavigationsKeys>();

export default function Navigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
