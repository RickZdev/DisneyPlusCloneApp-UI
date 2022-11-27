import {
  View,
  Text,
  Animated,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import COLORS from '../constants/COLORS';
import LinearGradient from 'react-native-linear-gradient';

const CarouselHeader = ({data}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
  const scrollX = useRef(new Animated.Value(0)).current;
  const translateX = useRef(new Animated.Value(0)).current;

  const {width} = Dimensions.get('window');
  const inputRange = [
    (currentIndex - 1) * width,
    currentIndex * width,
    (currentIndex + 1) * width,
  ];

  const fadeOpacity = scrollX.interpolate({
    inputRange,
    outputRange: [-1, 1, -1],
  });

  const fadeAnimation = translateX.interpolate({
    inputRange,
    outputRange: [-1, 1, -1],
  });

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: currentIndex * width,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  }, [currentIndex]);

  return (
    <View className="">
      {/* carousel image */}
      <Animated.View
        className="absolute h-[69%] bg-black -z-50"
        style={{width: width, opacity: fadeOpacity}}>
        <Image
          source={data[currentIndex].image}
          resizeMode="cover"
          className="w-full h-full"
        />
      </Animated.View>

      {/* carousel logo */}
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <CarouselLogo
            data={item}
            fadeAnimation={fadeAnimation}
            fadeOpacity={fadeOpacity}
          />
        )}
        horizontal={true}
        pagingEnabled
        bounces={true}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
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

      {/* carousel description */}
      <Animated.View style={{opacity: fadeOpacity}}>
        <Animated.View
          style={{opacity: fadeAnimation}}
          className="justify-center items-center py-3 S">
          <Text className="text-white font-RobotoBold text-xs">
            {data[currentIndex].description}
          </Text>
        </Animated.View>
      </Animated.View>

      {/* carousel buttons */}
      <CarouselButtons />

      {/* carousel paginator */}
      <CarouselPaginator data={data} scrollX={scrollX} />
    </View>
  );
};

const CarouselLogo = ({data, fadeAnimation, fadeOpacity}) => {
  const {width} = Dimensions.get('window');
  return (
    <View
      className="justify-center items-center"
      style={{width: width, height: 270}}>
      <LinearGradient
        colors={['transparent', COLORS.primary]}
        className="absolute h-[75%] w-full z-50 bottom-0 justify-end items-center">
        <Animated.View
          className="h-[45%] w-[90%]"
          style={{opacity: fadeOpacity}}>
          <Animated.Image
            source={data?.logo}
            resizeMode={'contain'}
            className="w-full h-full"
            style={{opacity: fadeAnimation}}
          />
        </Animated.View>
      </LinearGradient>
    </View>
  );
};

const CarouselPaginator = ({data, scrollX}) => {
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

const CarouselButtons = () => {
  return (
    <View className="flex-row justify-center items-center space-x-3 ">
      <LinearGradient colors={['#212227', '#222328']} style={{borderRadius: 8}}>
        <TouchableOpacity className="px-10 py-3 items-center flex-row space-x-2">
          <FontAwesome5 name="play" size={12} color={COLORS.white} />
          <Text className="text-sm font-RobotoMedium text-white">
            Watch Now
          </Text>
        </TouchableOpacity>
      </LinearGradient>

      <LinearGradient colors={['#212227', '#222328']} style={{borderRadius: 8}}>
        <TouchableOpacity className="justify-center items-center px-3 py-3">
          <Feather name="plus" size={20} color={COLORS.white} />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default CarouselHeader;
