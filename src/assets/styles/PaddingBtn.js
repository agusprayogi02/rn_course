import React from 'react';
import {View} from 'react-native';

const PaddingBtn = ({children}) => {
  return <View style={{padding: 10}}>{children}</View>;
};

export default PaddingBtn;
