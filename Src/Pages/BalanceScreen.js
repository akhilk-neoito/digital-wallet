import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Grocerry from '../Components/Grocerry'
import {useNavigation} from '@react-navigation/native';
const BalanceScreen = () => {
    const navigation = useNavigation();
    const navigation2 = useNavigation();
    const navigation3 = useNavigation();
    return (
        <View style={styles.top}>
            <View style={styles.bal}>
            <Text style={styles.text1}>Your Balance</Text>
            <Text  style={styles.text2}>Rp 8.250.000</Text>
            </View>
            <View style={styles.row}>
                <TouchableOpacity onPress={()=> navigation3.navigate("ContactsScreen")}>
                <View>
                <Image source={require("../Assets/Transfer.png")}/>
                <Text style={styles.text}>Transfer</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation3.navigate("InternetScreen")}>
                <View style={styles.marg}>
                    <Image source={require("../Assets/Topup.png")} />
                <Text style={styles.text}>Top-up</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation2.navigate("BillScreen")}>
                <View style={styles.marg}>
                    <Image source={require("../Assets/Bill.png")} />
                <Text style={styles.text}>Bill</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate("MenuScreen")}>
                <View style={styles.marg}>
                    <Image source={require("../Assets/More.png")} />
                <Text style={styles.text}>More</Text>
                </View>
                </TouchableOpacity>
            </View>
            <Grocerry title="Grocery" place="Minimarket Anugrah" img={require("../Assets/Cart.png")} />
            <Grocerry title="Entertainment" place="Football Game" img={require("../Assets/Game.png")}  />
            <Grocerry title="Equipments" place="DSLR Camera" img={require("../Assets/Camera.png")} />
            <Grocerry title="Office Items" place="Stationary" img={require("../Assets/Bag.png")} />
        </View>
    )
}

export default BalanceScreen

const styles = StyleSheet.create({
    row:{
        flexDirection:"row",
        paddingHorizontal:34,
        marginTop:48
    },
    bal:{
        justifyContent:"center",
        alignItems:"center",
        
        
    },
    marg:{
        marginLeft:38,
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        marginTop:12,
        fontSize:13,
        fontWeight:"500",
        color:"#818197",
        letterSpacing:0.3
    },
    top:{
        marginTop:60
    },
    text1:{
        color:"#082431",
        fontSize:14
    },
    text2:{
        color:"#2C2C63",
        fontSize:35,
        
    }
    })
