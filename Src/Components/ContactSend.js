import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const ContactSend = (props) => {
    return (
        <View style={[styles.row,props.bg]}>
            <View style={styles.text}>
            <Image source={props.imag}/>
            <View style={styles.title}>
                <Text style={styles.one}>{props.head}</Text>
                <Text style={styles.two}>{props.bank}</Text>
            </View>
            </View>
            <TouchableOpacity>
                <Image source={props.imagee}/>
            </TouchableOpacity>
        </View>
    )
}

export default ContactSend

const styles = StyleSheet.create({

    row:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        width:315,
        height:80,
        marginHorizontal:30,
        paddingHorizontal:30,
      
        borderRadius:20
    },
    text:{
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center"
    },
    title:{
        marginLeft:10
    },
    one:{
        fontSize:13,
        color:"#273240",
        letterSpacing:0.3,
        fontWeight:"500"
    },
    two:{
        color:"#2C3A4B",
        fontSize:12,
        letterSpacing:0.3,
        opacity:0.5
    }
})
