import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'

const Grocerry = (props) => {
    return (
        <View style={styles.row}>
            <View style={styles.one}>
            <Image source={props.img} />
            <View style={styles.groc}>
                <Text style={styles.text1}>{props.title}</Text>
                <Text style={styles.text2}>Nov 17</Text>
            </View>
            </View>
            <View style={styles.loc}>
            <Text style={styles.text3}>326.800</Text>
            <Text style={styles.text4}>{props.place}</Text>
            </View>
        </View>
    )
}

export default Grocerry

const styles = StyleSheet.create({
    row:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:28,
        alignItems:"center",
        marginTop:30
    },
    groc:{
        marginLeft:16
    },
   
    text1:{
        fontSize:13,
        color:"#273240",
        fontWeight:"500",
        letterSpacing:0.3
    },
    text2:{
        fontSize:12,
        color:"#2C3A4B",
        letterSpacing:0.3
    },
    text3:{
        fontSize:13,
        color:"#273240",
        fontWeight:"500",
        letterSpacing:0.3,
        textAlign:"right"
    },
    text4:{
        color:"#2C3A4B",
        fontSize:12,
        letterSpacing:0.3
    },
    one:{
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center"
    }
})
