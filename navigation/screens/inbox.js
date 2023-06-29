import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, SafeAreaSafeAreaView, TouchableWithoutFeedback, Keyboard, TextInput, Button, TouchableOpacity, Platform, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function Inbox({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1, backgroundColor: '#fff'}} showsVerticalScrollIndicator={false} indicatorStyle="white">
        <View style={styles.content}>
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
        
            <Text style={styles.h1}>Active Loans</Text>

          <View style={styles.textcontainer}>
            <Text style={[styles.body, {marginTop: 24, color: 'grey'}]}>Buffay, Phoebe</Text>
            <Text style={[styles.body1, {marginTop: 32, color: '#b2c7d7'}]}>Transaction history</Text>
          </View>

          <View style={styles.textcontainer}>
            <Text style={[styles.body, {marginTop: 24, color: 'grey'}]}>Green, Rachel</Text>
            <Text style={[styles.body1, {marginTop: 32, color: '#b2c7d7'}]}>Transaction history</Text>
          </View>

          <View style={styles.textcontainer}>
            <Text style={{fontSize:24, marginTop:24}}>Tribbiani, Joey</Text>
            <Text style={{fontSize: 12, marginTop: 32, color: '#004479',}}>Transaction history</Text>
          </View>

          <Text style={[styles.body2, {marginTop: 24, color: 'grey'}]}>Remaining balance of:</Text>

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
