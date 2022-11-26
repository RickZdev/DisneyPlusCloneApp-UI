import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const CategoryList = ({data}) => {
  return (
    <ScrollView horizontal>
      <View className="justify-center items-center mb-1">
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          numColumns={3}
          renderItem={({item}) => <Card data={item} />}
        />
      </View>
    </ScrollView>
  );
};

const Card = ({data}) => {
  const {width} = Dimensions.get('window');
  return (
    <LinearGradient
      colors={['#161920', '#1b1e27']}
      className="h-16 justify-center items-center mr-1 mb-1 rounded-md"
      style={{width: width / 3 - 12}}>
      <Image source={data.logo} resizeMode="contain" className="w-16 h-16" />
    </LinearGradient>
  );
};

export default CategoryList;
