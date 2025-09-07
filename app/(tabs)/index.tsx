import { registerRootComponent } from 'expo';
import React from 'react';
import HomeScreen from '../../src/screens/HomeScreen';

export default function App() {
  return <HomeScreen />;
}

registerRootComponent(App);
