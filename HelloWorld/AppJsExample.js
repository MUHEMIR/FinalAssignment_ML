import React from 'react';
import {Component} from 'react';
import {Text, View} from 'react-native';

function FunctionWithReturn() {
  return 'Rhodesians Never Die!';
}
var string1 = '';
function FunctionWithOutReturn(value) {
  string1 = value;
}

function AppJsExample() {
  var string2 = FunctionWithReturn();
  FunctionWithOutReturn('DezN');
  return (
    <View>
      <Text>Hello</Text>
      <Text>{string1}</Text>
      <Text>{string2}</Text>
    </View>
  );
}
export default AppJsExample;
