import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, SafeAreaSafeAreaView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';

export default function Cashout({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
    <Text>Cashout</Text>
    </SafeAreaView>
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
