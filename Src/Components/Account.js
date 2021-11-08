import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Account = (props) => {
    return (
        <View style={styles.acnt}>
            <View style={styles.txt}>
                <Image source={props.img}/>
                <View style={styles.text}>
                    <Text style={styles.text1}>{props.type}</Text>
                    <Text style={styles.text2}>{props.no}</Text>
                </View>
            </View>
            <TouchableOpacity>
            <Image source={require("../Assets/Tick.png")}/>
            </TouchableOpacity>
        </View>
    )
}

export default Account

const styles = StyleSheet.create({
acnt:{
    flexDirection:"row",
    justifyContent:"space-between",
    width:315,
    height:84,
    alignItems:"center",
    marginHorizontal:30,
    paddingHorizontal:24
},
txt:{
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row"
},
text:{
    marginLeft:20
},
text1:{
    fontSize:14,
    color:"#2C2C63",
    letterSpacing:0.3
},
text2:{
    fontSize:12,
    letterSpacing:0.3,
    color:"#082431",
    opacity:0.5
}

})
