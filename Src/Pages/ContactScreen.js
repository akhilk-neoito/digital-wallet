import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Contact from '../Components/Contact'
import Header from '../Components/Header'
import Search from '../Components/Search'

const ContactScreen = ({props}) => {
    return (
        <View>
        <Header head="Contacts" />
        <Search />
        <View style={styles.marg}>
        <Text style={styles.text1}>Recents Contacts</Text>
        </View>
        <Contact name="Samantha" accno="Bank - 0987 3422 8756" img={require("../Assets/Avatar1.png")}/>
        <Contact name="Rose Hope" accno="Bank - 0987 3422 8756" img={require("../Assets/Avatar2.png")}  />
        <Contact  name="Angela Smith" accno="Bank - 0987 3422 8756" img={require("../Assets/Avatar3.png")}/>
        <View style={styles.marg}>
        <Text style={styles.text1}>All contacts</Text>
        </View>
        <Contact  name="Andrea Summer" accno="Bank - 0987 3422 8756" img={require("../Assets/Avatar4.png")}/>
        <Contact  name="Karen William" accno="Bank - 0987 3422 8756" img={require("../Assets/Avatar5.png")} />
        <Contact  name="Thomas Wise" accno="Bank - 0987 3422 8756" img={require("../Assets/Avatar6.png")} />
        </View>
    )
}

export default ContactScreen

const styles = StyleSheet.create({
    text1:{
        fontSize:14,
        letterSpacing:0.3,
        color:"#082431",
        marginLeft:30,
        
    },
    marg:{
        marginTop:20
    }
})
