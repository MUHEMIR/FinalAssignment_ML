import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  Button,
  StyleSheet,
  Alert,
} from 'react-native';
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

/*class ComponentAction {
  static onPressButton() {
    
    if (setScore < 50) {
      Alert.alert('Sorry! You failed the test');
    } else {
      Alert.alert('Congrats! You passed the test');
    }
  }
}*/
const AppTextInput = () => {
  const [score, setScore] = useState('');

  const onPressButton = () => {
    if (setScore < 50) {
      Alert.alert('Sorry! You failed the test');
    } else {
      Alert.alert('Congrats! You passed the test');
    }
  };

  return (
    <View>
      <Text>Score</Text>
      <TextInput
        placeholder="Input your score here"
        keyboardType="numeric"
        value={score}
        style={styles.input}
        onChangeText={score => setScore(score)}
      />

      <Button title="Submit" onPress={() => onPressButton()} />
    </View>
  );
};
export default AppTextInput;
