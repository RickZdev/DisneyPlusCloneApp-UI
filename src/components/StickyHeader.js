import {View, Text, Image, Animated} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

import COLORS from '../constants/COLORS';
import DATA from '../constants/DATA';

const StickyHeader = ({minHeight, translateHeader}) => {
  return (
    <Animated.View
      className="absolute top-0 left-0 right-0 z-50"
      style={{transform: [{translateY: translateHeader}]}}>
      <LinearGradient
        colors={[COLORS.black, 'transparent']}
        className="opacity-95 items-center flex-row "
        style={{height: minHeight}}>
        <View className="flex-row justify-between space-x-2 items-center px-2">
          <View className="w-16 h-14 justify-center items-center">
            <Image
              source={DATA.disneyLogo}
              resizeMode="contain"
              className="w-full h-full"
            />
          </View>

          <View className="pt-3 items-center flex-row flex-1">
            <Text className="text-yellow-500 text-center font-RobotoBold text-xs">
              Subscribe
            </Text>
            <Entypo
              name="chevron-small-right"
              size={21}
              color={'rgba(234, 179, 8, 1)'}
            />
          </View>

          <Feather
            name="cast"
            size={22}
            color={COLORS.white}
            style={{paddingTop: 12}}
          />
        </View>
      </LinearGradient>
    </Animated.View>
  );
};

export default StickyHeader;
