import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaSafeAreaView, TouchableWithoutFeedback, Keyboard, TextInput, Button, TouchableOpacity, Platform, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'

//active loan screen
export default function Inbox({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.icon}>
      <Ionicons name="person-circle-outline" size={24} />
      <View style={{ width: 290 }} />
      <Ionicons name="notifications-outline" size={24} />
      </View>
      <View style={styles.logocontainer}>
      <Image source={require('./assets/chart.jpg')} style={styles.logo}/>
      </View>

      <Text style={styles.h1}>Active Loans</Text>
      <View style={styles.textcontainer}>
      <Text style={styles.body}>Buffay, Phoebe</Text>
      <Text style={styles.body1}>Transaction history</Text>
      </View>
      <View style={styles.textcontainer}>
      <Text style={styles.body}>Green, Rachel</Text>
      <Text style={styles.body1}>Transaction history</Text>
      </View>
      <View style={styles.textcontainer}>
      <Text style={{fontSize:24, marginTop:24}}>Tribbiani, Joey</Text>
      <Text style={{fontSize: 12, marginTop: 32, color: '#004479',}}>Transaction history</Text>
      </View>
      <Text style={styles.body2}>Remaining balance of:</Text>
      <View style={styles.textcontainer}>
      <Text style={styles.boldtext}>₱4,312</Text>
      <Text style={{fontSize: 12, marginTop: 24, color: 'grey',}}>Due May 19</Text>
      </View>
      <Text style={{fontSize: 16, marginTop: 24, color: 'red', alignSelf: 'center'}}>2 days until payment deadline</Text>
      <View style={{alignItems: 'center', marginTop:24}}>
      <View style={styles.contactbg}>
          <Text style={styles.boxcontact}>Message Joey</Text>
      </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 24,
  },
  logocontainer: {
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 150,
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  h1: {
    fontWeight: 'bold',
    fontSize: 32,
  },
  textcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  body:{
    fontSize: 24,
    marginTop: 24,
    color: 'grey',
  },
  body1:{
    fontSize: 12,
    marginTop: 32,
    color: '#b2c7d7',
  },
  body2:{
    fontSize: 16,
    marginTop: 24,
    color: 'grey',
  },
  boldtext: {
    fontSize: 40,
    fontWeight: '900',
  }, 
  boxcontact: {
    fontSize: 15,
    textAlign: 'right',
    color: '#004479',
    fontWeight: 500,
  },
  contactbg:{
    backgroundColor: '#cedff2',
    padding: 'auto',
    borderRadius: 15,
    width: 130,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
