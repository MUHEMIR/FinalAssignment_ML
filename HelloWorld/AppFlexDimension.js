import React from 'react';
import {View} from 'react-native';
const AppFlexDimension = () => {
  return (
    <View style={{flex: 1, flexDirection: 'column-reverse'}}>
      <View style={{flex: 1, backgroundColor: 'powderblue'}} />
      <View style={{flex: 1, backgroundColor: 'skyblue'}} />
      <View style={{flex: 1, backgroundColor: 'steelblue'}} />
    </View>
  );
};
export default AppFlexDimension;
