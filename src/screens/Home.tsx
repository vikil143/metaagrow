import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function Home() {
  return (
    <View style={[styles.container]}>
      <View style={[styles.box]}>
        <Text style={[styles.boxText]}>Home</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  boxText: {
    fontSize: 20,
    color: '#fff',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#B31312',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#0E2954',
    alignItems: 'center',
  },
});
