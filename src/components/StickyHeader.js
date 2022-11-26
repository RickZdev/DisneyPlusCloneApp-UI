import {View, Text, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import COLORS from '../constants/COLORS';

const StickyHeader = ({minHeight, backgroundColor}) => {
  return (
    <LinearGradient
      colors={
        backgroundColor
          ? [COLORS.primary, COLORS.primary]
          : [COLORS.black, 'transparent']
      }
      className="opacity-95  items-center flex-row space-x-2 pl-2"
      style={{height: minHeight, backgroundColor: backgroundColor}}>
      <View className="w-16 h-14 justify-center items-center">
        <Image
          source={require('../assets/logo/disney-plus-logo.png')}
          resizeMode="contain"
          className="w-full h-full"
        />
      </View>

      <View className="pt-3 items-center flex-row">
        <Text className="text-yellow-500 text-center font-RobotoMedium text-xs">
          Subscribe
        </Text>
        <Entypo
          name="chevron-small-right"
          size={21}
          color={'rgba(234, 179, 8, 1)'}
        />
      </View>
    </LinearGradient>
  );
};

export default StickyHeader;
