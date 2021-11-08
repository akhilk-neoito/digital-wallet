import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Account from '../Components/Account'
import Button from '../Components/Button'
import Header from '../Components/Header'
import {useNavigation} from '@react-navigation/native';


const WithdrawScreen = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Header head="Withdraw"/>
            <View style={styles.with}>
                <Text style={styles.text1}>620.000</Text>
                <Text style={styles.text2}>Your Balance Rp 8.500.000</Text>
            </View>
            <View style={styles.bank}>
                <Text style={styles.text3}>Choose Bank Account</Text>
            </View>
            <TouchableOpacity>
            <Account type="Personal Account" no="**** - **** - 9876" img={require("../Assets/Account1.png")} />
            </TouchableOpacity>
            <TouchableOpacity>
            <Account  type="Business Account" no="**** - **** - 9876" img={require("../Assets/Account2.png")} />
            </TouchableOpacity>
            <TouchableOpacity>
            <Account type="Family Account" no="**** - **** - 9876" img={require("../Assets/Account3.png")}  />
            </TouchableOpacity>
            <View style={styles.btn}>
            <Button title="CONTINUE" navHandler={() =>navigation.navigate("HomeScreen")} />
            </View>
        </View>
    )
}

export default WithdrawScreen

const styles = StyleSheet.create({
    with:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:77,
        marginBottom:60
    },
    bank:{
        justifyContent:"center",
        alignItems:"center",
        marginBottom:26
    },
    btn:{
        marginTop:30
    },
    text1:{
        fontSize:50,
        color:"#2C2C63"
    },
    text2:{
        fontSize:13,
        color:"#082431",
        opacity:0.5,
        letterSpacing:0.3
    },
    text3:{
        fontSize:16,
        color:"#082431",
        letterSpacing:0.3
    }
})
