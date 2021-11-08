import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const Header = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.top}>
      <View style={styles.header}>
        <Text style={styles.text}>{props.head}</Text>
      </View>
      <TouchableOpacity style={styles.arrow} onPress={() =>navigation.goBack()}>
        <Image source={require('../Assets/ArrowLeft.png')} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    textAlign: 'center',
    fontSize:18,
    color:"#082431",
    letterSpacing:0.3
  },
  arrow: {
    position: 'absolute',
    left: 35,
    top: 0,
  },
  top:{
      marginTop:20,
      justifyContent:"center",
      alignItems:"center"
  }
});
