import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View,Dimensions } from 'react-native'

const Button = (props) => {
    
    return (
        <View style={styles.main}>
            <TouchableOpacity style={styles.btn} onPress={props.navHandler}>
                <Text style={styles.text}>{props.title}</Text>
                <Image source={props.img} style={styles.circle}/>
            </TouchableOpacity>
        </View>
    )
}

export default Button

const styles = StyleSheet.create({
    btn:{
        height:64,
        width:315,
        backgroundColor:"#525298",
        borderRadius:36,
        justifyContent:"center",
        alignItems:"center"
    },
    main:{
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        fontSize:15,
        color:"#FFFFFF",
        fontWeight:"600",
        letterSpacing:2
    },
    circle:{
        position:"absolute",
        left:7
    }
})
