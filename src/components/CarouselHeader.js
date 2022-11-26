import {
  View,
  Text,
  Animated,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import COLORS from '../constants/COLORS';
import LinearGradient from 'react-native-linear-gradient';

const CarouselHeader = ({data}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const slidesRef = useRef(null);
  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View className="">
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => <OnboardingItem data={item} />}
        horizontal={true}
        pagingEnabled
        bounces={false}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ],
          {
            useNativeDriver: false,
          },
        )}
      />
      {/* 
      <Image
        source={data[currentIndex].image}
        resizeMode="contain"
        className="w-32 h-32"
      /> */}

      <View className="flex-row justify-center items-center space-x-3 ">
        <LinearGradient
          colors={['#212227', '#222328']}
          style={{borderRadius: 8}}>
          <TouchableOpacity className="px-10 py-3 items-center flex-row space-x-2">
            <FontAwesome5 name="play" size={12} color={COLORS.white} />
            <Text className="text-sm font-RobotoMedium text-white">
              Watch Now
            </Text>
          </TouchableOpacity>
        </LinearGradient>

        <LinearGradient
          colors={['#212227', '#222328']}
          style={{borderRadius: 8}}>
          <TouchableOpacity className="justify-center items-center px-3 py-3">
            <Feather name="plus" size={20} color={COLORS.white} />
          </TouchableOpacity>
        </LinearGradient>
      </View>
      <OnboardingPaginator data={data} scrollX={scrollX} />
    </View>
  );
};

const OnboardingItem = ({data}) => {
  const {width} = Dimensions.get('window');
  return (
    <View>
      <View className="justify-center items-center" style={{width: width}}>
        <View
          style={{
            width: width,
            height: 270,
            overflow: 'hidden',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={data.image}
            resizeMode="cover"
            style={{width: '100%', height: '100%'}}
          />
        </View>

        <LinearGradient
          colors={['transparent', COLORS.primary]}
          className="absolute h-[75%] w-full z-50 bottom-0 justify-end items-center">
          <Image
            source={data?.logo}
            resizeMode={'contain'}
            className="w-[90%] h-[45%]"
          />
        </LinearGradient>
      </View>
      <View className="justify-center items-center py-3 ">
        <Text className="text-white font-RobotoBold text-xs">
          {data.description}
        </Text>
      </View>
    </View>
  );
};

const OnboardingPaginator = ({data, scrollX}) => {
  const {width} = Dimensions.get('window');
  return (
    <View className="flex-row h-5 justify-center pt-3 pb-6">
      {data.map((item, index) => {
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [6, 7, 6],
          extrapolate: 'clamp',
        });

        const dotHeight = scrollX.interpolate({
          inputRange,
          outputRange: [6, 7, 6],
          extrapolate: 'clamp',
        });

        const dotOpacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.5, 1, 0.5],
          extrapolate: 'clamp',
        });
        return (
          <View key={item.id} className="items-center">
            <Animated.View
              className=" rounded-full bg-white mx-[4px] items-center"
              style={{width: dotWidth, opacity: dotOpacity, height: dotHeight}}
            />
          </View>
        );
      })}
    </View>
  );
};

export default CarouselHeader;
