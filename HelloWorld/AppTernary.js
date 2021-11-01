import React from 'react';
import {Text, View} from 'react-native';
const AppTernary = () => {
  var nilai = 40;
  var lulus = nilai < 50 ? 'Tidak Lulus' : 'Lulus';
  return (
    <View>
      <Text>Nilai Siswa</Text>
      <Text>
        {nilai}: {lulus}
      </Text>
    </View>
  );
};
export default AppTernary;
