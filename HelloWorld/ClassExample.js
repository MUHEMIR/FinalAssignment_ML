import React from 'react';
import {Component} from 'react';
import {Text, View} from 'react-native';
class Manusia {
  gender = '';
  tinggi = 0;
  berat = 0;
  nama = '';
  constructor(gender) {
    this.gender = gender;
  }
  Speak() {
    return this.nama;
  }
}
class ClassExample extends Component {
  render() {
    const org = new Manusia('pria');
    org.tinggi = 172;
    org.nama = 'Budi';
    var namaOrg = org.Speak();
    return (
      <View>
        <Text>Contoh Penggunaan Class</Text>
        <Text>{org.tinggi}</Text>
        <Text>{namaOrg}</Text>
      </View>
    );
  }
}
export default ClassExample;
