import {
  View,
  FlatList,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Video from 'react-native-video';

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
  const [pauseVid, setPauseVid] = useState(true);
  return (
    <TouchableOpacity onPress={() => setPauseVid(!pauseVid)}>
      <LinearGradient
        colors={['#161920', '#1b1e27']}
        className="h-16 justify-center items-center mr-1 mb-1 rounded-md"
        style={{width: width / 3 - 12, overflow: 'hidden'}}>
        {!pauseVid && (
          <Video
            source={data?.video}
            muted={true}
            paused={pauseVid}
            onEnd={() => {
              setPauseVid(!pauseVid);
            }}
            resizeMode="cover"
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              backgroundColor: 'transparent',
            }}
          />
        )}
        <Image source={data.logo} resizeMode="contain" className="w-16 h-16" />
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default CategoryList;
