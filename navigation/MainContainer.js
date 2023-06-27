import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableWithoutFeedback, Keyboard, TextInput, Button, TouchableOpacity, Platform, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import Borrow from './screens/borrow'
import Inbox from './screens/inbox'
import Earnings from './screens/earnings'
import Cashout from './screens/cashout'
import Lender from './screens/lender'

// Screen name
const BorrowName = 'Home' ; 
const InboxName = 'Inbox' ;
const EarningsName = 'Lend' ;
const CashoutName = 'Buy/Sell' ;

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function StackScreen() { 
    return(
        <Stack.Navigator>
            <Stack.Screen options={{headerShown:false}} name="Borrow" component={Borrow}/>
            <Stack.Screen options={{headerTransparent:true,headerBackTitleVisible:false, title: null}} name="Lender" component={Lender}/>
        </Stack.Navigator>
    )
}

export default function MainContainer(){
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={BorrowName}
                screenOptions = {({route}) => ({
                    headerShown: false, // Hide the screen names from the header
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === BorrowName) {
                            iconName = focused ? 'home' : 'home-outline'
                        } else if (rn === InboxName) {
                            iconName = focused ? 'mail-unread' : 'mail-unread-outline'
                        } else if (rn === EarningsName) {
                            iconName = focused ? 'hand-right' : 'hand-right-outline'
                        } else if (rn === CashoutName) {
                            iconName = focused ? 'cash' : 'cash-outline'
                        }

                        return <Ionicons name={iconName} size={size} color={color}/>
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'grey',
                    labelStyle: {paddingBottom: 10, fontSize: 10},
                    style: {padding: 10, height: 70}
                }}
                
                >

                <Tab.Screen name={BorrowName} component={StackScreen}/>
                <Tab.Screen name={InboxName} component={Inbox}/>
                <Tab.Screen name={EarningsName} component={Earnings}/>
                <Tab.Screen name={CashoutName} component={Cashout}/>

            </Tab.Navigator> 

        </NavigationContainer>
    )
}