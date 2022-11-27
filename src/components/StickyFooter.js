import {View, Text, TouchableOpacity, Animated} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import COLORS from '../constants/COLORS';

const StickyFooter = ({translateFooter}) => {
  return (
    <Animated.View
      className="absolute bottom-0 left-0 right-0 z-50"
      style={{transform: [{translateY: translateFooter}]}}>
      <LinearGradient
        style={{height: 55, justifyContent: 'center', alignItems: 'center'}}
        colors={['transparent', COLORS.black]}>
        <LinearGradient
          colors={['#202227', '#212329']}
          style={{borderRadius: 100}}>
          <View className="justify-center items-center px-4 py-2 rounded-full flex-row space-x-3">
            <TouchableOpacity>
              <Text className="text-white font-RobotoMedium text-xs">
                Series
              </Text>
            </TouchableOpacity>
            <View className="h-full w-[1px] bg-white" />
            <TouchableOpacity>
              <Text className="text-white font-RobotoMedium text-xs">
                Movies
              </Text>
            </TouchableOpacity>
            <View className="h-full w-[1px] bg-white" />
            <TouchableOpacity>
              <Text className="text-white font-RobotoMedium text-xs">
                Originals
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </LinearGradient>
    </Animated.View>
  );
};

export default StickyFooter;
