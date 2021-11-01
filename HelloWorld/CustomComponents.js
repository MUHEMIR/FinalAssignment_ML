import React from 'react';
import {Text, View, Image} from 'react-native';
export const AppHeader = () => {
  return (
    <View style={{height: 60, backgroundColor: 'gray'}}>
      <Text style={{fontWeight: 'bold', fontSize: 32}}>App Title</Text>
    </View>
  );
};
export const AppContent = () => {
  return (
    <View style={{backgroundColor: 'black'}}>
      <Text style={{fontWeight: 'bold', fontSize: 23, color: 'white'}}>
        App Content
      </Text>
      <Image
        source={require('./images/alicorn.png')}
        style={{width: 300, height: 50, resizeMode: 'contain'}}
      />
    </View>
  );
};
export const AppFooter = props => {
  return (
    <View style={{height: 40, backgroundColor: 'gray'}}>
      <Text style={{fontWeight: 'bold', fontSize: 23, color: 'white'}}>
        {props.footerContent}
      </Text>
    </View>
  );
};
