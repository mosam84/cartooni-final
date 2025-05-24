
import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground source={require('../assets/splash.png')} style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
        <Image source={require('../assets/click.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Cartoon')}>
        <Image source={require('../assets/anime-icon.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Sketch')}>
        <Image source={require('../assets/sketch-icon.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Upload')}>
        <Image source={require('../assets/upload-icon.png')} style={styles.icon} />
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 20,
    paddingTop: 60,
    backgroundColor: '#fff',
  },
  icon: {
    width: 60,
    height: 60,
    marginBottom: 30,
  },
});
