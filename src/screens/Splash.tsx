import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {NavigationsKeys} from './Navigation';
import {SCREEN_WIDTH, urlEndPoint} from '../utilities';
import {LocalStore, useQuery, useRealm} from '../realm';

interface SplashProps extends StackScreenProps<NavigationsKeys, 'Splash'> {}

export default function Splash({navigation}: SplashProps) {
  const [imageSource, setImageSource] = useState('');
  const realm = useRealm();
  const localData = useQuery(LocalStore);

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    const isNotImageStored = localData.isEmpty();

    if (isNotImageStored) {
      realm.write(() => {
        realm.create('LocalStore', {imageUri: urlEndPoint});
      });
      setImageSource(urlEndPoint);
    } else {
      const image = localData.filter(item => true);
      setImageSource(image[0].imageUri);
    }

    setTimeout(() => navigation.replace('Home'), 5000);
  };

  return (
    <View style={[styles.container]}>
      <View>
        <View style={styles.logo}>
          {!!imageSource && (
            <Image
              style={{width: SCREEN_WIDTH * 0.6, height: SCREEN_WIDTH * 0.6}}
              source={{uri: imageSource}}
            />
          )}
        </View>
        <Text style={[styles.text]}>Splash Screen</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
  logo: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    backgroundColor: '#cccccc',
  },
  container: {
    flex: 1,
    backgroundColor: '#84A7A1',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
