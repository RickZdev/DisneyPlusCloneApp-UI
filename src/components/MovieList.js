import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';

const MovieList = ({data, title}) => {
  return (
    <View className="mb-5">
      <Text className="text-white font-RobotoMedium text-lg mb-2">{title}</Text>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <MovieCard data={item} />}
      />
    </View>
  );
};

const MovieCard = ({data}) => {
  return (
    <View className="w-28 h-40 mr-1 rounded-md overflow-hidden">
      <Image
        source={data.moviePoster}
        resizeMode="cover"
        className="w-full h-full"
      />
    </View>
  );
};

export default MovieList;
