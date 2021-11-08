import React from 'react'
import { StyleSheet, Text, View,Image} from 'react-native'

const Package = (props) => {
    return (
        <View style={styles.pack}>
            <View style={styles.one}>
            <View style={styles.text}>
            <Image source={props.image} />
            <Text style={styles.text1}>Simple Package</Text>
            </View>
            <Text style={styles.text2}>Rp 50.000</Text>
            </View>
            <View style={styles.mob}>
                <Text style={styles.text3}>14 GB Internet + 2 GB Streaming, Active Period 30 days</Text>
            </View>
        </View>
    )
}

export default Package

const styles = StyleSheet.create({
    one:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    text:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    pack:{
        height:142,
        width:315,
        borderRadius:20,
        marginHorizontal:30,
        paddingHorizontal:20,
        justifyContent:"center",
        borderRadius:20
    },
    mob:{
        marginTop:30
    },
    text1:{
        fontSize:14,
        fontWeight:'500',
        color:"#2C2C63",
        marginLeft:12
    },
    text2:{
        fontSize:14,
        color:"#525298",
        fontWeight:"500"

    },
    text3:{
        fontSize:13,
        color:"#2C3A4B",
        opacity:0.5
    }
})
