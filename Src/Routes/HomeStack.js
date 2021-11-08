import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BalanceScreen from '../Pages/BalanceScreen';
import ContactScreen from '../Pages/ContactScreen';
import SendMoneyScreen from '../Pages/SendMoneyScreen';
import ElectricityBillScreen from '../Pages/ElectricityBillScreen';
import InternetDataScreen from '../Pages/InternetDataScreen';
import WithdrawScreen from '../Pages/WithdrawScreen';
import MenuScreen from '../Pages/MenuScreen';
import PaymentSummaryScreen from '../Pages/PaymentSummaryScreen';

const Stack = createNativeStackNavigator();
const HomeStack = () => {

    return (
        <NavigationContainer
        independent={true}
        >
            <Stack.Navigator
            initialRouteName={BalanceScreen}
            screenOptions={{
                headerShown: false
            }}
            >
        <Stack.Screen name="HomeScreen" component={BalanceScreen}/>     
       <Stack.Screen name="ContactsScreen" component={ContactScreen} />
       <Stack.Screen name="MoneyScreen" component={SendMoneyScreen} />
       <Stack.Screen name="BillScreen" component={ElectricityBillScreen} />
       <Stack.Screen name="InternetScreen" component={InternetDataScreen} />
       <Stack.Screen name="WithdrawScreen" component={WithdrawScreen} />
       <Stack.Screen name="MenuScreen" component={MenuScreen} /> 
       <Stack.Screen name="SummaryScreen" component={PaymentSummaryScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    
    )
}

export default HomeStack

const styles = StyleSheet.create({})
