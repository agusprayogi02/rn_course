import React from 'react';
import {View, Button, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import PaddingBtn from '../assets/styles/PaddingBtn';

const ColorCounter = ({color, deincrement, increment}) => {
  return (
    <View
      style={{
        margin: 5,
        borderColor: 'blue',
        borderWidth: 0.5,
        backgroundColor: color,
      }}>
      <Text style={{alignSelf: 'center', fontSize: 25, fontWeight: 'bold'}}>
        {color}
      </Text>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <PaddingBtn>
          <Button title={`Minus Color ${color}`} onPress={deincrement} />
        </PaddingBtn>
        <PaddingBtn>
          <Button title={`Plus Color ${color}`} onPress={increment} />
        </PaddingBtn>
      </View>
    </View>
  );
};

ColorCounter.propTypes = {
  color: PropTypes.string,
};

ColorCounter.defaultTypes = {
  color: 'green',
};

export default ColorCounter;
