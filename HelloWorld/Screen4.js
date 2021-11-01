import * as React from 'react';
import {View, Text, Button, Image} from 'react-native';
export const DetailScreen = ({route, navigation}) => {
  const {itemId} = route.params;
  const movies = [
    {id: 0, value: 'Gintama', img: require('./images/gin.jpg')},
    {id: 1, value: 'Zero Dark Thirty', img: require('./images/zero.jpg')},
    {id: 2, value: 'The Hurt Locker', img: require('./images/hurtlocker.jpg')},
    {
      id: 3,
      value: 'Blood Diamond',
      img: require('./images/blooddiamond.jpg'),
    },
  ];
  const selectedMovie = movies[itemId];
  return (
    <View style={{flex: 1}}>
      <Text>Detail Screen</Text>
      <Text>Movie ID: {selectedMovie.id}</Text>
      <Text>Movie Title: {selectedMovie.value}</Text>
      <Image
        source={selectedMovie.img}
        style={{width: 400, height: 490, resizeMode: 'contain'}}
      />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};
