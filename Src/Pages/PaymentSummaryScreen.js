import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Button from '../Components/Button';
import Header from '../Components/Header';
import {useNavigation} from '@react-navigation/native';

const PaymentSummaryScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Header head="Payment Summary" />
      <View style={styles.main}>
        <View style={styles.one}>
          <Text style={styles.text1}>Simple Package</Text>
          <Text style={styles.text2}>
            14 GB Internet + 2 GB Streaming, Active Period 30 days
          </Text>
        </View>
        <View style={styles.two}>
          <View>
            <Text style={styles.text3}>Thomas Wise</Text>
            <Text style={styles.text4}>0821 - 7654 - 3210</Text>
          </View>
          <TextInput placeholder="Promo Code" style={styles.input}></TextInput>
          <TouchableOpacity style={styles.pos1}>
            <Image source={require('../Assets/Bookmark.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.pos2}>
            <Text style={styles.text5}>APPLY</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.adjust}>
          <Text style={styles.text6}>Total</Text>
          <Text style={styles.text7}>Rp 50.000</Text>
        </View>

        <Image source={require('../Assets/Avatar9.png')} style={styles.pos3} />
      </View>
      <Image source={require('../Assets/StarBig.png')} style={styles.pos4} />
      <Button title="SWIPE TO PAY" img={require("../Assets/CircleArrrow.png")} navHandler={()=>navigation.navigate("HomeScreen")}/>
    </View>
  );
};

export default PaymentSummaryScreen;

const styles = StyleSheet.create({
  input: {
    width: 275,
    height: 50,
    paddingLeft: 50,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#E7E7F6',
    marginTop: 40,
    fontSize: 13,
    letterSpacing: 0.3,
    opacity: 0.5,
    color: '#2C3A4B',
  },
  one: {
    justifyContent: 'center',
    alignItems: 'center',
    
    width: 300,
    height: 200,
    borderRadius: 20,
    borderBottomWidth:1,
    borderStartColor:'dotted'
  },
  two: {
    justifyContent: 'center',
    alignItems: 'center',
    
    width: 300,
    height: 240,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom:20
  },
  text1: {
    fontSize: 20,
    fontWeight: '500',
    letterSpacing: 0.3,
    color: '#2C2C63',
  },
  text2: {
    fontSize: 13,
    opacity: 0.5,
    color: '#2C3A4B',
    letterSpacing: 0.3,
    textAlign: 'center',
    marginHorizontal: 30,
    paddingTop: 15,
  },
  text3: {
    fontSize: 18,
    fontWeight: '500',
    color: '#273240',
    letterSpacing: 0.3,
  },
  text4: {
    fontSize: 15,
    color: '#2C3A4B',
    letterSpacing: 0.3,
    opacity: 0.5,
    paddingTop: 10,
  },
  text5: {
    fontSize: 13,
    color: '#32A7E2',
    letterSpacing: 0.5,
    fontWeight: '600',
  },
  text6: {
    fontSize: 16,
    color: '#3F3F65',
    letterSpacing: 0.3,
    fontWeight: '500',
  },
  text7: {
    fontSize: 22,
    fontWeight: '500',
    color: '#3F3F65',
  },
  pos1: {
    position: 'absolute',
    left: 25,
    bottom: 64,
  },
  pos2: {
    position: 'absolute',
    bottom: 64,
    right: 25,
  },
  pos3: {
    position: 'absolute',
    bottom: '57%',
  },
  pos4: {
    position: 'absolute',
    top: '11%',
    left: '43%',
  },
  adjust: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E2E2F0',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    width: 300,
    height: 76,
    paddingHorizontal: 30,
  },
});
