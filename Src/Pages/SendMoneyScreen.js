import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import Button from '../Components/Button'
import ContactSend from '../Components/ContactSend'
import Header from '../Components/Header'
import {useNavigation} from '@react-navigation/native';

const SendMoneyScreen = () => {
    const navigation = useNavigation();
    const [text, setText] = React.useState('');
    return (
        <View style={styles.main}>
            <Header head="Send Money"/>
            <View style={styles.cont}>
            <ContactSend bg={styles.back} imag={require("../Assets/Avatar7.png")} head="Samantha" bank="Bank - 0987 3422 8756" imagee={require("../Assets/ArrowDown.png")}/>
            </View>
            <TextInput 
            style={styles.input}
            onChangeText={text => setText(text)}
            value={text}
            keyboardType="numeric"
            />
            <View style={styles.but}>
            <Button title="SWIPE TO SEND" img={require("../Assets/CircleArrrow.png")} navHandler={()=>navigation.navigate("WithdrawScreen")}/>
            </View>
        </View>
    )
}

export default SendMoneyScreen

const styles = StyleSheet.create({
    input:{
        fontSize:50,
        color:"#525298",
        justifyContent:"center",
        alignItems:"center",
        marginHorizontal:100,
        marginTop:20

    },
    cont:{
        marginTop:53
    },
   
    main:{
        height:"100%"
    },
    but:{
        marginTop:300
    },
    back:{
        backgroundColor:"#F1F1F9",
        borderRadius:20
    }
})
