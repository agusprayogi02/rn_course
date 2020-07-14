import React from 'react';
import {View, Text} from 'react-native';

const ShapeView = ({title, red, green, blue}) => {
  return (
    <View style={{margin: 10, alignItems: 'center'}}>
      <Text style={{fontSize: 20}}>{title}</Text>
      <View
        style={{
          backgroundColor: `rgb(${red},${green}, ${blue})`,
          height: 100,
          width: 100,
        }}
      />
    </View>
  );
};

export default ShapeView;
