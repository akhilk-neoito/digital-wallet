import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ContactSend from '../Components/ContactSend'
import Header from '../Components/Header'
import Package from '../Components/Package'
import {useNavigation} from '@react-navigation/native';

const InternetDataScreen = () => {
    const navigation = useNavigation();
    const navigation2 = useNavigation();
    const navigation3 = useNavigation();
    return (
        <View>
            <Header head="Internet Data" />
            <View style={styles.head}>
            <ContactSend imag={require("../Assets/Avatar8.png")} head="Thomas Wise" bank="0821 - 7654 - 3210" imagee={require("../Assets/IconContact.png")} />
            </View>
            <View>
                <Text style={styles.top}>Choose Package</Text>
            </View>
            <TouchableOpacity onPress={()=> navigation.navigate("SummaryScreen") }>
            <Package image={require("../Assets/StarGreen.png")}/>
            </TouchableOpacity>
            <TouchableOpacity>
            <Package image={require("../Assets/StarOrange.png")}/>
            </TouchableOpacity>
            <TouchableOpacity>
            <Package image={require("../Assets/StarBlue.png")} /> 
            </TouchableOpacity>
            
        </View>
    )
}

export default InternetDataScreen

const styles = StyleSheet.create({
    top:{
        marginTop:49,
        marginLeft:32,
        marginBottom:25,
        fontSize:18,
        color:"#082431"
    },
    head:{
        paddingTop:40,
    
    }
})
