import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Header from '../Components/Header'
import Info from '../Components/Info'
import Button from '../Components/Button'
import {useNavigation} from '@react-navigation/native';


const ElectricityBillScreen = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Header head="Electricity Bill"/>
            <View style={styles.head}>
                <Text style={styles.text1}>233.150</Text>
                <TouchableOpacity>
                <View style={styles.body}>
                <Text style={styles.text2}>Details</Text>
                <Image source={require("../Assets/ArrowCircle.png")}/>
                </View>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.text3}>Account Info</Text>
            </View>
            <Info head="Name" body="Samantha William" img={require("../Assets/InfoName.png")} />
            <Info  head="Customer ID" body="0098 7485 1298" img={require("../Assets/InfoId.png")}/>
            <Info  head="Month" body="September 2020" img={require("../Assets/InfoId.png")}/>
            <View style={styles.btn}>
            <Button title="CONTINUE" navHandler={()=> navigation.navigate("WithdrawScreen")} />
            </View>
        </View>
    )
}

export default ElectricityBillScreen

const styles = StyleSheet.create({
    head:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:70
    },
    body:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    text1:{
        fontSize:50,
        color:"#2C2C63"
    },
    text2:{
        fontSize:13,
        color:"#082431",
        letterSpacing:0.3,
        opacity:0.5
    },
    text3:{
        fontSize:18,
        letterSpacing:0.3,
        color:"#082431",
        marginLeft:32,
        marginTop:80,
        marginBottom:20
    },
    btn:{
        marginTop:30
    }
})
