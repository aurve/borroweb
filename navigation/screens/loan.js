import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, SafeAreaSafeAreaView, TouchableWithoutFeedback, Keyboard, TextInput, Button, TouchableOpacity, Platform, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function Loan({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1, backgroundColor: '#fff'}} showsVerticalScrollIndicator={false} indicatorStyle="white">
      <View style={styles.content}>
      
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 24,
  },
  content: {
    flex: 1,
  },
});
