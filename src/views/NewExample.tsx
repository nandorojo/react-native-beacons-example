import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Beacons from 'react-native-beacons-manager'

export default function NewExample() {
  useEffect(() => {
    // console.log(Beacons)
    console.log(Beacons.getAuthorizationStatus())
  }, [])
  return (
    <View style={styles.container}>
      <Text>Ok nice</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
