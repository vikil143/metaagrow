/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/screens/Navigation';
import {RealmProvider} from './src/realm';

function App(): JSX.Element {
  return (
    <SafeAreaView style={[styles.container]}>
      <RealmProvider>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </RealmProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
