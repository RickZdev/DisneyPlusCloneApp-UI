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
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import COLORS from '../constants/COLORS';

const Carousel = ({data}) => {
  const {width} = Dimensions.get('window');
  const [currentIndex, setCurrentIndex] = useState(0);

  // animation
  const scrollX = useRef(new Animated.Value(0)).current;
  const translateX = useRef(new Animated.Value(0)).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0]?.index);
  }).current;

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

  // auto-scroll
  const listRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelectedIndex = event => {
    const viewSize = event.nativeEvent.layoutMeasurement.width;
    const contentOffset = event.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffset / viewSize);
    setSelectedIndex(index);
  };

  const changeSlide = () => {
    listRef.current.scrollToIndex({
      index: selectedIndex,
      animated: true,
    });
  };

  useEffect(() => {
    const unsubscribe = setInterval(() => {
      if (selectedIndex === data?.length - 1) {
        setSelectedIndex(prev => (prev = 0));
        changeSlide();
      } else {
        setSelectedIndex(prev => prev + 1);
        changeSlide();
      }
    }, 5000);
    return () => clearInterval(unsubscribe);
  }, [selectedIndex]);

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
        ref={listRef}
        onMomentumScrollEnd={e => handleSelectedIndex(e)}
        data={data}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        bounces
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
        renderItem={({item}) => (
          <CarouselLogo
            data={item}
            fadeAnimation={fadeAnimation}
            fadeOpacity={fadeOpacity}
          />
        )}
      />

      {/* carousel description */}
      <CarouselDescription
        item={{data, fadeOpacity, fadeAnimation, currentIndex}}
      />

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

const CarouselDescription = ({item}) => {
  const {data, fadeOpacity, fadeAnimation, currentIndex} = item;
  return (
    <Animated.View style={{opacity: fadeOpacity}}>
      <Animated.View
        style={{opacity: fadeAnimation}}
        className="justify-center items-center py-3">
        <Text className="text-white font-RobotoBold text-xs">
          {data[currentIndex].description}
        </Text>
      </Animated.View>
    </Animated.View>
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

export default Carousel;
