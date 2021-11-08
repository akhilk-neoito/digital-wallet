import React from 'react'
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import {useNavigation} from '@react-navigation/native';
const Contact = (props) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={()=> navigation.navigate("MoneyScreen")} >
        <View style={styles.main}>
            <View>
                <Image source={props.img}/>
            </View>
            <View style={styles.text}>
                <Text style={styles.text1}>{props.name}</Text>
                <Text style={styles.text2}>{props.accno}</Text>
            </View>
        </View>
        </TouchableOpacity>
    )
}

export default Contact

const styles = StyleSheet.create({
    main:{
        flexDirection:"row",
        width:250,
        height:80,
        // backgroundColor:"red",
        justifyContent:"center",
        alignItems:"center",
        marginTop:10
    },
    text:{
        marginLeft:10,
        
    },
    text1:{
        fontSize:15,
        fontWeight:"500",
        color:"#273240",
        letterSpacing:0.3
    },
    text2:{
        fontSize:12,
        color:"#2C3A4B",
        letterSpacing:0.3
    }
})
