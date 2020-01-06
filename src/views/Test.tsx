import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useBeaconsListener } from '../beacon/use-beacons-listeneristener'
import { requestPermissions } from '../beacon/beacon-permissionsissions'

requestPermissions()

console.log('ok sure')

export default function App() {
  console.log('whooooo')
  useBeaconsListener()
  return (
    <View style={styles.container}>
      <Text>Gooble Gobble!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
