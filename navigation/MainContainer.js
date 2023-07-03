import * as React from 'react';
import { StyleSheet, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//test pt 3
//test pt 2
//Screens

import Borrow from './screens/borrow'
import Inbox from './screens/inbox'
import Earnings from './screens/earnings'
import Cashout from './screens/cashout'
import Lender from './screens/lender'
import Loan from './screens/loan'

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
                screenOptions={({ route }) => ({
                headerShown: false, // Hide the screen names from the header
                tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === BorrowName) {
                            iconName = focused ? 'home' : 'home'
                        } else if (rn === InboxName) {
                            iconName = focused ? 'mail-unread-outline' : 'mail-unread-outline'
                        } else if (rn === EarningsName) {
                            iconName = focused ? 'hand-right-outline' : 'hand-right-outline'
                        } else if (rn === CashoutName) {
                            iconName = focused ? 'cash-outline' : 'cash-outline'
                        }

                        return <Ionicons name={iconName} size={size} color={color}/>
                    },
                    tabBarActiveTintColor: 'grey',
                    tabBarInactiveTintColor: 'grey',
                    tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
                    tabBarStyle: { padding: 10, height: 60 },
                })}
                >

                <Tab.Screen name={BorrowName} component={StackScreen}/>
                <Tab.Screen name={InboxName} component={Inbox}/>
                <Tab.Screen name={EarningsName} component={Earnings}/>
                <Tab.Screen name={CashoutName} component={Cashout}/>

            </Tab.Navigator> 

        </NavigationContainer>
    )
}