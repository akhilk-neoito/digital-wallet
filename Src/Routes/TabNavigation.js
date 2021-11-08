import React from 'react'
import { StyleSheet, Text, View,Image} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BalanceScreen from '../Pages/BalanceScreen';
import MenuScreen from '../Pages/MenuScreen';
import PaymentSummaryScreen from '../Pages/PaymentSummaryScreen';
import HomeStack from './HomeStack';

const Icon=({focused}) =>{
    return(
        <Image source={require("../Assets/HomeIcon.png")}
        style={{ tintColor:focused==true?"#5D5D9C":"#2d3436"}}
        />
    )
}

const Icon2=({focused}) =>{
    return(
        <Image source={require("../Assets/Graph.png")}
        style={{ tintColor:focused==true?"#5D5D9C":"#2d3436"}}
        />
    )
}


const TabNavigation = () => {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer 
        independent={true}>
            <Tab.Navigator
            initialRouteName={BalanceScreen}
            screenOptions={{
            headerShown: false
        }}
            >
                
                <Tab.Screen name ="HomeStack" component={HomeStack} 
                options={{
                    tabBarLabel:"Home",
                    tabBarIcon:({focused}) =>( <Icon focused={focused} />)
                }}
                />

               {/* <Tab.Screen name ="HomeScreen" component={BalanceScreen} 
                options={{
                    tabBarLabel:"Home"
                }}
                /> */}
                 {/* <Tab.Screen name ="MenuScreen" component={MenuScreen} 
                options={{
                    tabBarLabel:"Menu"
                }}
                /> */}

                <Tab.Screen name ="SummaryScreen" component={PaymentSummaryScreen} 
                options={{
                    tabBarLabel:"Summary",
                    tabBarIcon:({focused}) =>(<Icon2 focused={focused} />)
                }}
                />

               
                
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default TabNavigation

const styles = StyleSheet.create({})

