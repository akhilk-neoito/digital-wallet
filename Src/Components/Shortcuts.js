import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Shortcuts = (props) => {
    return (
        <View style={styles.top}>
            <TouchableOpacity onPress={props.navHandler}>
        <View style={styles.short}>
            <Image source={props.img} />
            <Text style={styles.text}>{props.text}</Text>
        </View>
        </TouchableOpacity>
        <View style={styles.line}></View>
        </View>
    )
}

export default Shortcuts

const styles = StyleSheet.create({
    short:{
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",
        marginLeft:32,
        
        
    },
    text:{
        marginLeft:16,
        fontSize:14,
        color:"#273240",
        letterSpacing:0.3,
    },
    top:{
        marginTop:14
    },
    line:{
        borderBottomWidth:0.6,
        marginTop:14,
        borderBottomColor:"#E7E7F7"

    }
})
