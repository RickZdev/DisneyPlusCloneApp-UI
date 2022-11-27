import {View, Text, FlatList, Image} from 'react-native';

const MovieList = ({data, title}) => {
  return (
    <View className="mb-5">
      <Text className="text-white font-RobotoMedium text-lg mb-2">{title}</Text>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <MovieCard data={item} index={index} lastIndex={data.length - 1} />
        )}
      />
    </View>
  );
};

const MovieCard = ({data, index, lastIndex}) => {
  return (
    <View
      className="w-28 h-40 rounded-md overflow-hidden mr-6"
      style={{marginRight: index === lastIndex ? 24 : 4}}>
      <Image
        source={data.moviePoster}
        resizeMode="cover"
        className="w-full h-full"
      />
    </View>
  );
};

export default MovieList;
