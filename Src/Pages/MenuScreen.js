import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import Header from '../Components/Header'
import Search from '../Components/Search'
import Shortcuts from '../Components/Shortcuts'
import {useNavigation} from '@react-navigation/native';

const MenuScreen = () => {
  const navigation = useNavigation();
 
    return (
        <View>
            <Header head="Menu"/>
            <Search bg={styles.back}/>
    <View style={styles.text}>
      <Text style={styles.one}>Shortcuts</Text>
      <TouchableOpacity>
        <Text style={styles.two}>Customize</Text>
      </TouchableOpacity>
    </View>
    <Shortcuts text="Send Money" img={require("../Assets/SendMoney.png")} navHandler={()=>navigation.navigate("ContactsScreen")}/>
    <Shortcuts text="Top up Wallet" img={require("../Assets/Wallet.png")} navHandler={()=> navigation.navigate("InternetScreen")} />
    <Shortcuts text="Bill Payment" img={require("../Assets/BillPayment.png")} navHandler={()=>navigation.navigate("BillScreen")} />
    <Shortcuts text="Withdraw" img={require("../Assets/Withdraw.png")} navHandler={()=>navigation.navigate("WithdrawScreen")} />
    <View style={styles.text1}>
      <Text>Other Menu</Text>
    </View>
    <Shortcuts text="History Transactions" img={require("../Assets/History.png")} />
    <Shortcuts text="Request Payment" img={require("../Assets/RequestPayment.png")} />
    <Shortcuts text="Settings" img={require("../Assets/Settings.png")} />
    <Shortcuts text="Help" img={require("../Assets/Help.png")} />
        </View>
    )
}

export default MenuScreen

const styles = StyleSheet.create({
    text:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginLeft:32,
        marginRight:30,
        marginTop:14,
        marginBottom:14
      },
      text1:{
        marginLeft:32,
        marginTop:14,
        marginBottom:14
      },
      one:{
          fontSize:14,
          color:"#082431",
          letterSpacing:0.3,

      },
      two:{
          fontSize:14,
          fontWeight:"500",
          color:"#525298",
          letterSpacing:0.3
      },
      back:{
          backgroundColor:"#E9E9F2"
      }
      
})
