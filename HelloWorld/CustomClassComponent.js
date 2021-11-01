import React from 'react';
import {Component} from 'react';
import {Text, View, Image} from 'react-native';
class AppHeader extends Component {
  render() {
    return (
      <View style={{height: 60, backgroundColor: 'gray'}}>
        <Text style={{fontWeight: 'bold', fontSize: 32}}>App Title Class</Text>
      </View>
    );
  }
}
class AppContent extends Component {
  render() {
    return (
      <View style={{backgroundColor: 'black'}}>
        <Text style={{fontWeight: 'bold', fontSize: 23, color: 'white'}}>
          App Content Class
        </Text>
        <Image
          source={require('./images/alicorn.png')}
          style={{width: 300, height: 50, resizeMode: 'contain'}}
        />
      </View>
    );
  }
}
export {AppHeader, AppContent};
