import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Info = (props) => {
    return (
        <View style={styles.info}>
            <Image source={props.img}/>
            <View style={styles.text}>
                <Text style={styles.text1}>{props.head}</Text>
                <Text style={styles.text2}>{props.body}</Text>
            </View>
        </View>
    )
}

export default Info

const styles = StyleSheet.create({
    info:{
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",
        paddingLeft:32,
        height:80,
        width:200
    },
    text:{
        marginLeft:20
    },
    text1:{
        fontSize:12,
        color:"#082431",
        opacity:0.5,
        letterSpacing:0.3
    },
    text2:{
        fontSize:14,
        letterSpacing:0.3,
        color:"#2C2C63"
    }
})
