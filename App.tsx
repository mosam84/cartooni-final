import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ClickScreen from './screens/ClickScreen';
import AnimeScreen from './screens/AnimeScreen';
import WatercolorScreen from './screens/WatercolorScreen';
import UploadScreen from './screens/UploadScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Click" component={ClickScreen} />
        <Stack.Screen name="Anime" component={AnimeScreen} />
        <Stack.Screen name="Watercolor" component={WatercolorScreen} />
        <Stack.Screen name="Upload" component={UploadScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}