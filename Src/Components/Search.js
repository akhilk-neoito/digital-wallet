import React from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

const Search = (props) => {
  const [text, setText] = React.useState('');
  return (
    <View style={styles.top}>
      <View style={styles.search}>
        <TextInput
          placeholder="Search"
          onChangeText={text => setText(text)}
          value={text}
          style={[styles.input,props.bg]}
        />
      </View>
      <TouchableOpacity  style={styles.img} >
      <Image source={require("../Assets/Search.png")}/>
      </TouchableOpacity>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 50,
    borderRadius: 15,
    borderColor: '#E7E7F6',
    borderWidth: 1,
    paddingLeft: 25,
    fontSize: 13,
    color: '#2C3A4B',
  },
  search: {
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  img:{
      position:"absolute",
      right:40,
      top:17
  },
  top:{
    marginTop: 35,
  }
});
