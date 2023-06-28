import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaSafeAreaView, TouchableWithoutFeedback, Keyboard, TextInput, Button, TouchableOpacity, Platform, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function Earnings({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.icon}>
      <Ionicons name="person-circle-outline" size={24} />
      <View style={{ width: 290 }} />
      <Ionicons name="notifications-outline" size={24} />
      </View>
      <View style={styles.textcontainer}>
      <Text style={styles.h1}>Earnings</Text>
      <Text style={{fontSize: 16,marginTop: 16,color: 'grey'}}>Consistent 🔥</Text>
      </View>
      <View style={styles.box}>
        <View style={styles.centerContainer}>
          <Text style={[styles.body2, {color:'white'}]} >This week</Text>
          <Text style={{fontSize: 36, fontWeight: '600', color: 'white'}}>₱14,397</Text>
          <Text style={{fontSize: 16, color: 'white'}}>See detailed report</Text>
        </View>
      </View>
      <Text style={{fontWeight: 'bold',fontSize: 32, marginTop: 16}}>Overview</Text>
      <View style={{flexDirection: 'row',justifyContent: 'space-around', marginTop: 40}}>
      <View style={[styles.square, {backgroundColor: '#004479'}]}></View>
      <Text style={[styles.body2, {color: '#004479', marginLeft: -40}]}>This week</Text>
      <View style={[styles.square, {backgroundColor: '#ffba6c'}]}></View>
      <Text style={[styles.body2, {color: '#ffba6c', marginLeft: -40}]}>Last week</Text>
      </View>
      <Image source={require('./assets/chart.jpg')} style={styles.logo}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 24,
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  textcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  h1: {
    fontWeight: 'bold',
    fontSize: 32,
  },
  body:{
    fontSize: 24,
    color: 'black',
  },
  body1:{
    fontSize: 12,
    color: 'black',
  },
  body2:{
    fontSize: 16,
    color: 'grey',
  },
  box: {
    marginTop: 24,
    width: 340,
    height: 120,
    backgroundColor: 'black',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 15,
  },
  boldtext: {
    fontSize: 36,
    fontWeight: '900',
  }, 
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    width: 24,
    height: 24,
  },
});
