import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import Styles from '../assets/styles/GlobalStyles';
import PaddingBtn from '../assets/styles/PaddingBtn';

const HomeScreen = ({navigation}) => {
  return (
    <View style={Styles.container}>
      <Text style={style.text}>Hai guys selmat datang di aplikasi saya.</Text>
      <PaddingBtn>
        <Button
          title="Color Pickler"
          onPress={() => navigation.navigate('Color')}
        />
      </PaddingBtn>
    </View>
  );
};

const style = StyleSheet.create({
  text: {
    color: 'gray',
    fontSize: 30,
  },
});

export default HomeScreen;
