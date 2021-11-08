import React from 'react'
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityBase, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Account from './Src/Components/Account'
import Button from './Src/Components/Button'
import Contact from './Src/Components/Contact'
import ContactSend from './Src/Components/ContactSend'
import Grocerry from './Src/Components/Grocerry'
import Header from './Src/Components/Header'
import Info from './Src/Components/Info'
import Package from './Src/Components/Package'
import Search from './Src/Components/Search'
import Shortcuts from './Src/Components/Shortcuts'
import BalanceScreen from './Src/Pages/BalanceScreen'
import ContactScreen from './Src/Pages/ContactScreen'
import ElectricityBillScreen from './Src/Pages/ElectricityBillScreen'
import InternetDataScreen from './Src/Pages/InternetDataScreen'
import MenuScreen from './Src/Pages/MenuScreen'
import PaymentSummaryScreen from './Src/Pages/PaymentSummaryScreen'
import SendMoneyScreen from './Src/Pages/SendMoneyScreen'
import WithdrawScreen from './Src/Pages/WithdrawScreen'
import TabNavigation from './Src/Routes/TabNavigation';
import HomeStack from './Src/Routes/HomeStack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
   <NavigationContainer>
     <Stack.Navigator
     initialRouteName={BalanceScreen}
     screenOptions={{
       headerShown: false
     }}
     >
        {/* <Stack.Screen name="HomeScreen" component={BalanceScreen} />
        <Stack.Screen name="MenuScreen" component={MenuScreen} /> 
       <Stack.Screen name="ContactsScreen" component={ContactScreen} />
       <Stack.Screen name="MoneyScreen" component={SendMoneyScreen} />
       <Stack.Screen name="BillScreen" component={ElectricityBillScreen} />
       <Stack.Screen name="InternetScreen" component={InternetDataScreen} />
       <Stack.Screen name="SummaryScreen" component={PaymentSummaryScreen} />
       <Stack.Screen name="WithdrawScreen" component={WithdrawScreen} /> */}
       <Stack.Screen name="TabStack" component={TabNavigation} />
       <Stack.Screen name="HomeScreen" component={BalanceScreen} />
      

     </Stack.Navigator>
   </NavigationContainer>
    
  )
}

export default App

const styles = StyleSheet.create({
 
})
