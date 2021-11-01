import React, {useState} from 'react';
import {View, Text, ImageBackground, Button, StyleSheet} from 'react-native';

const AppState = () => {
  const [count, setCount] = useState(0);
  return (
    <ImageBackground
      source={require('./images/alicorn.png')}
      style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text>You clicked {count} times</Text>
        <Button onPress={() => setCount(count + 1)} title="Click me!" />
      </View>
    </ImageBackground>
  );
};
export default AppState;
// React Native Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    backgroundColor: 'black',
  },
});
